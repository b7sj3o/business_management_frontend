import { useModalMessage } from '@/context/ModalMessageContext'
import { ArrivalProducts } from '@/types/product'
import { useArrivalProducts } from './useArrivalProducts'
import { useProductSelection } from './useProductSelection'

export const useArrivalActions = () => {
	const { arrivalProducts, setArrivalProducts } = useArrivalProducts()
	const { selectedProducts, setSelectedProducts, amount, price } =
		useProductSelection()
	const { showModal } = useModalMessage()

	const addSelectedProductsToOpt = async () => {
		const newProducts = selectedProducts.filter(
			p => !arrivalProducts.some(item => item.product.id === p.id)
		)

		if (newProducts.length) {
			const newArrivalProducts = newProducts.map(product => ({
				product,
				amount,
				price,
			}))

			setArrivalProducts([...arrivalProducts, ...newArrivalProducts])

			setSelectedProducts([])
		} else {
			showModal('Такий товар вже є в таблиці!')
		}
	}

	const submitArrival = async ({
		apiFunction,
		successMessage,
		errorMessage,
		clearArrival = true,
	}: {
		apiFunction: (
			products: ArrivalProducts[],
			buy_price: number
		) => Promise<{ success: boolean; data: string }>
		successMessage: string
		errorMessage: string
		clearArrival?: boolean
	}) => {
		const psToSend = arrivalProducts.map(({ product, amount, price }) => ({
			id: product.id,
			amount,
			price,
		}))

		try {
			const response = await apiFunction(psToSend, price)
			if (response.success) {
				alert(successMessage)
				setSelectedProducts([])
				if (clearArrival) setArrivalProducts([])
			} else {
				alert(errorMessage)
			}
		} catch (error) {
			console.error('Error submitting arrival:', error)
		}
	}

	return {
		addSelectedProductsToOpt,
		submitArrival,
	}
}
