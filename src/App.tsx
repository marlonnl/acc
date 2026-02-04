import Rotas from './routes'

import Header from './containers/Header'
import InfoBar from './containers/InfoBar'

import { GlobalStyle } from './styles'
import { BrowserRouter } from 'react-router-dom'
import { CellContext } from './context/context'
import { MATURE_CELL_LIST } from './utils'

function App() {
	return (
		<>
			<GlobalStyle />
			<Header />

			<BrowserRouter>
				<InfoBar
					display={false}
					message={
						'nova versão do contador lançada em 31/01/2026. Incluído lista de células imaturas. Para ver mais clique aqui.'
					}
				/>
				<CellContext.Provider value={MATURE_CELL_LIST}>
					<Rotas />
				</CellContext.Provider>
			</BrowserRouter>
		</>
	)
}

export default App
