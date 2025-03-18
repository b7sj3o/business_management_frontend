import { versionUpdates } from '@/data/updates'
import '@/styles/components/modal/ModalUpdate.scss'
import { useEffect, useState } from 'react'

const ModalUpdate = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [latestUpdate, setLatestUpdate] = useState<{
		version: string
		changes: string[]
	} | null>(null)

	useEffect(() => {
		const seenUpdates = JSON.parse(localStorage.getItem('seen_updates') || '[]')
		const newUpdate = versionUpdates.find(
			update => !seenUpdates.includes(update.version)
		)

		if (newUpdate) {
			setLatestUpdate(newUpdate)
			setIsOpen(true)
			localStorage.setItem(
				'seen_updates',
				JSON.stringify([...seenUpdates, newUpdate.version])
			)
		}
	}, [])

	return isOpen && latestUpdate ? (
		<div className='update-modal__overlay'>
			<div className='update-modal__modal'>
				<h2>🚀 Оновлення {latestUpdate.version}!</h2>
				<div className='updates'>
					{latestUpdate.changes.map((change, index) => (
						<p key={index}>{change}</p>
					))}
				</div>
				<button
					onClick={() => setIsOpen(false)}
					className='update-modal__close-btn'
				>
					Окей, зрозуміло!
				</button>
			</div>
		</div>
	) : null
}

export default ModalUpdate
