import '@/styles/components/pages/create-product/Field.scss'
import { InputFieldProps } from '@/types/pages/create-product'
import React from 'react'

const InputField: React.FC<InputFieldProps> = ({
	label,
	name,
	value,
	handleChange,
}) => {
	return (
		<fieldset className='form-group'>
			<label className='form-group__label' htmlFor={name}>
				{label}:
			</label>
			<input
				type='text'
				name={name}
				value={value}
				onChange={handleChange}
				required
				className='form-group__input'
			/>
		</fieldset>
	)
}

export default InputField
