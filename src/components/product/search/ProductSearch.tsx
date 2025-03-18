import { useProductSearch } from '@/hooks/useProductSearch'
import '@/styles/components/product/search/ProductSearch.scss'
import { ProductSearchProps } from '@/types/product'
import React from 'react'
import { useSelector } from 'react-redux'
import SearchProductItem from './SearchProductItem'

const ProductSearch: React.FC<ProductSearchProps> = ({
	onProductAdd,
	showAddSaleButtons = true,
}) => {
	const settings = useSelector((state: any) => state.settings)
	const {
		filteredProducts,
		inputQuery,
		isSearchVisible,
		handleInputChange,
		handleAddSale,
		toggleSearchVisibility,
	} = useProductSearch(settings.isSearchVisible)

	// TODO: add Tailwind styles for classes OR delete unused classes ⬇⬇⬇
	return (
		<div className='product-search'>
			<div className='product-search__header'>
				<input
					type='text'
					value={inputQuery}
					onChange={e => handleInputChange(e.target.value)}
					placeholder='Пошук продуктів'
					className='product-search__input'
				/>
				<button
					className='product-search__button'
					type='button'
					onClick={toggleSearchVisibility}
				>
					<img
						src={`/images/${isSearchVisible ? 'eye' : 'no-eye'}.png`}
						alt={isSearchVisible ? 'Сховати форму' : 'Показати форму'}
						title={isSearchVisible ? 'Сховати форму' : 'Показати форму'}
					/>
				</button>
			</div>

			<ul className='product-search__results'>
				{isSearchVisible &&
				inputQuery.length >= 1 &&
				filteredProducts.length === 0 ? (
					<h1>Not found</h1>
				) : (
					isSearchVisible &&
					filteredProducts.map(product => (
						<SearchProductItem
							key={product.id}
							product={product}
							onAddSale={(productId, price) =>
								handleAddSale(productId, 1, price)
							}
							onProductAdd={onProductAdd}
							showAddSaleButtons={showAddSaleButtons}
						/>
					))
				)}
			</ul>
		</div>
	)
}

export default ProductSearch
