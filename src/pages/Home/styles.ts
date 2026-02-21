import styled from 'styled-components'

export const HomeContainer = styled.div`
	margin: 36px 0 0 0;

	h3 {
		span {
			font-family: 'Noto Sans Mono';
			padding: 0 8px;

			&.countTo:hover {
				text-decoration: underline;
				cursor: pointer;
			}
		}
	}
`

export const CellGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 20px;
`
