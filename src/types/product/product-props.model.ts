import { Product } from './product.model'

export interface ProductEditModalProps {
	title: string
	onClose: () => void
	children: React.ReactNode
}

export interface ProductSearchProps {
	showAddSaleButtons?: boolean
	onProductAdd?: (product: Product) => void
}
