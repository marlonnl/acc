import Rotas from './routes'

import Header from './containers/Header'
import InfoBar from './containers/InfoBar'

import { GlobalStyle } from './styles'
import { BrowserRouter } from 'react-router-dom'

function App() {
	return (
		<>
			<GlobalStyle />
			<Header />

			<BrowserRouter>
				<div className="container">
					<InfoBar />
					<Rotas />
				</div>
			</BrowserRouter>
		</>
	)
}

export default App
