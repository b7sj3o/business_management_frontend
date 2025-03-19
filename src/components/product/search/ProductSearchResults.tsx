import { ProductSearchResultsProps } from '@/types/product'
import SearchProductItem from './SearchProductItem'

const ProductSearchResults: React.FC<ProductSearchResultsProps> = ({
	isSearchVisible,
	inputQuery,
	filteredProducts,
	handleAddSale,
	onProductAdd,
	showAddSaleButtons,
}) => {
	return (
		<>
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
		</>
	)
}

export default ProductSearchResults
