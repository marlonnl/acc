import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

const Rotas = () => {
	return (
		<Routes>
			<Route path="/" index element={<Home />} />
			<Route path="/config" element={<p>Config</p>} />
		</Routes>
	)
}

export default Rotas
