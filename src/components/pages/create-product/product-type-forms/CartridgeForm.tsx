import { ProductTypeFormProps } from '@/types/pages/create-product'
import SelectField from '../product-fields/SelectField'

const DisposableForm: React.FC<ProductTypeFormProps> = ({
	formData,
	productForeignKeys,
	handleChange,
}) => (
	<>
		<SelectField
			label='Модель картриджу'
			name='cartridge_model'
			value={formData.cartridge_model}
			handleChange={handleChange}
			data={productForeignKeys?.cartridge_models}
		/>
		<SelectField
			label='Опір'
			name='resistance'
			value={formData.resistance}
			handleChange={handleChange}
			data={productForeignKeys?.resistances}
		/>
	</>
)

export default DisposableForm
