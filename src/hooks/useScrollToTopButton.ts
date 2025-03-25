import { useEffect, useState } from 'react'

export const useScrollToTopButton = () => {
	const [showButton, setShowButton] = useState(false)
	const [isButtonSwiped, setIsButtonSwiped] = useState(false)
	const [isButtonTouched, setIsButtonTouched] = useState(false)
	const [buttonPos, setButtonPos] = useState<[number, number]>([0, 0])

	useEffect(() => {
		const handleScroll = () => {
			setShowButton(window.scrollY > 500)
		}

		const handleTouchStart = (e: TouchEvent) => {
			const x = e.touches[0].clientX
			const y = e.touches[0].clientY

			const button = document.querySelector('.move-to-top') as HTMLElement
			if (button) {
				const rect = button.getBoundingClientRect()
				setButtonPos([x, y])
				if (
					x >= rect.left &&
					x <= rect.right &&
					y >= rect.top &&
					y <= rect.bottom
				) {
					setIsButtonTouched(true)
				}
			}
		}

		const handleTouchEnd = (e: TouchEvent) => {
			const x = e.changedTouches[0].clientX
			const y = e.changedTouches[0].clientY

			if (
				isButtonTouched &&
				x - buttonPos[0] > 30 &&
				Math.abs(y - buttonPos[1]) < 60
			) {
				const button = document.querySelector('.move-to-top') as HTMLElement
				button.style.animation = 'moveRight 0.3s forwards'
				setIsButtonSwiped(true)
				setIsButtonTouched(false)
			}
		}

		window.addEventListener('scroll', handleScroll)
		window.addEventListener('touchstart', handleTouchStart)
		window.addEventListener('touchend', handleTouchEnd)

		return () => {
			window.removeEventListener('scroll', handleScroll)
			window.removeEventListener('touchstart', handleTouchStart)
			window.removeEventListener('touchend', handleTouchEnd)
		}
	}, [isButtonTouched, buttonPos])

	const returnButton = () => {
		const button = document.querySelector('.move-to-top') as HTMLElement
		button.style.animation = 'moveLeft 0.3s forwards'
		setTimeout(() => {
			setIsButtonSwiped(false)
		}, 300)
	}

	const moveToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	return { showButton, isButtonSwiped, returnButton, moveToTop }
}
