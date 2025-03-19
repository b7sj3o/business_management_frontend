import { TopSalesChartProps } from '@/types/analytics/analytics'
import { Tooltip } from 'react-bootstrap'
import {
	Bar,
	BarChart,
	CartesianGrid,
	ResponsiveContainer,
	XAxis,
	YAxis,
} from 'recharts'

const TopSalesChart: React.FC<TopSalesChartProps> = ({ data }) => {
	return (
		<ResponsiveContainer width='100%' height={300}>
			<BarChart data={data || []}>
				<XAxis dataKey='productName' />
				<YAxis />
				<Tooltip />
				<CartesianGrid strokeDasharray='3 3' />
				<Bar dataKey='totalSold' fill='#8884d8' name='Продано' />
			</BarChart>
		</ResponsiveContainer>
	)
}

export default TopSalesChart
