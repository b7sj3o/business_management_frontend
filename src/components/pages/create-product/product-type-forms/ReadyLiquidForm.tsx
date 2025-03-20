import { ProductTypeFormProps } from '@/types/pages/create-product'
import InputField from '../product-fields/InputField'
import SelectField from '../product-fields/SelectField'

const ReadyLiquidForm: React.FC<ProductTypeFormProps> = ({
	formData,
	productForeignKeys,
	handleChange,
}) => (
	<>
		<SelectField
			label="Об'єм"
			name='volume'
			value={formData.volume}
			handleChange={handleChange}
			data={productForeignKeys?.volumes}
		/>
		<SelectField
			label='Міцність'
			name='strength'
			value={formData.strength}
			handleChange={handleChange}
			data={productForeignKeys?.strengths}
		/>
		<InputField
			label='Смак рідини'
			name='taste'
			value={formData.name}
			handleChange={handleChange}
		/>
	</>
)

export default ReadyLiquidForm
