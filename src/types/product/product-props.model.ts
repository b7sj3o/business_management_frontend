import { EditingProductState } from './arrival-editing.model'
import { Product, ProductInfo } from './product.model'

// Product List & Item
export interface ProductListProps {
	products: ProductInfo[]
	setEditingProduct: (product: any) => void
	handleAddSale: (id: number, amount: number, price: number) => void
}

export interface ProductItemProps {
	product: ProductInfo
	setEditingProduct: (product: EditingProductState) => void
	handleAddSale: (productId: number, amount: number, price: number) => void
}

// Product Edit Modal
export interface ProductEditModalProps {
	title: string
	onClose: () => void
	children: React.ReactNode
}

// Search

export interface ProductSearchProps {
	showAddSaleButtons?: boolean
	getProductAmount?: (productId: number) => number | null,
	handleChangeProductAmount?: (product: Product, amount: number) => void,
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
	getProductAmount?: (productId: number) => number | null,
	handleChangeProductAmount?: (product: Product, amount: number) => void,
}

export interface SearchProductItemProps {
	product: Product
	onAddSale?: (productId: number, price: number) => void
	showAddSaleButtons?: boolean
	getProductAmount?: (productId: number) => number | null,
	handleChangeProductAmount?: (product: Product, amount: number) => void,
}

// Categories

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

// Breadcrumbs
export interface BreadcrumbsProps {
	path: string[]
	moveToLevel: (key: string) => void
}

// Form Field
export interface FormFieldProps {
	label: string
	name: string
	placeholder: string
	defaultValue?: string | number
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

// Selected Products
export interface SelectedProduct {
	product: Product
	amount: number
}

export interface SelectedArrivalProducts {
	products: SelectedProduct[]
	price: number
}