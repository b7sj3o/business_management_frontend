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
		<fieldset className='form-select-group'>
			<label>{label}: </label>
			<select name={name} value={value} onChange={handleChange} required>
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
