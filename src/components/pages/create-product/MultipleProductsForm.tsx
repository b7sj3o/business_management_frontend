import { MultipleProductsFormProps } from '@/types/pages/create-product'
import TelField from './product-fields/TelField'

const MultipleProductsForm: React.FC<MultipleProductsFormProps> = ({
	formData,
	handleChange,
	handleSubmit,
}) => (
	<div className='form-container' id='form-many'>
		<h2>Створити декілька продуктів</h2>
		<form onSubmit={handleSubmit}>
			<TelField
				label='Закупочна ціна'
				name='buy_price'
				value={formData.buy_price}
				handleChange={handleChange}
			/>
			<TelField
				label='Продажна ціна'
				name='sell_price'
				value={formData.sell_price}
				handleChange={handleChange}
			/>
			<TelField
				label='К-сть'
				name='amount'
				value={formData.amount}
				handleChange={handleChange}
			/>
			<button type='submit' className='submit-btn'>
				Create Products
			</button>
		</form>
	</div>
)

export default MultipleProductsForm
