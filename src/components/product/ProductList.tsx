import React from 'react';
import ProductItem from '@/components/product/ProductItem';
import {ProductInfo} from '@/types/product';

interface ProductListProps {
    products: ProductInfo[];
    setEditingProduct: (product: any) => void;
    handleAddSale: (id: number, amount: number, price: number) => void;
}

const ProductList: React.FC<ProductListProps> = ({products, setEditingProduct, handleAddSale}) => {
    return (
        <>
            {products.map((product) => (
                <ProductItem key={product.id} product={product} setEditingProduct={setEditingProduct}
                             handleAddSale={handleAddSale}/>
            ))}
        </>
    );
};

export default ProductList;
