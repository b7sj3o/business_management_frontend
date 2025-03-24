import ModalUpdate from '@/components/modal/ModalUpdate'
import Breadcrumbs from '@/components/product/Breadcrumbs'
import ProductCategoriesList from '@/components/product/category/ProductCategoriesList'
import { ProductEditModal } from '@/components/product/ProductEditModal'
import ProductList from '@/components/product/ProductList'
import { ProductInfo } from '@/types/product'
import ProductSearch from '@/components/product/search/ProductSearch'
import { versionUpdates } from '@/data/updates'
import { useProducts } from '@/hooks/useProducts'
import '@/styles/pages/home/HomePage.scss'
import React from 'react'
import { Link } from 'react-router-dom'

const HomePage: React.FC = () => {
	const {
		path,
		setPath,
		editingProduct,
		setEditingProduct,
		handleAddSale,
		moveToLevel,
		getCurrentLevel,
		handleItemClick,
	} = useProducts()

	const renderEditingProduct = () => {
	// 	if (editingProduct && editingProduct.type === 'sale') {
	// 		return (
	// 			<ProductEditModal
	// 				title='Редагувати товар'
	// 				onClose={() => setEditingProduct({})}
	// 			>
	// 				<form onSubmit={(e) => {e.preventDefault(); handleAddSale(editingProduct.product.id, editingProduct.product.amount, editingProduct.sell_price); closeEditProduct();}}>
	// 					<div className='form-group'>
	// 						<label htmlFor='amount'>Кількість</label>
	// 						<input
	// 							type='text'
	// 							name='amount'
	// 							placeholder='Кількість'
	// 							defaultValue={1}
	// 							onChange={handleEditProductChange}
	// 						/>
	// 					</div>
	// 					<div className='form-group'>
	// 						<label htmlFor='sell_price'>Ціна продажу</label>
	// 						<input
	// 							type='text'
	// 							name='sell_price'
	// 							placeholder='Ціна продажу'
	// 							defaultValue={editingProduct.product.sell_price}
	// 							onChange={handleEditProductChange}
	// 						/>
	// 					</div>
	// 					<button type='submit' className='product-edit-submit'>
	// 						Добавити продажу
	// 					</button>
	// 				</form>
	// 			</ProductEditModal>
	// 		)
	// 	}
	// 	if (editingProduct && editingProduct.type === 'edit') {
		return (
			<></>
		)
	}
	



	return (
		<div className='container'>
			<ProductSearch />
			<ModalUpdate />
			<div className='products-container'>
				<h2 className='products-container__title'>Товар</h2>
				{path.length > 0 && (
					<>
						<Breadcrumbs path={path} moveToLevel={moveToLevel} />
						<div className='product-btns'>
							<button
								className='product-btns__back-button'
								onClick={() => setPath(path.slice(0, -1))}
							>
								Назад
							</button>
							<button
								className='product-btns__back-button'
								onClick={() => setPath([])}
							>
								Головна
							</button>
						</div>
					</>
				)}

				<div className='buttons-container'>
					{Array.isArray(getCurrentLevel()) ? (
						<ProductList
							products={getCurrentLevel()}
							setEditingProduct={setEditingProduct}
							handleAddSale={handleAddSale}
						/>
					) : (
						<ProductCategoriesList
							currentLevel={getCurrentLevel()}
							setEditingProduct={setEditingProduct}
							handleItemClick={handleItemClick}
						/>
					)}
				</div>
			</div>

			<small className='version'>
				<Link to='/versions'>
					v.{versionUpdates[versionUpdates.length - 1].version}
				</Link>
			</small>
			
			{/* TODO тут може ти робив якусь заготовку для форми, якщо є, то заміни */}
			{editingProduct && renderEditingProduct()}
		</div>
	)
}

export default HomePage
