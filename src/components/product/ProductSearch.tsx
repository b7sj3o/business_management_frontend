import { useModalMessage } from '@/context/ModalMessageContext'
import { addSale, getProducts } from '@/services/api'
import '@/styles/components/product-search/ProductSearch.scss'
import { Product, ProductSearchProps } from '@/types/product'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const ProductSearch: React.FC<ProductSearchProps> = ({
	showAddSaleButtons = true,
	onProductAdd,
}) => {
	const [products, setProducts] = useState<Product[]>([])
	const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
	const [inputQuery, setInputQuery] = useState<string>('')
	const { showModal } = useModalMessage()
	const settings = useSelector((state: any) => state.settings)
	const [isSearchVisible, setSearchVisibility] = useState(
		settings.isSearchVisible
	)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const fetchedProducts = await getProducts()
				setProducts(fetchedProducts)
				setFilteredProducts(fetchedProducts)
				handleInputChange(inputQuery)
			} catch (error) {
				console.error('Error loading data:', error)
			}
		}
		fetchData()
	}, [])

	const handleInputChange = (query: string) => {
		if (query.length > 0 && !isSearchVisible) {
			setSearchVisibility(true)
		} else if (query.length === 0 && isSearchVisible) {
			setSearchVisibility(false)
		}

		setInputQuery(query)
		const queries = query.toLowerCase().trim().split(/\s+/)

		const filtered = products.filter(product => {
			const lowerCaseQueries = queries.map(query => query.toLowerCase())

			const isMatch = (value: string | undefined) =>
				value &&
				lowerCaseQueries.every(query => value.toLowerCase().includes(query))

			return (
				isMatch(product.product_type_name) ||
				isMatch(product.producer_name) ||
				isMatch(product.name) ||
				isMatch(product.volume_amount) ||
				isMatch(product.strength_amount) ||
				isMatch(product.cartridge_model_name) ||
				isMatch(product.liquid_model_name) ||
				isMatch(product.puffs_amount_value) ||
				isMatch(product.resistance_amount) ||
				isMatch(product.pod_model_name)
			)
		})
		setFilteredProducts(filtered)
	}

	const handleShowSearch = () => {
		setSearchVisibility(!isSearchVisible)
	}

	// TODO: Move it to utils or hooks
	const handleAddSale = async (
		productId: number,
		amount: number = 1,
		price: number
	) => {
		try {
			if (productId) {
				const response = await addSale(productId, amount, price)
				showModal(response.message)
				if (response.success) {
					setFilteredProducts(
						filteredProducts.map(product => {
							if (product.id === productId) {
								return {
									...product,
									amount: product.amount - amount,
								}
							}
							return product
						})
					)
				}
			}
		} catch (error) {
			showModal('Помилка при додаванні продажу. Спробуйте ще раз.')
		}
	}

	const renderProducts = () => {
		return (inputQuery.length >= 1 ? filteredProducts : products).map(
			product => (
				<li key={product.id} className='product-search__item'>
					<h3 className='product-search__name'>
						{product.name || product.cartridge_model_name}{' '}
						{product.resistance_amount ? `- ${product.resistance_amount}` : ''}{' '}
						- {product.producer_name}
					</h3>
					<p className='product-search__detail'>К-сть: {product.amount}</p>
					<p className='product-search__detail'>
						Тип товару: {product.product_type_name}
					</p>
					{product.volume_amount && (
						<p className='product-search__detail'>
							Об'єм: {product.volume_amount}
						</p>
					)}

					<div className='product-search__btns'>
						<button
							onClick={() => handleAddSale(product.id, 1, product.sell_price)}
							className='product-search__add-button'
						>
							Продаж
						</button>
						<button
							onClick={() =>
								handleAddSale(product.id, 1, product.drop_sell_price)
							}
							className='product-search__add-button'
						>
							Продаж (дроп)
						</button>
					</div>
				</li>
			)
		)
	}

	const renderProductsList = () => {
		return (inputQuery.length >= 1 ? filteredProducts : products).map(
			product => (
				<li key={product.id} className='product-search__item'>
					<h3 className='product-search__name'>
						{product.name || product.cartridge_model_name}{' '}
						{product.resistance_amount ? `- ${product.resistance_amount}` : ''}{' '}
						- {product.producer_name}
					</h3>
					<p className='product-search__detail'>К-сть: {product.amount}</p>
					<p className='product-search__detail'>
						Тип товару: {product.product_type_name}
					</p>
					{product.volume_amount && (
						<p className='product-search__detail'>
							Об'єм: {product.volume_amount}
						</p>
					)}

					{onProductAdd && (
						<button
							onClick={() => onProductAdd(product)}
							className='product-search__add-button'
							style={{ marginTop: '10px' }}
						>
							+
						</button>
					)}
				</li>
			)
		)
	}

	return (
		<div className='product-search'>
			<div className='product-search__header'>
				<input
					type='text'
					onChange={e => handleInputChange(e.target.value)}
					placeholder='Пошук продуктів'
					className='product-search__input'
				/>
				<button
					className='product-search__button'
					type='submit'
					onClick={handleShowSearch}
				>
					{isSearchVisible ? (
						<img
							src='/images/eye.png'
							alt='Сховати форму'
							title='Сховати форму'
						/>
					) : (
						<img
							src='/images/no-eye.png'
							alt='Показати форму'
							title='Показати форму'
						/>
					)}
				</button>
			</div>

			<ul className='product-search__results'>
				{isSearchVisible ? (
					inputQuery.length >= 1 && filteredProducts.length === 0 ? (
						<h1>Not found</h1>
					) : showAddSaleButtons ? (
						renderProducts()
					) : (
						renderProductsList()
					)
				) : null}
			</ul>
		</div>
	)
}

export default ProductSearch
