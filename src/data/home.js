export const singleProductEditFields = product => [
	{ label: 'Кількість', name: 'amount', defaultValue: product.amount },
	{
		label: 'Ціна закупівлі',
		name: 'buy_price',
		defaultValue: product.buy_price,
	},
	{
		label: 'Ціна продажу',
		name: 'sell_price',
		defaultValue: product.sell_price,
	},
	{
		label: 'Ціна продажу дроп',
		name: 'drop_sell_price',
		defaultValue: product.drop_sell_price,
	},
]

export const saleEditFields = [
	{
		label: 'Кількість',
		name: 'amount',
		placeholder: 'Кількість',
		defaultValue: 1,
	},
	{
		label: 'Ціна продажу',
		name: 'sell_price',
		placeholder: 'Ціна продажу',
		defaultValue: product.sell_price,
	},
]

export const rowProductEditFields = product => [
	{
		label: 'Кількість',
		name: 'amount',
		placeholder: 'Кількість',
		defaultValue: 1,
	},
	{
		label: 'Ціна продажу',
		name: 'sell_price',
		placeholder: 'Ціна продажу',
		defaultValue: product.sell_price,
	},
	{
		label: 'Ціна продажу дроп',
		name: 'drop_sell_price',
		placeholder: 'Ціна продажу дроп',
		defaultValue: product.drop_sell_price,
	},
]
