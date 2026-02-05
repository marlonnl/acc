import { MATURE_CELLS } from '../utils/cellGroup'

export type Action = { type: 'count'; key: string } | { type: 'reset' }

export function reducer(state: Cell[], action: Action): Cell[] {
	switch (action.type) {
		case 'count':
			return state.map((cell) =>
				cell.key === action.key ? { ...cell, count: cell.count + 1 } : cell
			)

		case 'reset':
			return MATURE_CELLS

		default:
			return state
	}
}
