import '@/styles/components/product/ProductItem.scss'
import { EditingProductState } from '@/types/product'
import React from 'react'

interface ProductCategoryProps {
    category: string
    products: any
    setEditingProduct: (product: EditingProductState) => void
    handleItemClick: (key: string) => void
}

const ProductCategoryItem: React.FC<ProductCategoryProps> = ({
    category,
    products,
    setEditingProduct,
    handleItemClick,
}) => {
    return (
        <div
            key={category}
            className="button-item"
            onClick={() => handleItemClick(category)}
        >
            <h3>{category}</h3>
            <div className="product-item__edit" onClick={(e) => {
                e.stopPropagation(); setEditingProduct({product: products, type: "row"})
            }}>
                <img src="images/dots.png" alt="" />
            </div>
        </div>
    )
}

export default ProductCategoryItem
