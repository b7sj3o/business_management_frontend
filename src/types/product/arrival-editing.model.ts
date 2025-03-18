import { ProductInfo } from './product.model'

export interface ArrivalProducts {
	id: number
	quantity: number
	price: number
}

export interface OptProducts extends ArrivalProducts {}

export interface EditingProductData {
	id: number
	amount?: number
	buy_price?: number
	sell_price?: number
	drop_sell_price?: number
}

export interface EditingProductsData {
	ids: number[]
	buy_price: number
	sell_price: number
	drop_sell_price: number
}

export interface EditingProductState {
	product?: ProductInfo | ProductInfo[]
	type?: 'single' | 'row' | 'sale'
	buy_price?: number
	sell_price?: number
	drop_sell_price?: number
}
