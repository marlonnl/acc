import Rotas from './routes'

import Header from './containers/Header'
import InfoBar from './containers/InfoBar'

import { GlobalStyle } from './styles'
import { BrowserRouter } from 'react-router-dom'
import { CellContext, CellDispatchContext } from './context/context'
import { MATURE_CELLS } from './utils/cellGroup'
import { useReducer } from 'react'
import { reducer } from './context/reducer'

function App() {
	const [cells, dispatch] = useReducer(reducer, MATURE_CELLS)

	return (
		<>
			<CellContext.Provider value={cells}>
				<CellDispatchContext.Provider value={dispatch}>
					<GlobalStyle />
					<Header />

					<BrowserRouter>
						<InfoBar
							display={false}
							message={
								'nova versão do contador lançada em 31/01/2026. Incluído lista de células imaturas. Para ver mais clique aqui.'
							}
						/>
						<Rotas />
					</BrowserRouter>
				</CellDispatchContext.Provider>
			</CellContext.Provider>
		</>
	)
}

export default App
