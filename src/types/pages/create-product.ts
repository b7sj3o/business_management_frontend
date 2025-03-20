import { Producer, ProductForeignKeys, ProductForm } from '../product-form'

export interface CreateProductFormProps {
	formData: ProductForm
	productForeignKeys: ProductForeignKeys | undefined
	filteredProducers: Producer[]
	handleChange: (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => void
	handleSubmit: (e: React.FormEvent) => Promise<void>
}

export interface ProductTypeFormProps {
	formData: ProductForm
	productForeignKeys: ProductForeignKeys | undefined
	handleChange: (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => void
}

export interface InputFieldProps {
	label: string
	name: string
	value: string
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export interface SelectFieldProps<K extends keyof ProductForeignKeys> {
	label: string
	name: string
	value: string | undefined
	handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
	data: ProductForeignKeys[K] | undefined
}

export interface TelFieldProps {
	label: string
	name: string
	value: number | string
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export interface FormSwitcherProps {
	selectedForm: string
	handleChangeForm: (e: any, formName: string) => void
}

export interface MultipleProductsFormProps {
	formData: ProductForm
	handleChange: (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => void
	handleSubmit: (e: React.FormEvent) => Promise<void>
}
