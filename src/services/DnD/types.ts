export enum LibraryItemTypes {
	DataSet,
	Transformer,
	Filter,
	Merger,
}

export interface LibraryItem {
	id: number
	type: LibraryItemTypes
	title: string
	description: string
}
