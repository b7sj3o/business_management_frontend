export interface Product {
	id: number
	product_type_name: string
	producer_name: string
	volume_amount?: string
	strength_amount?: string
	liquid_model_name?: string
	cartridge_model_name?: string
	puffs_amount_value?: string
	resistance_amount?: string
	pod_model_name?: string
	name: string
	buy_price: number
	sell_price: number
	drop_sell_price: number
	amount: number
	barcode: string
}

export interface ProductInfo {
	id: number
	name: string
	barcode: string
	amount: number
	buy_price: number
	sell_price: number
	drop_sell_price: number
	resistance?: string
}
