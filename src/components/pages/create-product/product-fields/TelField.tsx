import { TelFieldProps } from '@/types/pages/create-product'
import React from 'react'

const TelField: React.FC<TelFieldProps> = ({
	label,
	name,
	value,
	handleChange,
}) => {
	return (
		<fieldset className='form-input-group'>
			<label htmlFor={name}>{label}: </label>
			<input
				type='tel'
				name={name}
				value={value}
				onChange={handleChange}
				required
			/>
		</fieldset>
	)
}

export default TelField
