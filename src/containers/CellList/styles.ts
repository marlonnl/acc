import styled from 'styled-components'
import { color } from '../../styles/colors'

export const CellListContainer = styled.div`
	border: ${color.cellContainerBg} 1px solid;
	margin-top: 24px;
	padding: 16px;
	border-radius: 8px;
	/* max-width: 280px; */
`

export const CellListUl = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 16px;
`

export const CellContainer = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${color.cellContainerBg};
	border-radius: 8px;
	padding: 10px 12px;
	font-size: 12px;
	font-weight: bold;
	text-transform: uppercase;

	span {
		font-size: 11px;
		color: ${color.keyColor};
	}

	.cellName {
		color: ${color.cellNameColor};
		/* font-weight: normal; */
	}

	.cellTotal {
		font-size: 16px;
		color: ${color.cellCountColor};
		font-family: 'Noto Sans Mono', monospace;
	}

	/* &:hover {
		box-shadow: 2px 2px 10px 1px ${color.headerBg};
	} */
`
