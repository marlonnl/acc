declare type Cell = {
	fullName: string
	name: string
	abr: string
	key: string
	doesCount: boolean
	count?: number
	group: CellType
}

declare type CellGroups = {
	group: 'mature' | 'imature' | 'red'
}
