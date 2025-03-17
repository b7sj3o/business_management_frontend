import ModalMessage from '@/components/modal/ModalMessage'
import { ModalMessageContextType, ModalProviderProps } from '@/types/modal'
import { createContext, useContext, useState } from 'react'

interface ModalData {
	id: string
	message: string
}

const ModalMessageContext = createContext<ModalMessageContextType | undefined>(
	undefined
)

export const useModalMessage = (): ModalMessageContextType => {
	const context = useContext(ModalMessageContext)
	if (!context) {
		throw new Error('useModalMessage must be used within a ModalProvider')
	}
	return context
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
	const [modals, setModals] = useState<ModalData[]>([])

	const showModal = (message: string) => {
		const id = crypto.randomUUID()
		setModals((prevModals: ModalData[]) =>
			[...prevModals, { id, message }].slice(-3)
		)
	}

	const removeModal = (id: string) => {
		setModals((prevModals: ModalData[]) =>
			prevModals.filter(modal => modal.id !== id)
		)
	}

	return (
		<ModalMessageContext.Provider value={{ showModal }}>
			{children}
			<div className='modal-container'>
				{modals.map((modal, index) => (
					<ModalMessage
						key={modal.id}
						message={modal.message}
						onClose={() => removeModal(modal.id)}
					/>
				))}
			</div>
		</ModalMessageContext.Provider>
	)
}
