import styled from 'styled-components'
import { color } from '../../styles/colors'
import { Props } from '.'
import { ArrowRepeat } from 'react-bootstrap-icons'

export const HeaderContainer = styled.header`
	background-color: ${color.headerBg};
	padding: 40px 0;

	color: ${color.h1Color};

	.flex {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
`

export const HeaderTitle = styled.div`
	display: flex;
	align-items: center;
	gap: 16px;
`

export const HeaderNav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 36px;

	.bolder {
		-webkit-text-stroke-width: 5.5px;
	}
`

export const HeaderNavList = styled.ul`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 36px;
`

export const HeaderNavItem = styled.li<Props>`
	a {
		display: flex;
		align-items: center;
		padding: 12px;
		color: ${(props) => (props.refresh ? color.cellCountColor : color.h1Color)};
		border-radius: 8px;
		background-color: ${(props) =>
			props.refresh ? color.refreshButton : 'transparent'};
	}

	:hover {
		cursor: pointer;
		color: ${color.headerBg};
		background-color: ${(props) =>
			props.refresh ? color.refreshButtonHover : color.infoBarBg};
	}
`
