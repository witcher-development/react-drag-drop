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

export interface Data {
	meta: {
		columns: string[],
		numberOfRows: number
	},
	rows: { [key: string]: any }[]
}

export interface DataSet {
	title: string
	data: Data | null
}

export interface PipeItem {
	id: number
	type: LibraryItemTypes.Merger | LibraryItemTypes.Filter | LibraryItemTypes.Transformer
	transformer: (data: DataSet) => DataSet
	params: {}
}
