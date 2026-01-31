import { Route, Routes } from 'react-router-dom'

const Rotas = () => {
	return (
		<Routes>
			<Route path="/" index element={<p>Homepage</p>} />
			<Route path="/config" element={<p>Config</p>} />
		</Routes>
	)
}

export default Rotas
