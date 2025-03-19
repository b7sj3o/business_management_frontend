import { ProductSearchHeaderProps } from '@/types/product'

const ProductSearchHeader: React.FC<ProductSearchHeaderProps> = ({
	inputQuery,
	handleInputChange,
	toggleSearchVisibility,
	isSearchVisible,
}) => {
	return (
		<div className='product-search__header'>
			<input
				type='text'
				value={inputQuery}
				onChange={e => handleInputChange(e.target.value)}
				placeholder='Пошук продуктів'
				className='product-search__input'
			/>
			<button
				className='product-search__button'
				type='button'
				onClick={toggleSearchVisibility}
			>
				<img
					src={`/images/${isSearchVisible ? 'eye' : 'no-eye'}.png`}
					alt={isSearchVisible ? 'Сховати форму' : 'Показати форму'}
					title={isSearchVisible ? 'Сховати форму' : 'Показати форму'}
				/>
			</button>
		</div>
	)
}

export default ProductSearchHeader
