import ProductItem from '@/components/product/ProductItem'
import { ProductListProps } from '@/types/product'
import React from 'react'

const ProductList: React.FC<ProductListProps> = ({
	products,
	setEditingProduct,
	handleAddSale,
}) => {
	return (
		<>
			{products.map(product => (
				<ProductItem
					key={product.id}
					product={product}
					setEditingProduct={setEditingProduct}
					handleAddSale={handleAddSale}
				/>
			))}
		</>
	)
}

export default ProductList
