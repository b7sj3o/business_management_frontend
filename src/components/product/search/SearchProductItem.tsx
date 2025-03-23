import { useProductSelection } from '@/hooks/arrival/useProductSelection'
import { useProducts } from '@/hooks/useProducts'
import '@/styles/components/product/search/SearchProductItem.scss'
import { SearchProductItemProps } from '@/types/product'
import React from 'react'

const SearchProductItem: React.FC<SearchProductItemProps> = ({
	product,
	onAddSale,
	showAddSaleButtons = true,
}) => {
	const { getProductName } = useProducts()
	const { getProductAmount, handleChangeProductAmount } = useProductSelection()

	return (
		<li className='search-item'>
			<h3 className='search-item__name'>{getProductName(product)}</h3>
			<p className='search-item__detail'>К-сть: {product.amount}</p>
			<p className='search-item__detail'>Закупна ціна: {product.buy_price}</p>
			<p className='search-item__detail'>
				Тип товару: {product.product_type_name}
			</p>
			{product.volume_amount && (
				<p className='search-item__detail'>Об'єм: {product.volume_amount}</p>
			)}
			<div className='search-item__action-btns'>
				{showAddSaleButtons && (
					<>
						<button
							onClick={() => onAddSale?.(product.id, product.sell_price)}
							className='search-item__action-btn'
						>
							Продаж
						</button>
						<button
							onClick={() => onAddSale?.(product.id, product.drop_sell_price)}
							className='search-item__action-btn'
						>
							Продаж (дроп)
						</button>
					</>
				)}
				{handleChangeProductAmount && (
					<>
						<button
							onClick={() => handleChangeProductAmount(product, -1)}
							className='search-item__action-btn'
						>
							-
						</button>
						<p>{getProductAmount && getProductAmount(product.id)}</p>
						<button
							onClick={() => handleChangeProductAmount(product, 1)}
							className='search-item__action-btn'
						>
							+
						</button>
					</>
				)}
			</div>
		</li>
	)
}

export default SearchProductItem
