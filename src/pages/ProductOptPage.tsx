import ArrivalProductsTable from '@/components/pages/product-arrival-opt/OptProductsTable'
import SelectedProductsList from '@/components/pages/product-arrival-opt/SelectedProductsList'
import ProductSearch from '@/components/product/search/ProductSearch'
import { useArrivalActions } from '@/hooks/arrival/useArrivalActions'
import { useArrivalProducts } from '@/hooks/arrival/useArrivalProducts'
import { useProductSelection } from '@/hooks/arrival/useProductSelection'
import { addOpt } from '@/services/api'
import '@/styles/pages/product-arrival-opt/ProductArrival.scss'
import React from 'react'

const ProductOptPage: React.FC = () => {
	const {
		selectedProducts,
		amount,
		price,
		setAmount,
		setPrice,
		handleRemoveProduct,
	} = useProductSelection()
	const { arrivalProducts, totalAmount, updateAmount, updatePrice } =
		useArrivalProducts()
	const { addSelectedProductsToOpt, submitArrival } = useArrivalActions()

	const handleSubmitArrival = async () => {
		await submitArrival({
			apiFunction: addOpt,
			successMessage: 'Опт успішно додано!',
			errorMessage: 'Помилка при додаванні опту.',
			clearArrival: true,
		})
	}

	return (
		<>
			<div className='product-arrival'>
				<h1 className='product-arrival__title'>Додавання опту товарів</h1>
				<ProductSearch showAddSaleButtons={false} />
				<SelectedProductsList
					selectedProducts={selectedProducts}
					amount={amount}
					price={price}
					onAmountChange={setAmount}
					onPriceChange={setPrice}
					onRemoveProduct={handleRemoveProduct}
					onSubmitSelected={addSelectedProductsToOpt}
				/>
				{arrivalProducts.length > 0 && (
					<ArrivalProductsTable
						arrivalProducts={arrivalProducts}
						onAmountChange={updateAmount}
						onPriceChange={updatePrice}
						onSubmitArrival={handleSubmitArrival}
						submitButtonText='Додати прихід'
						totalAmount={totalAmount}
					/>
				)}
			</div>
		</>
	)
}

export default ProductOptPage
