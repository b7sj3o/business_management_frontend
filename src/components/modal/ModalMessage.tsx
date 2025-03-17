import '@/styles/components/modal/ModalMessage.scss'
import React, { useEffect, useState } from 'react'

interface ModalProps {
	message: string
	onClose: () => void
}

const ModalMessage: React.FC<ModalProps> = ({ message, onClose }) => {
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
			className={`modal ${isExiting ? 'exit' : ''}`}
			onAnimationEnd={handleAnimationEnd}
		>
			<div className='modal-content'>
				<button className='modal-close' onClick={() => setIsExiting(true)}>
					×
				</button>
				<p>{message}</p>
			</div>
		</div>
	)
}

export default ModalMessage
