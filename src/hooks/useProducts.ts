import { useModalMessage } from '@/context/ModalMessageContext'
import {
	addSale,
	deleteProduct,
	getProductTree,
	updateProduct,
	updateProducts,
} from '@/services/api'
import { EditingProductState, ProductInfo, ProductTree } from '@/types/product'
import { useEffect, useState } from 'react'

export const useProducts = () => {
	const [productTree, setProductTree] = useState<ProductTree>({})
	const [path, setPath] = useState<string[]>([])
	const [refreshData, setRefreshData] = useState(false)
	const [editingProduct, setEditingProduct] = useState<EditingProductState>({})
	const { showModal } = useModalMessage()

	useEffect(() => {
		const fetchData = async () => {
			try {
				const fetchedProducts = await getProductTree()
				setProductTree(fetchedProducts)
			} catch (error) {
				showModal('❌ Помилка завантаження даних. Спробуйте пізніше.')
			}
		}
		fetchData()
	}, [refreshData])

	const handleAddSale = async (
		productId: number,
		amount: number = 1,
		price: number
	) => {
		try {
			if (productId) {
				const response = await addSale(productId, amount, price)
				showModal(response.message)
				setRefreshData(!refreshData)
			}
		} catch (error) {
			showModal('❌ Помилка при додаванні продажу.')
		}
	}

	const submitEditProduct = async (e: React.FormEvent) => {
		e.preventDefault()
		if (!editingProduct.product) return

		try {
			let response
			if (
				editingProduct.type === 'row' &&
				Array.isArray(editingProduct.product)
			) {
				const ids = editingProduct.product.map((p: ProductInfo) => p.id)
				response = await updateProducts({
					ids,
					buy_price: editingProduct.buy_price ?? 0,
					sell_price: editingProduct.sell_price ?? 0,
					drop_sell_price: editingProduct.drop_sell_price ?? 0,
				})
			} else if (
				editingProduct.type === 'single' &&
				!Array.isArray(editingProduct.product)
			) {
				response = await updateProduct(editingProduct.product)
			}

			if (response) showModal(response.message)
			closeEditProduct()
			setRefreshData(!refreshData)
		} catch (error) {
			showModal('❌ Помилка оновлення продукту.')
		}
	}

	const submitDeleteProduct = async () => {
		if (!editingProduct.product || Array.isArray(editingProduct.product)) return
		try {
			const response = await deleteProduct(editingProduct.product.id)
			showModal(response.message)
			setRefreshData(!refreshData)
			closeEditProduct()
		} catch (error) {
			showModal('❌ Помилка видалення продукту.')
		}
	}

	const closeEditProduct = () => {
		setEditingProduct({})
		document.body.style.overflow = 'auto'
	}

	const moveToLevel = (key: string) => {
		const index = path.indexOf(key)
		setPath(path.slice(0, index + 1))
	}

	const getCurrentLevel = () => {
		let currentLevel: any = productTree
		for (const key of path) {
			if (currentLevel && typeof currentLevel === 'object') {
				currentLevel = currentLevel[key]
			}
		}
		return currentLevel
	}

	const handleItemClick = (key: string) => setPath([...path, key]);

	return {
		productTree,
		path,
		setPath,
		editingProduct,
		setEditingProduct,
		handleAddSale,
		submitEditProduct,
		submitDeleteProduct,
		closeEditProduct,
		moveToLevel,
		getCurrentLevel,
		handleItemClick
	}
}
