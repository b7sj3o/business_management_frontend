import { AnalyticsSummaryProps } from '@/types/pages/analytics'

const AnalyticsSummary: React.FC<AnalyticsSummaryProps> = ({
	analytics,
	period,
	setPeriod,
}) => {
	return (
		<div className='analytics-summary'>
			<h2 className='analytics-summary__title'>Загальна Аналітика</h2>
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
			<p className='analytics-summary__item'>
				Загальний оборот: {analytics?.totalRevenue} грн
			</p>
			<p className='analytics-summary__item'>
				Загальний прибуток: {analytics?.totalEarnings} грн
			</p>
			<p className='analytics-summary__item'>
				Загальна кількість проданих одиниць: {analytics?.totalUnitsSold}
			</p>
			<p className='analytics-summary__item'>
				Середній чек: {analytics?.averageCheck} грн
			</p>
		</div>
	)
}

export default AnalyticsSummary
