import NumberField from '@/components/pages/product-arrival-opt/NumberField'
import ProductSearch from '@/components/product/search/ProductSearch'
import { useModalMessage } from '@/context/ModalMessageContext'
// import { useArrivalActions } from '@/hooks/arrival/useArrivalActions'
import { useProductSelection } from '@/hooks/arrival/useProductSelection'
import { addArrival, addOpt } from '@/services/api'
import '@/styles/pages/product-arrival-opt/ProductArrival.scss'
import { Product, SelectedProduct } from '@/types/product'
import { useState } from 'react'

const ProductOptPage: React.FC = () => {
	const { showModal } = useModalMessage()
	const [ selectedProducts, setSelectedProducts ] = useState<SelectedProduct[]>([]);
	const [price, setPrice] = useState(0)
	

	const handleSubmitOpt = async () => {
			const productsToSend = selectedProducts.map(({ product, amount }) => ({
				id: product.id,
				amount,
				price,
			}))
	
			try {
				const response = await addOpt(productsToSend, price)
				if (response.success) {
					showModal('Оптову продажу успішно здійснено!')
					setSelectedProducts([])
				} else {
					showModal('Помилка при здійснені оптової продажі!')
				}
			} catch (error) {
				console.error('Error submitting opt sale:', error)
			}
	}

	const getProductAmount = (productId: number) => {
			const product = selectedProducts.find(p => p.product.id === productId)
			return product ? product.amount : 0
		}
	
	const handleChangeProductAmount = (product: Product, amount: number) => {
		setSelectedProducts((prev) => {
			const existingProduct = prev.find((p) => p.product.id === product.id);
			if (existingProduct) {
				return prev.map((p) =>
					p.product.id === product.id ? { ...p, amount: Math.max(1, p.amount + amount) } : p
				);
			} else {
				return [...prev, { product, amount }];
			}
		});
	};

	return (
		<>
			<div className='product-arrival'>
				<h1 className='product-arrival__title'>Додавання опту</h1>
				<ProductSearch
					showAddSaleButtons={false}
					getProductAmount={getProductAmount}
					handleChangeProductAmount={handleChangeProductAmount} />
				<div className='arrival-selected'>
					<NumberField
						label='Продажна ціна'
						min={0}
						step={10}
						value={price}
						handleChange={setPrice}
					/>
				</div>

				{(selectedProducts.length > 0 && price > 0) && (
					<button
						className='product-arrival__submit-btn'
						onClick={handleSubmitOpt}
					>
						Додати
					</button>
				)}
			</div>
		</>
	)
}

export default ProductOptPage