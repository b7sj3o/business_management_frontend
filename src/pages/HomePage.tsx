import React from 'react';
import {Link} from 'react-router-dom';
import ModalUpdate, {UPDATES} from '@/components/modal/ModalUpdate';
import ProductSearch from '@/components/product/ProductSearch';
import ProductList from '@/components/product/ProductList';
import Breadcrumbs from '@/components/product/Breadcrumbs';
import {useProducts} from '@/hooks/useProducts';
import '@/styles/pages/home/HomePage.scss';

const HomePage: React.FC = () => {
  const {
    path,
    setPath,
    setEditingProduct,
    handleAddSale,
    moveToLevel,
    getCurrentLevel
  } = useProducts();

  return (
    <div className='container'>
      <ProductSearch/>
      <ModalUpdate/>
      <div className='products-container'>
        <h2 className='title'>Товар</h2>

        {path.length > 0 && (
          <>
            <Breadcrumbs path={path} moveToLevel={moveToLevel}/>
            <div className='product-btns'>
              <button className='back-button' onClick={() => setPath(path.slice(0, -1))}>Назад</button>
              <button className='back-button' onClick={() => setPath([])}>Головна</button>
            </div>
          </>
        )}

        <div className='buttons-container'>
          {Array.isArray(getCurrentLevel()) ? (
            <ProductList products={getCurrentLevel()} setEditingProduct={setEditingProduct}
                         handleAddSale={handleAddSale}/>
          ) : (
            <p>Обраний рівень не є списком продуктів.</p>
          )}
        </div>
      </div>

      <small className='version'>
        <Link to='/versions'>v.{UPDATES[UPDATES.length - 1].version}</Link>
      </small>
    </div>
  );
};

export default HomePage;
