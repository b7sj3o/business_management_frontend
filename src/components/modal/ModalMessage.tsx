import '@/styles/components/modal/ModalMessage.scss'
import { ModalMessageProps } from '@/types/modal'
import React, { useEffect, useState } from 'react'

const ModalMessage: React.FC<ModalMessageProps> = ({ message, onClose }) => {
	const [isExiting, setIsExiting] = useState(false)

	useEffect(() => {
		const timer = setTimeout(() => setIsExiting(true), 3000)
		return () => clearTimeout(timer)
	}, [])

	const handleAnimationEnd = () => {
		if (isExiting) {
			onClose()
		}
	}

	return (
		<div
			className={`message-modal ${isExiting ? 'exit' : ''}`}
			onAnimationEnd={handleAnimationEnd}
		>
			<div className='message-modal__content'>
				<p>{message}</p>
			</div>
		</div>
	)
}

export default ModalMessage
