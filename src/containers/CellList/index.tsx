import { useContext, useEffect } from 'react'
import { CellContainer, CellListContainer, CellListUl } from './styles'
import { CellContext, CellDispatchContext } from '../../context/context'

// type CellListProps = {
// 	list: Cell[]
// }

const CellList = () => {
	const cells = useContext(CellContext)
	const dispatch = useContext(CellDispatchContext)

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			const pressedKey = event.key.toLowerCase()

			if (event.repeat) return

			if (cells) {
				const cellExists = cells.some(
					(cell) => cell.key.toLowerCase() === pressedKey
				)

				if (cellExists) {
					// console.log(pressedKey, cellExists)
					dispatch({ type: 'count', key: pressedKey })
					// console.log(cells)
				}
			}
		}

		window.addEventListener('keydown', handleKeyDown)

		return () => {
			window.removeEventListener('keydown', handleKeyDown)
		}
	}, [cells, dispatch])

	return (
		<CellListContainer>
			{/* <p>Células maduras</p> */}
			<CellListUl>
				{cells &&
					cells.map((cell) => (
						<CellContainer key={cell.abr}>
							<div>
								<p className="cellName">{cell.name}</p>
								<span>{cell.key}</span>
							</div>
							<p className="cellTotal">{cell.count}</p>
						</CellContainer>
					))}
			</CellListUl>
		</CellListContainer>
	)
}

export default CellList
