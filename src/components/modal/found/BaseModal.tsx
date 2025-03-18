import '@/styles/components/modal/BaseModal.scss'
import { BaseModalProps } from '@/types/modal'
import React from 'react'

const BaseModal: React.FC<BaseModalProps> = ({
	isOpen,
	title,
	content,
	actions,
	onClose,
}) => {
	if (!isOpen) return null

	return (
		<div className='base-modal__overlay' onClick={onClose}>
			<div className='base-modal__container' onClick={e => e.stopPropagation()}>
				<h2>{title}</h2>
				<div className='base-modal__content'>{content}</div>
				<div className='base-modal__actions'>{actions}</div>
				<button className='base-modal__close-btn' onClick={onClose}>
					X
				</button>
			</div>
		</div>
	)
}

export default BaseModal
