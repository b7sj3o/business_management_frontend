import {
	SaleDetailsModal,
	SalesDynamicsChart,
	TopSalesChart,
} from '@/components/pages/analytics'
import AnalyticsSummary from '@/components/pages/analytics/AnalyticsSummary'
import SalesAnalyticsList from '@/components/pages/analytics/SalesAnalyticsList'
import { useModalMessage } from '@/context/ModalMessageContext'
import { deleteSale, getSales, getSalesAnalytics } from '@/services/api'
import '@/styles/pages/analytics/AnalyticsPage.scss'
import { SalesAnalytics } from '@/types/pages/analytics'
import { ProductSale } from '@/types/product/product-sale.model'
import { groupSalesByDate } from '@/utils/salesUtils'
import React, { useEffect, useState } from 'react'

const AnalyticsPage: React.FC = () => {
	const [sales, setSales] = useState<ProductSale[]>([])
	const [analytics, setAnalytics] = useState<SalesAnalytics | null>(null)
	const [period, setPeriod] = useState<'day' | 'week' | 'month'>('day')
	const [showAllSales, setShowAllSales] = useState(false)
	const { showModal } = useModalMessage()
	const [saleDetails, setSaleDetails] = useState<ProductSale | null>(null)

	useEffect(() => {
		const fetchSales = async () => {
			const filteredSales = await getSales()
			setSales(filteredSales)
		}
		fetchSales()
	}, [])

	useEffect(() => {
		const fetchAnalytics = async () => {
			const analyticsData = await getSalesAnalytics(period)
			setAnalytics(analyticsData)
		}
		fetchAnalytics()
	}, [period])

	const handleRemoveSale = async (id: number) => {
		try {
			const response = await deleteSale(id)
			if (response.success) {
				const saleBlock = document.querySelector(`#sale_${id}`) as HTMLElement
				saleBlock.style.animation = 'fadeOout 0.5s forwards'
				setTimeout(() => {
					setSales(sales.filter(sale => sale.id !== id))
				}, 500)
			}
			showModal(response.message)
		} catch (e) {
			console.error(e)
			showModal('Трапилась помилка. Спробуйте ще раз.')
		}
	}

	const groupedSales = groupSalesByDate(sales)

	return (
		<div className='sales-analytics-container'>
			<AnalyticsSummary
				analytics={analytics}
				period={period}
				setPeriod={setPeriod}
			/>

			<h3>Динаміка продажів</h3>
			<div className='chart-container'>
				<SalesDynamicsChart data={analytics?.salesByDate} />
			</div>

			<h3>Топ продажів</h3>
			<div className='chart-container'>
				<TopSalesChart data={analytics?.topSales} />
			</div>

			<h2>Аналітика Продажів</h2>
			<SalesAnalyticsList
				groupedSales={groupedSales}
				showAllSales={showAllSales}
				handleRemoveSale={handleRemoveSale}
				setSaleDetails={setSaleDetails}
			/>

			{sales.length > 10 && (
				<button
					onClick={() => setShowAllSales(!showAllSales)}
					className='show-all-button'
				>
					{showAllSales ? 'Показати менше' : 'Показати всі'}
				</button>
			)}

			{saleDetails && (
				<SaleDetailsModal
					sale={saleDetails}
					onClose={() => setSaleDetails(null)}
				/>
			)}
		</div>
	)
}

export default AnalyticsPage
