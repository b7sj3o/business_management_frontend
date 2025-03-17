import { UPDATES } from '@/components/modal/ModalUpdate'
import '@/styles/pages/versions/VersionsPage.scss'
import React from 'react'

const VersionsPage: React.FC = () => {
	const reversed = [...UPDATES].reverse()
	return (
		<div className='versions'>
			<h2 className='versions-title'>🚀 Оновлення</h2>
			<div className='versions-list'>
				{reversed.map(update => (
					<div key={update.version} className='versions-item'>
						<h3 className='versions-item-title'>Версія {update.version}</h3>
						<ul className='versions-item-changes'>
							{update.changes.map((change, index) => (
								<li key={index} className='versions-item-change'>
									{change}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	)
}

export default VersionsPage
