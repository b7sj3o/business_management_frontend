import { Product } from '@/types/product/product.model'
import { useMemo, useState } from 'react'

export const useArrivalProducts = () => {
	const [arrivalProducts, setArrivalProducts] = useState<
		Array<{ product: Product; amount: number; price: number }>
	>([])

	const updateAmount = (productId: number, newAmount: number) => {
		setArrivalProducts(arrival =>
			arrival.map(arr =>
				arr.product.id === productId ? { ...arr, amount: newAmount } : arr
			)
		)
	}
	const updatePrice = (productId: number, newPrice: number) => {
		setArrivalProducts(arrival =>
			arrival.map(arr =>
				arr.product.id === productId ? { ...arr, price: newPrice } : arr
			)
		)
	}

	const totalAmount = useMemo(
		() => arrivalProducts.reduce((sum, product) => sum + product.amount, 0),
		[arrivalProducts]
	)

	return {
		arrivalProducts,
		setArrivalProducts,
		updateAmount,
		updatePrice,
		totalAmount,
	}
}
