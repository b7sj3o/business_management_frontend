import Navbar from '@/components/navbar/Navbar'
import { useScrollToTopButton } from '@/hooks/useScrollToTopButton'
import '@/styles/components/layout/Layout.scss'
import { LayoutProps } from '@/types/layout'
import React from 'react'

const Layout: React.FC<LayoutProps> = ({ children }) => {
	const { showButton, isButtonSwiped, returnButton, moveToTop } =
		useScrollToTopButton()

	return (
		<div>
			<header>
				<Navbar />
			</header>
			<main>{children}</main>
			{showButton && (
				<button
					className='move-to-top'
					onClick={isButtonSwiped ? returnButton : moveToTop}
				>
					<img src='images/arrow-white.png' alt='Scroll to top' />
				</button>
			)}
		</div>
	)
}

export default Layout
