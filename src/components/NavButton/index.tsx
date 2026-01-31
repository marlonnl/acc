import {
	ArrowRepeat,
	Gear,
	InfoSquare,
	QuestionSquare
} from 'react-bootstrap-icons'

type Props = {
	icon: 'config' | 'info' | 'help' | 'restart'
	filled: boolean
	direction?: string
}

const HeaderButton = ({ icon, direction }: Props) => {
	const size = 20

	const btIcon = () => {
		switch (icon) {
			case 'config':
				return (
					<a href="/">
						<Gear size={size} />
					</a>
				)
			case 'info':
				return (
					<a href="/">
						<InfoSquare size={size} />
					</a>
				)
			case 'help':
				return (
					<a href="/">
						<QuestionSquare size={size} />
					</a>
				)
			case 'restart':
				return (
					<a href="/" className="rotate">
						<ArrowRepeat size={size} />
					</a>
				)
		}
	}

	return <>{btIcon()}</>
}

export default HeaderButton
