import '@/styles/components/pages/product-arrival-opt/OptProductsTable.scss'
import { Product } from '@/types/product/product.model'
import React from 'react'
import NumberField from './NumberField'

export interface OptProductsTableProps {
	arrivalProducts: Array<{ product: Product; amount: number; price: number }>
	onAmountChange: (id: number, value: number) => void
	onPriceChange: (id: number, value: number) => void
	onSubmitArrival: () => void
	submitButtonText: string
	totalAmount?: number
}

const OptProductsTable: React.FC<OptProductsTableProps> = ({
	arrivalProducts,
	onAmountChange,
	onPriceChange,
	onSubmitArrival,
	submitButtonText,
	totalAmount,
}) => (
	<div className='opt-products'>
		<h2>Опт товарів</h2>
		<table className='opt-products__table'>
			<thead>
				<tr>
					<th>Назва товару</th>
					<th>
						Кількість{' '}
						{totalAmount && (
							<span className='text-red-600'>| {totalAmount}</span>
						)}
					</th>
					<th>Ціна</th>
				</tr>
			</thead>
			<tbody>
				{arrivalProducts.map(({ product, amount, price }) => (
					<tr key={product.id}>
						<td>
							{product.producer_name} - {product.name}
						</td>
						{[
							{ value: amount, handleChange: onAmountChange, min: 1 },
							{ value: price, handleChange: onPriceChange, min: 0 },
						].map(({ value, handleChange, min }, index) => (
							<td key={index}>
								<NumberField
									min={min}
									step={1}
									value={value}
									handleOptChange={handleChange}
									productId={product.id}
								/>
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
		<button className='opt-products__submit' onClick={onSubmitArrival}>
			{submitButtonText}
		</button>
	</div>
)

export default OptProductsTable
