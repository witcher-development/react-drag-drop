import { DataSet, LibraryItem, LibraryItemTypes, PipeItem } from './types';

export const libraryItemToDataSet = (): DataSet => {
	return { title: '', data: null }
}

export const libraryItemToPipeItem = (libraryItem: LibraryItem): PipeItem | null => {
	if (libraryItem.type === LibraryItemTypes.DataSet) return null

	return {
		id: Math.random(),
		type: libraryItem.type,
		transformer: (dataSet) => dataSet,
		params: {}
	}
}
