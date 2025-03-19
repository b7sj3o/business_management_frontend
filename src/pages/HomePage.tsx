import ModalUpdate from '@/components/modal/ModalUpdate'
import Breadcrumbs from '@/components/product/Breadcrumbs'
import ProductList from '@/components/product/ProductList'
import ProductItem from '@/components/product/ProductItem'
import ProductSearch from '@/components/product/search/ProductSearch'
import { versionUpdates } from '@/data/updates'
import { useProducts } from '@/hooks/useProducts'
import '@/styles/pages/home/HomePage.scss'
import React from 'react'
import { Link } from 'react-router-dom'
import ProductCategoriesList from '@/components/product/ProductCategoriesList'

const HomePage: React.FC = () => {
	const {
		path,
		setPath,
		setEditingProduct,
		handleAddSale,
		moveToLevel,
		getCurrentLevel,
		handleItemClick
	} = useProducts()

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
		</div>
	)
}

export default HomePage
