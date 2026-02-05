import { useContext } from 'react'
import CellList from '../../containers/CellList'
import { CellGrid, HomeContainer } from './styles'
import { CellContext } from '../../context/context'

const Home = () => {
	const cells = useContext(CellContext)

	const total = cells!.reduce((acc, { count }) => acc + count, 0)

	return (
		<div className="container">
			<HomeContainer>
				<h3>
					Total: <span className="totalCell">{total}</span>
				</h3>
				<CellGrid>
					<CellList />
					{/* <CellList /> */}
				</CellGrid>
			</HomeContainer>
		</div>
	)
}

export default Home
