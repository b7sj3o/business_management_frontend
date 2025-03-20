import { InputFieldProps } from '@/types/pages/create-product'
import React from 'react'

const InputField: React.FC<InputFieldProps> = ({
	label,
	name,
	value,
	handleChange,
}) => {
	return (
		<fieldset className='form-input-group'>
			<label htmlFor={name}>{label}: </label>
			<input
				type='text'
				name={name}
				value={value}
				onChange={handleChange}
				required
			/>
		</fieldset>
	)
}

export default InputField
