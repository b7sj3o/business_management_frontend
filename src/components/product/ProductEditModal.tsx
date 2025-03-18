import '@/styles/components/product/edit-modal/ProductEditModal.scss'
import { ProductEditModalProps } from '@/types/product'
import React from 'react'

export const ProductEditModal: React.FC<ProductEditModalProps> = ({
	title,
	onClose,
	children,
}) => {
	let mouseDownInside = false

	const handleMouseDown = (e: React.MouseEvent) => {
		if ((e.target as HTMLElement).closest(`.${'product-edit'}`)) {
			mouseDownInside = true
		} else {
			mouseDownInside = false
		}
	}

	const handleMouseUp = (e: React.MouseEvent) => {
		if (
			!mouseDownInside &&
			!(e.target as HTMLElement).closest(`.${'product-edit'}`)
		) {
			onClose()
		}
	}

	return (
		<div
			className={'product-edit__container'}
			onMouseDown={handleMouseDown}
			onMouseUp={handleMouseUp}
		>
			<div className={'product-edit'} onClick={e => e.stopPropagation()}>
				<h3 className={'product-edit__title'}>{title}</h3>
				<img
					src='images/close.png'
					alt='Close'
					className={'product-edit__close'}
					onClick={onClose}
				/>
				{children}
			</div>
		</div>
	)
}
