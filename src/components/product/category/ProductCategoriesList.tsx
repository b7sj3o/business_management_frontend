import { ProductCategoriesProps } from '@/types/product'
import React from 'react'
import ProductCategoryItem from './ProductCategoryItem'

const ProductCategoriesList: React.FC<ProductCategoriesProps> = ({
	currentLevel,
	setEditingProduct,
	handleItemClick,
}) => {
	return (
		<>
			{Object.entries(currentLevel).map(([category, products]) => (
				<ProductCategoryItem
					key={category}
					category={category}
					products={products}
					setEditingProduct={setEditingProduct}
					handleItemClick={handleItemClick}
				/>
			))}
		</>
	)
}

export default ProductCategoriesList
