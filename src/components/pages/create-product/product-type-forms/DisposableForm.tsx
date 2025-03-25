import { ProductTypeFormProps } from '@/types/pages/create-product'
import InputField from '../product-fields/InputField'
import SelectField from '../product-fields/SelectField'

const DisposableForm: React.FC<ProductTypeFormProps> = ({
	formData,
	productForeignKeys,
	handleChange,
}) => (
	<>
		<SelectField
			label='Кількість тяг'
			name='puffs_amount'
			value={formData.puffs_amount}
			handleChange={handleChange}
			data={productForeignKeys?.puffs_amounts}
		/>
		<InputField
			label='Смак одноразки'
			name='name'
			value={formData.name}
			handleChange={handleChange}
		/>
	</>
)

export default DisposableForm
