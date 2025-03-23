export interface NumberFieldProps {
	label?: string
	min: number
	step: number
	value: number
	handleChange?: (e: number) => void
	handleOptChange?: (id: number, value: number) => void
	productId?: number
}

const NumberField: React.FC<NumberFieldProps> = ({
	label,
	min,
	step,
	value,
	handleChange,
	handleOptChange,
	productId,
}) => {
	return (
		<fieldset className='form-group'>
			<label className='form-group__label'>{label}</label>
			<input
				type='number'
				min={min}
				step={step}
				value={value}
				onChange={e => {
					const val = parseFloat(e.target.value)
					if (handleOptChange && productId !== undefined) {
						handleOptChange(productId, val)
					} else if (handleChange) {
						handleChange(val)
					}
				}}
				className='form-group__input'
			/>
		</fieldset>
	)
}

export default NumberField
