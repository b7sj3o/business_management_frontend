import { ProductTypeFormProps } from '@/types/pages/create-product'
import SelectField from '../product-fields/SelectField'
import ReadyLiquidForm from './ReadyLiquidForm'

const MixLiquidForm: React.FC<ProductTypeFormProps> = ({
	formData,
	productForeignKeys,
	handleChange,
}) => (
	<>
		<SelectField
			label='Модель рідини'
			name='liquid_model'
			value={formData.liquid_model}
			handleChange={handleChange}
			data={productForeignKeys?.liquid_models}
		/>
		<ReadyLiquidForm
			formData={formData}
			productForeignKeys={productForeignKeys}
			handleChange={handleChange}
		/>
	</>
)

export default MixLiquidForm
