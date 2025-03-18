export interface ProductSale {
	id: number
	product_name: string
	product_type: string
	producer_name: string
	buy_price: number
	sell_price: number
	amount: number
	date: string
}

export interface SalesSummary {
	total_revenue: number
	total_amount: number
	total_earning: number
}
