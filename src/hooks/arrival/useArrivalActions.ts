// import { useModalMessage } from '@/context/ModalMessageContext'
// import { ArrivalProducts } from '@/types/product'
// import { useArrivalProducts } from './useArrivalProducts'
// import { useProductSelection } from './useProductSelection'

// export const useArrivalActions = () => {
// 	const { arrivalProducts, setArrivalProducts } = useArrivalProducts()
// 	const { selectedProducts, setSelectedProducts, amount, price } =
// 		useProductSelection()
// 	const { showModal } = useModalMessage()

// 	const addSelectedProductsToOpt = async () => {
// 		const newProducts = selectedProducts.filter(
// 			p => !arrivalProducts.some(item => item.product.id === p.product.id)
// 		)

// 		if (newProducts.length) {
// 			const newArrivalProducts = newProducts.map(product => ({
// 				product,
// 				amount,
// 				price,
// 			}))

// 			setArrivalProducts([...arrivalProducts, ...newArrivalProducts])

// 			setSelectedProducts([])
// 		} else {
// 			showModal('Такий товар вже є в таблиці!')
// 		}
// 	}

// 	const submitArrival = async () => {}

// 	return {
// 		addSelectedProductsToOpt,
// 		submitArrival,
// 	}
// }

export {}