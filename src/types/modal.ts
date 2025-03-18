import { ReactNode } from 'react'
import { Product } from './product/product.model'

export interface ModalMessageContextType {
	showModal: (message: string) => void
}

export interface ModalProviderProps {
	children: ReactNode
}

export interface BaseModalProps {
	isOpen: boolean
	title: string
	content: React.ReactNode
	actions: React.ReactNode
	onClose: () => void
}

export interface ModalFoundProps {
	product: Product
	isOpen: boolean
	onClose: () => void
	showModal: (message: string) => void
}

export interface ModalNotFoundProps {
	barcode: string
	isOpen: boolean
	onClose: () => void
}

export interface ModalMessageProps {
	message: string
	onClose: () => void
}
