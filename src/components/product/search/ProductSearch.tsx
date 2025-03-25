import { useProductSearch } from '@/hooks/useProductSearch'
import '@/styles/components/product/search/ProductSearch.scss'
import { ProductSearchProps } from '@/types/product'
import React from 'react'
import { useSelector } from 'react-redux'
import ProductSearchHeader from './ProductSearchHeader'
import ProductSearchResults from './ProductSearchResults'

const ProductSearch: React.FC<ProductSearchProps> = ({
	showAddSaleButtons = true,
	getProductAmount = null,
	handleChangeProductAmount = null,
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

	return (
		<div className='product-search'>
			<ProductSearchHeader
				inputQuery={`${inputQuery}`}
				handleInputChange={handleInputChange}
				toggleSearchVisibility={toggleSearchVisibility}
				isSearchVisible={isSearchVisible}
			/>
			<ProductSearchResults
				isSearchVisible={isSearchVisible}
				inputQuery={inputQuery}
				filteredProducts={filteredProducts}
				handleAddSale={handleAddSale}
				showAddSaleButtons={showAddSaleButtons}
				getProductAmount={getProductAmount || (() => null)}
				handleChangeProductAmount={handleChangeProductAmount || (() => null)}
			/>
		</div>
	)
}

export default ProductSearch
