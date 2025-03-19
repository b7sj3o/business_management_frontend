import '@/styles/components/product/search/SearchProductItem.scss'
import { SearchProductItemProps } from '@/types/product'
import React from 'react'

const SearchProductItem: React.FC<SearchProductItemProps> = ({
	product,
	onAddSale,
	onProductAdd,
	showAddSaleButtons = true,
}) => {
	return (
		<li className='search-item'>
			<h3 className='search-item__name'>
				{product.name || product.cartridge_model_name}{' '}
				{product.resistance_amount ? `- ${product.resistance_amount}` : ''} -{' '}
				{product.producer_name}
			</h3>
			<p className='search-item__detail'>К-сть: {product.amount}</p>
			<p className='search-item__detail'>
				Тип товару: {product.product_type_name}
			</p>
			{product.volume_amount && (
				<p className='search-item__detail'>Об'єм: {product.volume_amount}</p>
			)}
			{showAddSaleButtons && (
				<div className='search-item__btns'>
					<button
						onClick={() => onAddSale?.(product.id, product.sell_price)}
						className='search-item__add-btn'
					>
						Продаж
					</button>
					<button
						onClick={() => onAddSale?.(product.id, product.drop_sell_price)}
						className='search-item__add-btn'
					>
						Продаж (дроп)
					</button>
				</div>
			)}
			{onProductAdd && (
				<button
					onClick={() => onProductAdd(product)}
					className='search-item__add-btn'
				>
					+
				</button>
			)}
		</li>
	)
}

export default SearchProductItem
