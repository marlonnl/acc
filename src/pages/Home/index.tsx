import CellList from '../../containers/CellList'
import { CellGrid, HomeContainer } from './styles'

const Home = () => {
	return (
		<div className="container">
			<HomeContainer>
				<h3>
					Total: <span className="totalCell">0</span>
				</h3>
				<CellGrid>
					<CellList />
					<CellList />
				</CellGrid>
			</HomeContainer>
		</div>
	)
}

export default Home
