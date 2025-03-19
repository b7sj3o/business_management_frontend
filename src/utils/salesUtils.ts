import { ProductSale } from '@/types/product/product-sale.model'

export const groupSalesByDate = (sales: ProductSale[]) => {
	return sales.reduce((acc, sale) => {
		const date = new Date(sale.date).toLocaleDateString('uk-UA')
		if (!acc[date]) {
			acc[date] = { sales: [], totalEarnings: 0, totalRevenue: 0 }
		}
		acc[date].sales.push(sale)
		acc[date].totalEarnings += sale.sell_price - sale.buy_price
		acc[date].totalRevenue += sale.sell_price
		return acc
	}, {} as Record<string, { sales: ProductSale[]; totalEarnings: number; totalRevenue: number }>)
}
