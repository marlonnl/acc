import HeaderButton from '../../components/NavButton'
import { HeaderContainer, HeaderNavItem, HeaderTitle } from './styles'

export type Props = {
	refresh?: boolean
}

const Header = () => {
	return (
		<>
			<HeaderContainer>
				<div className="container">
					<div className="flex">
						<HeaderTitle>
							<h1>ACC</h1>
							<p>assistente de contagem celular</p>
						</HeaderTitle>
						<nav>
							<ul>
								<HeaderNavItem>
									<HeaderButton icon="config" filled={false} />
								</HeaderNavItem>
								<HeaderNavItem>
									<HeaderButton icon="info" filled={false} />
								</HeaderNavItem>
								<HeaderNavItem>
									<HeaderButton icon="help" filled={false} />
								</HeaderNavItem>
								<HeaderNavItem refresh={true}>
									<HeaderButton icon="restart" filled={false} />
								</HeaderNavItem>
							</ul>
						</nav>
					</div>
				</div>
			</HeaderContainer>
		</>
	)
}

export default Header
