import { useModalMessage } from '@/context/ModalMessageContext'
import { addSale, getProducts } from '@/services/api'
import { Product } from '@/types/product/product.model'
import { useEffect, useState } from 'react'

export const useProductSearch = (isSearchVisibleDefault = false) => {
	const [products, setProducts] = useState<Product[]>([])
	const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
	const [inputQuery, setInputQuery] = useState('')
	const [isSearchVisible, setSearchVisibility] = useState(
		isSearchVisibleDefault
	)
	const { showModal } = useModalMessage()

	useEffect(() => {
		const fetchData = async () => {
			try {
				const fetchedProducts = await getProducts()
				setProducts(fetchedProducts)
				setFilteredProducts(fetchedProducts)
				handleInputChange(inputQuery, fetchedProducts)
			} catch (error) {
				console.error('Error loading data:', error)
			}
		}
		fetchData()
	}, [])

	const handleInputChange = (query: string, sourceProducts?: Product[]) => {
		setInputQuery(query)
		const productList = sourceProducts || products
		if (query.length > 0 && !isSearchVisible) {
			setSearchVisibility(true)
		} else if (query.length === 0 && isSearchVisible) {
			setSearchVisibility(false)
		}

		const queries = query.toLowerCase().trim().split(/\s+/)

		const filtered = productList.filter(product => {
			const isMatch = (value?: string) =>
				value && queries.every(q => value.toLowerCase().includes(q))

			return (
				isMatch(product.product_type_name) ||
				isMatch(product.producer_name) ||
				isMatch(product.name) ||
				isMatch(product.volume_amount) ||
				isMatch(product.strength_amount) ||
				isMatch(product.cartridge_model_name) ||
				isMatch(product.liquid_model_name) ||
				isMatch(product.puffs_amount_value) ||
				isMatch(product.resistance_amount) ||
				isMatch(product.pod_model_name)
			)
		})
		setFilteredProducts(filtered)
	}

	const handleAddSale = async (
		productId: number,
		amount = 1,
		price: number
	) => {
		try {
			const response = await addSale(productId, amount, price)
			showModal(response.message)
			if (response.success) {
				setFilteredProducts(prev =>
					prev.map(p =>
						p.id === productId ? { ...p, amount: p.amount - amount } : p
					)
				)
			}
		} catch {
			showModal('Помилка при додаванні продажу. Спробуйте ще раз.')
		}
	}

	const toggleSearchVisibility = () => setSearchVisibility(prev => !prev)

	return {
		products,
		filteredProducts,
		inputQuery,
		isSearchVisible,
		handleInputChange,
		handleAddSale,
		toggleSearchVisibility,
	}
}
