import styled from 'styled-components'
import { color } from '../../styles/colors'

export const HeaderContainer = styled.header`
	background-color: ${color.headerBg};
	padding: 40px 0;

	color: ${color.h1Color};

	h1 {
		display: inline;
	}

	.flex {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
`

export const HeaderTitle = styled.div`
	display: flex;
	align-items: baseline;
	gap: 16px;
`

export const HeaderNav = styled.nav`
	display: flex;
`
