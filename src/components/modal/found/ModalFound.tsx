import { addSale } from '@/services/api'
import { ModalFoundProps } from '@/types/modal'
import BaseModal from './BaseModal'

const ModalFound: React.FC<ModalFoundProps> = ({
	product,
	isOpen,
	onClose,
	showModal,
}) => {
	const handleAddAmount = async () => {
		try {
			if (product.id) {
				const response = await addSale(product.id, 1, product.sell_price)
				showModal(response.message)
			}
		} catch (error) {
			console.error('Error:', error)
		}
	}

	return (
		<BaseModal
			isOpen={isOpen}
			title={product.name}
			content={
				<>
					<p>Amount: {product.amount}</p>
					<p>Barcode: {product.barcode}</p>
				</>
			}
			actions={<button onClick={handleAddAmount}>Add Amount</button>}
			onClose={onClose}
		/>
	)
}

export default ModalFound
