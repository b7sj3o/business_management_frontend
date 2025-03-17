import '@/styles/components/navbar/Navbar.scss'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
	const navLinks = [
		{ to: '/', text: 'Головна' },
		{ to: '/create-product', text: 'Створити моделі' },
		{ to: '/add-arrival', text: 'Добавити прихід' },
		{ to: '/add-opt', text: 'Добавити продаж (опт)' },
		{ to: '/settings', text: 'Налаштування' },
		{ to: '/analytics', text: 'Аналітика' },
		{ to: '/scan', text: 'Сканувати', className: 'navbar__button' },
	]

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
