import { navLinks } from '@/data/links'
import '@/styles/components/navbar/Navbar.scss'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
	return (
		<nav className='navbar'>
			<ul className='navbar__list'>
				{navLinks.map(link => (
					<li key={link.to} className='navbar__item'>
						<Link to={link.to} className={`navbar__link ${link.className}`}>
							{link.text}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Navbar
