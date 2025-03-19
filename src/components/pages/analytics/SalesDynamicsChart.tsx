import { SalesDynamicsChartProps } from '@/types/analytics/analytics'
import {
	CartesianGrid,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts'

const SalesDynamicsChart: React.FC<SalesDynamicsChartProps> = ({ data }) => {
	return (
		<ResponsiveContainer width='100%' height={300}>
			<LineChart data={data || []}>
				<XAxis dataKey='date' />
				<YAxis />
				<Tooltip />
				<CartesianGrid strokeDasharray='3 3' />
				<Line
					type='monotone'
					dataKey='revenue'
					stroke='#4CAF50'
					name='Оборот'
				/>
				<Line
					type='monotone'
					dataKey='earnings'
					stroke='#FF9800'
					name='Прибуток'
				/>
				<Line
					type='monotone'
					dataKey='unitsSold'
					stroke='#2196F3'
					name='Продані одиниці'
				/>
			</LineChart>
		</ResponsiveContainer>
	)
}

export default SalesDynamicsChart
