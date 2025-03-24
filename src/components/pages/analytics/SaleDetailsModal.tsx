import { ProductEditModal } from '@/components/product/ProductEditModal'
import { ProductSale } from '@/types/product/product-sale.model'

interface SaleDetailsModalProps {
	sale: ProductSale
	onClose: () => void
}

const SaleDetailsModal: React.FC<SaleDetailsModalProps> = ({
	sale,
	onClose,
}) => {
	return (
		<ProductEditModal title='Деталі продажу' onClose={onClose}>
			<div className='sale-details'>
				<p>Назва: {sale.product_name}</p>
				<p>Виробник: {sale.producer_name}</p>
				<p>Тип продукту: {sale.product_type}</p>
				<p>Кількість проданого: {sale.amount}</p>
				<p>Ціна продажу: {sale.sell_price} грн {sale.amount > 1 ? `(${sale.sell_price * sale.amount}грн)` : ""}</p>
				<p>Заробіток: {sale.sell_price - sale.buy_price} грн {sale.amount > 1 ? `(${(sale.sell_price - sale.buy_price) * sale.amount}грн)` : ""}</p>
				<p>
					Дата: {new Date(sale.date).toLocaleDateString('uk-UA')},{' '}
					{new Date(sale.date).toLocaleTimeString('uk-UA', {
						hour: '2-digit',
						minute: '2-digit',
					})}
				</p>
			</div>
		</ProductEditModal>
	)
}

export default SaleDetailsModal
