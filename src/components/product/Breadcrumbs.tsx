import '@/styles/components/product/Breadcrumbs.scss'
import React from 'react'

interface BreadcrumbsProps {
	path: string[]
	moveToLevel: (key: string) => void
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ path, moveToLevel }) => {
	return (
		<div className='path-container'>
			<div className='path'>
				<h4 onClick={() => moveToLevel('home')}>Головна</h4>
				{path.map(key => (
					<h4 key={key} onClick={() => moveToLevel(key)}>
						{key}
					</h4>
				))}
			</div>
		</div>
	)
}

export default Breadcrumbs
