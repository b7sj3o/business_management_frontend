import NumberField from '@/components/pages/product-arrival-opt/NumberField'
import ProductSearch from '@/components/product/search/ProductSearch'
import { useArrivalActions } from '@/hooks/arrival/useArrivalActions'
import { useProductSelection } from '@/hooks/arrival/useProductSelection'
import { addArrival } from '@/services/api'
import '@/styles/pages/product-arrival-opt/ProductArrival.scss'

const ProductArrivalPage: React.FC = () => {
	const { price, setPrice, selectedProducts } = useProductSelection()
	const { submitArrival } = useArrivalActions()

	const handleSubmitArrival = () => {
		submitArrival({
			apiFunction: addArrival,
			successMessage: 'Прихід успішно додано!',
			errorMessage: 'Помилка при додаванні приходу товарів.',
			clearArrival: true,
		})
	}

	return (
		<>
			<div className='product-arrival'>
				<h1 className='product-arrival__title'>Додавання приходу товарів</h1>
				<ProductSearch showAddSaleButtons={false} />
				<div className='arrival-selected'>
					<NumberField
						label='Закупна ціна'
						min={0}
						step={10}
						value={price}
						handleChange={setPrice}
					/>
				</div>

				{selectedProducts.length > 0 && (
					<button
						className='product-arrival__submit-btn'
						onClick={handleSubmitArrival}
					>
						Додати
					</button>
				)}
			</div>
		</>
	)
}

export default ProductArrivalPage
