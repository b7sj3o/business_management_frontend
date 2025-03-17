import React from 'react'
import { useSelector } from 'react-redux'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import Layout from './components/layout/Layout'

import {
	AnalyticsPage,
	CreateProductPage,
	HomePage,
	ProductArrivalPage,
	ProductOptPage,
	ScannerPage,
	SettingsPage,
	VersionsPage,
} from './pages'

// App.tsx — Основний компонент програми. Це компонент верхнього рівня, з якого починається структура вашого додатку.
// Зазвичай він містить інші компоненти і є "вхідною точкою" програми.

const App: React.FC = () => {
	const backgroundColor = useSelector(
		(state: any) => state.settings.backgroundColor
	)

	return (
		<Router>
			<div style={{ backgroundColor: backgroundColor, minHeight: '100vh' }}>
				<Layout>
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='/create-product' element={<CreateProductPage />} />
						<Route path='/scan' element={<ScannerPage />} />
						<Route path='/add-arrival' element={<ProductArrivalPage />} />
						<Route path='/add-opt' element={<ProductOptPage />} />
						<Route path='/settings' element={<SettingsPage />} />
						<Route path='/analytics' element={<AnalyticsPage />} />
						<Route path='/versions' element={<VersionsPage />} />
					</Routes>
				</Layout>
			</div>
		</Router>
	)
}

export default App
