import '@/styles/components/product/ProductItem.scss'
import { EditingProductState, ProductInfo } from '@/types/product'
import React from 'react'

interface ProductItemProps {
	product: ProductInfo
	setEditingProduct: (product: EditingProductState) => void
	handleAddSale: (productId: number, amount: number, price: number) => void
}

const ProductItem: React.FC<ProductItemProps> = ({
	product,
	setEditingProduct,
	handleAddSale,
}) => {
	return (
		<div
			key={product.id}
			className={`product-item ${
				product.amount === 0 ? 'product-item__empty' : ''
			}`}
		>
			<div
				className='product-item__edit'
				onClick={() => setEditingProduct({ product, type: 'single' })}
			>
				<img src='images/dots.png' alt='' />
			</div>
			<div className='product-item__details'>
				<h4>{product.resistance ? product.resistance : product.name}</h4>
				<p>Кількість: {product.amount}</p>
				<p>Ціна: {product.sell_price}</p>
				<br />
				<button
					onClick={() => handleAddSale(product.id, 1, product.sell_price)}
					disabled={product.amount === 0}
				>
					Продати одну
				</button>
				<button
					onClick={() => handleAddSale(product.id, 1, product.drop_sell_price)}
					disabled={product.amount === 0}
				>
					Продати одну дроп
				</button>
				<button
					onClick={() =>
						setEditingProduct({
							product: { ...product, amount: 1 },
							type: 'sale',
						})
					}
					disabled={product.amount === 0}
				>
					Кастом продажа
				</button>
			</div>
		</div>
	)
}

export default ProductItem
