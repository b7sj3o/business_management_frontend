import { ProductSale } from '@/types/product/product-sale.model'

interface SaleItemProps {
	sale: ProductSale
	onRemove: (id: number) => void
	onViewDetails: (sale: ProductSale) => void
}

const SaleItem: React.FC<SaleItemProps> = ({
	sale,
	onRemove,
	onViewDetails,
}) => (
	<div
		className='sale-item'
		id={`sale_${sale.id}`}
		onClick={() => onViewDetails(sale)}
	>
		<h4>
			{sale.product_name} - {sale.producer_name} - {sale.product_type}{' '}
			<span className='red'>{sale.amount}</span>
		</h4>
		<button
			className='sale-item-delete'
			onClick={e => {
				e.stopPropagation()
				e.currentTarget.disabled = true
				onRemove(sale.id)
			}}
		>
			Видалити
		</button>
	</div>
)

export default SaleItem
