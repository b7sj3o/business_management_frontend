import { ModalNotFoundProps } from '@/types/modal'
import { useNavigate } from 'react-router-dom'
import BaseModal from './BaseModal'

const ModalNotFound: React.FC<ModalNotFoundProps> = ({
	barcode,
	isOpen,
	onClose,
}) => {
	const navigate = useNavigate()

	const handleCreateProduct = () => {
		navigate(`/create-product?scannerBarcode=${barcode}`)
	}

	return (
		<BaseModal
			isOpen={isOpen}
			title='Product not found'
			content={<p>Barcode: {barcode}</p>}
			actions={<button onClick={handleCreateProduct}>Create Product</button>}
			onClose={onClose}
		/>
	)
}

export default ModalNotFound
