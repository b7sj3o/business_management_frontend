import { FormSwitcherProps } from '@/types/pages/create-product'

const FormSwitcher: React.FC<FormSwitcherProps> = ({
	selectedForm,
	handleChangeForm,
}) => (
	<div className='switcher'>
		<div
			className={`switcher-value ${
				selectedForm === 'form-one' ? 'active' : ''
			}`}
			onClick={e => handleChangeForm(e, 'form-one')}
		>
			Створити один продукт
		</div>
		<div
			className={`switcher-value ${
				selectedForm === 'form-many' ? 'active' : ''
			}`}
			onClick={e => handleChangeForm(e, 'form-many')}
		>
			Створити декілька продуктів
		</div>
	</div>
)

export default FormSwitcher
