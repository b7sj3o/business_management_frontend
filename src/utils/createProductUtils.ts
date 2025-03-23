import { Producer } from '@/types/product-form'

export const filterProducers = (searchTerm: string, producers: Producer[]) => {
	return producers.filter(producer =>
		producer.producer_type__value
			.toLowerCase()
			.includes(searchTerm.toLowerCase())
	)
}

export const handleChangeForm = (
	e: any,
	formName: string,
	setSelectedForm: (value: string) => void
) => {
	e.preventDefault()
	setSelectedForm(formName)
}
