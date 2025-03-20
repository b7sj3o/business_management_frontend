import { ProductTypeFormProps } from '@/types/pages/create-product'
import InputField from '../product-fields/InputField'
import SelectField from '../product-fields/SelectField'

const PodForm: React.FC<ProductTypeFormProps> = ({
	formData,
	productForeignKeys,
	handleChange,
}) => (
	<>
		<SelectField
			label='Модель поду'
			name='pod_model'
			value={formData.pod_model}
			handleChange={handleChange}
			data={productForeignKeys?.pod_models}
		/>
		<InputField
			label='Колір поду'
			name='color'
			value={formData.name}
			handleChange={handleChange}
		/>
	</>
)

export default PodForm
