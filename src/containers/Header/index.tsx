import { HeaderContainer, HeaderNav, HeaderTitle } from './styles'

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
						<HeaderNav>oi</HeaderNav>
					</div>
				</div>
			</HeaderContainer>
		</>
	)
}

export default Header
