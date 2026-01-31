import styled from 'styled-components'
import { color } from '../../styles/colors'

export const InfoBarContainer = styled.div`
	background-color: ${color.infoBarBg};
	padding: 18px 0;

	.flex {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`

export const InfoBarText = styled.div`
	display: flex;
	align-items: start;
	gap: 8px;

	font-size: 13px;

	h4 {
		margin-left: 4px;
	}
`
