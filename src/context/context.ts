import { createContext } from 'react'
import { Action } from './reducer'

export const CellContext = createContext<Cell[] | undefined>(undefined)
export const CellDispatchContext = createContext<React.Dispatch<Action>>(
	() => {}
)
