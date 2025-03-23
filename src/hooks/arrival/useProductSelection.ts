import { SelectedProduct } from '@/types/product'
import { Product } from '@/types/product/product.model'
import { useState } from 'react'

export const useProductSelection = () => {
	const [selectedProducts, setSelectedProducts] = useState<SelectedProduct[]>(
		[]
	)
	const [amount, setAmount] = useState(1)
	const [price, setPrice] = useState(0)

	const getProductAmount = (productId: number) => {
		const product = selectedProducts.find(p => p.id === productId)
		return product ? product.amount : 0
	}

	const handleChangeProductAmount = (product: Product, amount: number) =>
		setSelectedProducts(prev =>
			prev
				.map(p =>
					p.id === product.id
						? { ...p, amount: Math.max(1, p.amount + amount) }
						: p
				)
				.concat(prev.every(p => p.id !== product.id) ? product : [])
		)

	const handleRemoveProduct = (id: number) => {
		setSelectedProducts(prev => prev.filter(product => product.id !== id))
	}

	return {
		selectedProducts,
		amount,
		price,
		setAmount,
		setPrice,
		getProductAmount,
		handleChangeProductAmount,
		handleRemoveProduct,
		setSelectedProducts,
	}
}
