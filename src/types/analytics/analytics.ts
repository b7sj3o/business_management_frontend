export interface SalesAnalytics {
	totalRevenue: number
	totalEarnings: number
	totalUnitsSold: number
	averageCheck: number
	salesByDate: {
		date: string
		revenue: number
		earnings: number
		unitsSold: number
	}[]

	topSales: {
		productName: string
		totalSold: number
		totalRevenue: number
		totalEarnings: number
	}[]
}

export interface SalesDynamicsChartProps {
	data?: SalesAnalytics['salesByDate']
}

export interface TopSalesChartProps {
	data?: SalesAnalytics['topSales']
}
