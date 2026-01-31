import {
	HeaderContainer,
	HeaderNavItem,
	HeaderNavList,
	HeaderTitle
} from './styles'
import {
	ArrowRepeat,
	Gear,
	InfoSquare,
	QuestionSquare
} from 'react-bootstrap-icons'

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
							<HeaderNavList>
								<HeaderNavItem>
									<a href="/">
										<Gear size={20} />
									</a>
								</HeaderNavItem>
								<HeaderNavItem>
									<a href="/">
										<InfoSquare size={20} />
									</a>
								</HeaderNavItem>
								<HeaderNavItem>
									<a href="/">
										<QuestionSquare size={20} />
									</a>
								</HeaderNavItem>
								<HeaderNavItem refresh={true} className="rotate">
									<a href="/">
										<ArrowRepeat size={20} />
									</a>
								</HeaderNavItem>
							</HeaderNavList>
						</nav>
					</div>
				</div>
			</HeaderContainer>
		</>
	)
}

export default Header
