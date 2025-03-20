import { CreateProductFormProps } from '@/types/pages/create-product'
import SelectField from './product-fields/SelectField'
import TelField from './product-fields/TelField'
import {
	CartridgeForm,
	DisposableForm,
	MixLiquidForm,
	PodForm,
	ReadyLiquidForm,
} from './product-type-forms'

const CreateProductForm: React.FC<CreateProductFormProps> = ({
	formData,
	productForeignKeys,
	filteredProducers,
	handleChange,
	handleSubmit,
}) => (
	<div className='form-container' id='form-one'>
		<h2>Створити один продукт</h2>
		<form onSubmit={handleSubmit}>
			<SelectField
				label='Тип продукту'
				name='product_type'
				value={formData.product_type}
				handleChange={handleChange}
				data={productForeignKeys?.product_types}
			/>
			<SelectField
				label='Виробник'
				name='producer'
				value={formData.producer}
				handleChange={handleChange}
				data={filteredProducers}
			/>

			{formData.product_type === 'Готова рідина' && (
				<ReadyLiquidForm
					formData={formData}
					productForeignKeys={productForeignKeys}
					handleChange={handleChange}
				/>
			)}
			{formData.product_type === 'Самозаміс' && (
				<MixLiquidForm
					formData={formData}
					productForeignKeys={productForeignKeys}
					handleChange={handleChange}
				/>
			)}
			{formData.product_type === 'Одноразка' && (
				<DisposableForm
					formData={formData}
					productForeignKeys={productForeignKeys}
					handleChange={handleChange}
				/>
			)}
			{formData.product_type === 'Картридж' && (
				<CartridgeForm
					formData={formData}
					productForeignKeys={productForeignKeys}
					handleChange={handleChange}
				/>
			)}
			{formData.product_type === 'Под' && (
				<PodForm
					formData={formData}
					productForeignKeys={productForeignKeys}
					handleChange={handleChange}
				/>
			)}

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
				label='Дроп ціна'
				name='drop_sell_price'
				value={formData.drop_sell_price}
				handleChange={handleChange}
			/>
			<TelField
				label='К-сть'
				name='amount'
				value={formData.amount}
				handleChange={handleChange}
			/>
			<TelField
				label='Штрих-код'
				name='barcode'
				value={formData.barcode}
				handleChange={handleChange}
			/>

			<button type='submit' className='submit-btn'>
				Create Product
			</button>
		</form>
	</div>
)

export default CreateProductForm
