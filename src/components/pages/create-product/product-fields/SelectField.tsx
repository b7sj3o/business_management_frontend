import '@/styles/components/pages/create-product/Field.scss'
import { SelectFieldProps } from '@/types/pages/create-product'
import { ProductForeignKeys } from '@/types/product-form'

const SelectField = <K extends keyof ProductForeignKeys>({
	label,
	name,
	value,
	handleChange,
	data,
}: SelectFieldProps<K>) => {
	return (
		<fieldset className='form-group'>
			<label className='form-group__label'>{label}: </label>
			<select
				className='form-group__input'
				name={name}
				value={value}
				onChange={handleChange}
				required
			>
				<option value='' disabled>
					--------
				</option>
				{data?.map(item => (
					<option key={item.id} value={item.value}>
						{item.value}
					</option>
				))}
			</select>
		</fieldset>
	)
}

export default SelectField
