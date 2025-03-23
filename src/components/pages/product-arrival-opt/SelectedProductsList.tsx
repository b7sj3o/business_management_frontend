import { useProductSelection } from '@/hooks/arrival/useProductSelection'
import '@/styles/components/pages/product-arrival-opt/SelectedProductsList.scss'
import { SelectedProduct } from '@/types/product'
import React from 'react'
import ArrivalControls from './OptControls'

interface SelectedProductsListProps {
	selectedProducts: SelectedProduct[]
	amount: number
	price: number
	onAmountChange: (value: number) => void
	onPriceChange: (value: number) => void
	onRemoveProduct: (id: number) => void
	onSubmitSelected: () => void
}

const SelectedProductsList: React.FC<SelectedProductsListProps> = ({
	amount,
	price,
	onAmountChange,
	onPriceChange,
	onRemoveProduct,
	onSubmitSelected,
}) => {
	const { selectedProducts } = useProductSelection()

	return (
		<div className='arrival-selected'>
			<h2 className='arrival-selected__title'>Вибрані товари</h2>
			{selectedProducts.length > 0 ? (
				<>
					<ul className='arrival-selected__list'>
						{selectedProducts.map(p => (
							<li key={p.id} className='arrival-selected__item'>
								<h3 className='arrival-selected__name'>
									{p.producer_name} - <span>{p.name}</span>
								</h3>
								<button
									className='arrival-selected__remove'
									onClick={() => onRemoveProduct(p.id)}
								>
									Видалити
								</button>
							</li>
						))}
					</ul>
					<ArrivalControls
						amount={amount}
						price={price}
						onAmountChange={onAmountChange}
						onPriceChange={onPriceChange}
						onSubmitSelected={onSubmitSelected}
						isDisabled={selectedProducts.length === 0}
					/>
				</>
			) : (
				<p className='arrival-selected__empty-message'>
					Ви ще не додали жодного товару.
				</p>
			)}
		</div>
	)
}

export default SelectedProductsList
