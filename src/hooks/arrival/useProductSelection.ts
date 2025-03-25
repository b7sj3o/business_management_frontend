import { SelectedProduct } from '@/types/product'
import { Product } from '@/types/product/product.model'
import { useCallback, useState } from 'react'

export const useProductSelection = () => {
	const [selectedProducts, setSelectedProducts] = useState<SelectedProduct[]>([]);

	const getProductAmount = (productId: number) => {
		const product = selectedProducts.find(p => p.product.id === productId)
		return product ? product.amount : 0
	}

	const handleChangeProductAmount = (product: Product, amount: number) => {
        setSelectedProducts((prev) => {
            const existingProduct = prev.find((p) => p.product.id === product.id);
            if (existingProduct) {
                return prev.map((p) =>
                    p.product.id === product.id ? { ...p, amount: Math.max(1, p.amount + amount) } : p
                );
            } else {
                return [...prev, { product, amount }];
            }
        });
    };

	const handleRemoveProduct = (id: number) => {
		setSelectedProducts(prev => prev.filter(p => p.product.id !== id))
	}

	return {
		selectedProducts,
		getProductAmount,
		handleChangeProductAmount,
		handleRemoveProduct,
		setSelectedProducts,
	}
}
