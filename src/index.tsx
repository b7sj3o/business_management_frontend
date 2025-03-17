import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import { ModalProvider } from './context/ModalMessageContext'
import './index.css'
import { store } from './redux/store'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<Provider store={store}>
		<ModalProvider>
			<App />
		</ModalProvider>
	</Provider>
)

reportWebVitals()
