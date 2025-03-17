import { addSale } from '@/services/api'
import '@/styles/components/modal/ModalFound.scss'
import { Product } from '@/types/product'
import React from 'react'

interface ModalProps {
	product: Product
	isOpen: boolean
	onClose: () => void
	showModal: (message: string) => void
}

const ModalFound: React.FC<ModalProps> = ({
	product,
	isOpen,
	onClose,
	showModal,
}) => {
	if (!isOpen) return null

	const handleAddAmount = async () => {
		try {
			if (product.id) {
				const response = await addSale(product.id, 1, product.sell_price)
				showModal(response.message)
			}
		} catch (error) {
			console.error('Error loading data:', error)
		}
	}

	return (
		<div className='modal-found__overlay'>
			<div className='modal-found__container'>
				<h2>{product.name}</h2>
				<p>Amount: {product.amount}</p>
				<p>Barcode: {product.barcode}</p>

				<button onClick={handleAddAmount}>Add Amount</button>
				<button onClick={onClose}>X</button>
			</div>
		</div>
	)
}

export default ModalFound
