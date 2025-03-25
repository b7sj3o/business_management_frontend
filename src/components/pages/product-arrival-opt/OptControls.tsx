import '@/styles/components/pages/product-arrival-opt/OptControls.scss'
import React from 'react'
import NumberField from './NumberField'

interface OptControlsProps {
	amount: number
	price: number
	onAmountChange: (value: number) => void
	onPriceChange: (value: number) => void
	onSubmitSelected: () => void
	isDisabled: boolean
}

const OptControls: React.FC<OptControlsProps> = ({
	amount,
	price,
	onAmountChange,
	onPriceChange,
	onSubmitSelected,
	isDisabled,
}) => {
	return (
		<div className='opt-controls'>
			{[
				{ label: 'Кількість', value: amount, onChange: onAmountChange },
				{ label: 'Закупна ціна', value: price, onChange: onPriceChange },
			].map(({ label, value, onChange }) => (
				<NumberField
					key={label}
					label={label}
					min={0}
					step={1}
					value={value}
					handleChange={onChange}
				/>
			))}
			<button
				className='opt-controls__submit'
				onClick={onSubmitSelected}
				disabled={isDisabled}
			>
				Добавити
			</button>
		</div>
	)
}

export default OptControls
