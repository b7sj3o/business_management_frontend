import { SalesAnalyticsListProps } from '@/types/pages/analytics'
import SaleItem from './SaleItem'

const SalesAnalyticsList: React.FC<SalesAnalyticsListProps> = ({
	groupedSales,
	showAllSales,
	handleRemoveSale,
	setSaleDetails,
}) => {
	return (
		<div className='sales-analytics'>
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
	)
}

export default SalesAnalyticsList
