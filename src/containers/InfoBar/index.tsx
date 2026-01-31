import { Chat, ExclamationDiamond } from 'react-bootstrap-icons'
import { InfoBarContainer, InfoBarText } from './styles'

type InfoBarProps = {
	display: boolean
	icon?: 'alert' | 'info'
	title?: string
	message?: string
}

const InfoBar = ({ icon, title, message, display }: InfoBarProps) => {
	const btIcon = () => {
		const size = 14

		switch (icon) {
			case 'alert':
				return <ExclamationDiamond size={size} />
		}

		if (!icon) {
			return <Chat size={size} />
		}
	}

	return (
		<>
			{display && (
				<InfoBarContainer>
					<div className="container flex">
						<InfoBarText>
							<div className="flex">
								{btIcon()}
								{title && (
									<h4>
										<b>ATENÇÃO</b>:
									</h4>
								)}
							</div>
							<p>{message}</p>
						</InfoBarText>
						<div>x</div>
					</div>
				</InfoBarContainer>
			)}
		</>
	)
}

export default InfoBar
