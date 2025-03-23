import '@/styles/components/pages/create-product/Field.scss'
import { TelFieldProps } from '@/types/pages/create-product'
import React from 'react'

const TelField: React.FC<TelFieldProps> = ({
	label,
	name,
	value,
	handleChange,
}) => {
	return (
		<fieldset className='form-group'>
			<label className='form-group__label' htmlFor={name}>
				{label}:{' '}
			</label>
			<input
				type='tel'
				name={name}
				value={value}
				onChange={handleChange}
				required
				className='form-group__input'
			/>
		</fieldset>
	)
}

export default TelField
