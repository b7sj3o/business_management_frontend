import { EditingProductState } from './arrival-editing.model'
import { Product, ProductInfo } from './product.model'

export interface ProductItemProps {
	product: ProductInfo
	setEditingProduct: (product: EditingProductState) => void
	handleAddSale: (productId: number, amount: number, price: number) => void
}

export interface ProductEditModalProps {
	title: string
	onClose: () => void
	children: React.ReactNode
}

export interface ProductSearchProps {
	showAddSaleButtons?: boolean
	onProductAdd?: (product: Product) => void
}

export interface ProductSearchHeaderProps {
	inputQuery: string
	handleInputChange: (value: string) => void
	toggleSearchVisibility: () => void
	isSearchVisible: boolean
}

export interface ProductSearchResultsProps {
	isSearchVisible: boolean
	inputQuery: string
	filteredProducts: Product[]
	handleAddSale: (productId: number, amount: number, price: number) => void
	onProductAdd?: (product: Product) => void
	showAddSaleButtons: boolean
}

export interface ProductCategoriesProps {
	currentLevel: any
	setEditingProduct: (product: any) => void
	handleItemClick: (key: string) => void
}

export interface ProductCategoryProps {
	category: string
	products: any
	setEditingProduct: (product: EditingProductState) => void
	handleItemClick: (key: string) => void
}

export interface SearchProductItemProps {
	product: Product
	onAddSale?: (productId: number, price: number) => void
	onProductAdd?: (product: Product) => void
	showAddSaleButtons?: boolean
}
