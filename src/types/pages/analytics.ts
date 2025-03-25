import { ProductSale } from '../product'

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

// Summary
export interface AnalyticsSummaryProps {
	analytics: SalesAnalytics | null
	period: 'day' | 'week' | 'month'
	setPeriod: (period: 'day' | 'week' | 'month') => void
}

// Charts

export interface SalesDynamicsChartProps {
	data?: SalesAnalytics['salesByDate']
}

export interface TopSalesChartProps {
	data?: SalesAnalytics['topSales']
}

// Analytics List
export interface SalesAnalyticsListProps {
	groupedSales: Record<
		string,
		{ sales: ProductSale[]; totalEarnings: number; totalRevenue: number }
	>
	showAllSales: boolean
	handleRemoveSale: (id: number) => void
	setSaleDetails: (sale: ProductSale) => void
}
