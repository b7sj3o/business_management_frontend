import {
	SaleDetailsModal,
	SaleItem,
	SalesDynamicsChart,
	TopSalesChart,
} from '@/components/pages/analytics'
import { useModalMessage } from '@/context/ModalMessageContext'
import { deleteSale, getSales, getSalesAnalytics } from '@/services/api'
import '@/styles/pages/analytics/AnalyticsPage.scss'
import { SalesAnalytics } from '@/types/analytics/analytics'
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
			<div className='analytics-summary'>
				<h2 className='analytics-summary-title'>Загальна Аналітика</h2>
				<div className='periods'>
					{['day', 'week', 'month'].map(p => (
						<button
							key={p}
							className={`period ${period === p ? 'active' : ''}`}
							onClick={() => setPeriod(p as 'day' | 'week' | 'month')}
						>
							{p === 'day' && 'День'}
							{p === 'week' && 'Тиждень'}
							{p === 'month' && 'Місяць'}
						</button>
					))}
				</div>
				<p className='analytics-summary-item'>
					Загальний оборот: {analytics?.totalRevenue} грн
				</p>
				<p className='analytics-summary-item'>
					Загальний прибуток: {analytics?.totalEarnings} грн
				</p>
				<p className='analytics-summary-item'>
					Загальна кількість проданих одиниць: {analytics?.totalUnitsSold}
				</p>
				<p className='analytics-summary-item'>
					Середній чек: {analytics?.averageCheck} грн
				</p>
			</div>

			<h3>Динаміка продажів</h3>
			<div className='chart-container'>
				<SalesDynamicsChart data={analytics?.salesByDate} />
			</div>

			<h3>Топ продажів</h3>
			<div className='chart-container'>
				<TopSalesChart data={analytics?.topSales} />
			</div>

			<h2>Аналітика Продажів</h2>
			<div>
				{Object.entries(groupedSales).map(([date, salesOnDate]) => (
					<div key={date} className='sales-list'>
						<h3 className='sales-list-date'>{date}</h3>
						<h4 className='sales-list-earnings'>
							Оборот: {salesOnDate.totalRevenue} грн
						</h4>
						<h4 className='sales-list-earnings'>
							Заробіток: {salesOnDate.totalEarnings} грн
						</h4>
						{(showAllSales
							? salesOnDate.sales
							: salesOnDate.sales.slice(0, 10)
						).map(sale => (
							<SaleItem
								key={sale.id}
								sale={sale}
								onRemove={handleRemoveSale}
								onViewDetails={setSaleDetails}
							/>
						))}
					</div>
				))}
			</div>

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
