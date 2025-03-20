import CreateProductForm from '@/components/pages/create-product/CreateProductForm'
import FormSwitcher from '@/components/pages/create-product/FormSwitcher'
import MultipleProductsForm from '@/components/pages/create-product/MultipleProductsForm'
import { useModalMessage } from '@/context/ModalMessageContext'
import {
	createMultipleProducts,
	createProduct,
	getProductForeignKeys,
} from '@/services/api'
import '@/styles/pages/create-product/CreateProductPage.scss'
import { Producer, ProductForeignKeys, ProductForm } from '@/types/product-form'
import { filterProducers } from '@/utils/createProductUtils'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const CreateProductPage: React.FC = () => {
	const location = useLocation()
	const searchParams = new URLSearchParams(location.search)
	const barcodeFromScanner = searchParams.get('scannerBarcode')

	const [formData, setFormData] = useState<ProductForm>({
		product_type: '',
		producer: '',
		name: '',
		buy_price: 0,
		sell_price: 0,
		amount: 0,
		drop_sell_price: 0,
		barcode: '',
	})

	const [productForeignKeys, setProductForeignKeys] =
		useState<ProductForeignKeys>()
	const [filteredProducers, setFilteredProducers] = useState<Producer[]>([])
	const { showModal } = useModalMessage()
	const [selectedForm, setSelectedForm] = useState('form-one')

	useEffect(() => {
		const fetchData = async () => {
			try {
				const fetchedProductForeignKeys = await getProductForeignKeys()
				setProductForeignKeys(fetchedProductForeignKeys)

				if (barcodeFromScanner) {
					setFormData(prevData => ({
						...prevData,
						barcode: barcodeFromScanner,
					}))
				}
			} catch (error) {
				console.error('Error loading data:', error)
			}
		}
		fetchData()
	}, [barcodeFromScanner])

	useEffect(() => {
		if (formData.product_type && productForeignKeys?.producers) {
			const filtered = filterProducers(
				formData.product_type,
				productForeignKeys.producers
			)
			setFilteredProducers(filtered)
		}
	}, [formData.product_type, productForeignKeys])

	const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedType = e.target.value
		setFormData(prevData => ({
			...prevData,
			product_type: selectedType,
			producer: '',
			volume: '',
			strength: '',
			puffs_amount: '',
			resistance: '',
			pod_model: '',
			liquid_model: '',
			cartridge_model: '',
		}))
	}

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value } = e.target
		setFormData(prevData => ({
			...prevData,
			[name]: value,
		}))
	}

	const handleSubmitSingle = async (e: React.FormEvent) => {
		e.preventDefault()
		try {
			const response = await createProduct(formData)
			showModal(response.message)
		} catch (error) {
			showModal(`Помилка при створенні продукту: ${error}`)
		}
	}

	const handleSubmitMultiple = async (e: React.FormEvent) => {
		e.preventDefault()
		const form = e.target as HTMLFormElement
		const productsInput = form.elements.namedItem(
			'products'
		) as HTMLTextAreaElement
		const productsText = productsInput.value

		try {
			const response = await createMultipleProducts(productsText)
			showModal(response.message)
		} catch (error) {
			showModal(`Помилка: ${error}`)
		}
	}

	const handleChangeForm = (e: any, formName: string) => {
		if (formName === selectedForm) return
		setSelectedForm(formName)
	}

	return (
		<>
			<FormSwitcher
				selectedForm={selectedForm}
				handleChangeForm={handleChangeForm}
			/>

			{selectedForm === 'form-one' && (
				<CreateProductForm
					formData={formData}
					productForeignKeys={productForeignKeys}
					filteredProducers={filteredProducers}
					handleChange={handleChange}
					handleSubmit={handleSubmitSingle}
				/>
			)}

			{selectedForm === 'form-many' && (
				<MultipleProductsForm
					formData={formData}
					handleChange={handleChange}
					handleSubmit={handleSubmitMultiple}
				/>
			)}
		</>
	)
}

export default CreateProductPage
