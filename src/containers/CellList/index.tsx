import { CellContainer, CellListContainer, CellListUl } from './styles'

type CellListProps = {
	list?: 'mature' | 'imature' | 'red'
}

const CellList = ({ list }: CellListProps) => {
	return (
		<CellListContainer>
			{/* <p>Células maduras</p> */}
			<CellListUl>
				<CellContainer>
					<div>
						<p className="cellName">Nome da célula</p>
						<span>TECLA</span>
					</div>
					<p className="cellTotal">0</p>
				</CellContainer>
				<CellContainer>
					<div>
						<p className="cellName">Nome da célula</p>
						<span>TECLA</span>
					</div>
					<p className="cellTotal">0</p>
				</CellContainer>
			</CellListUl>
		</CellListContainer>
	)
}

export default CellList
