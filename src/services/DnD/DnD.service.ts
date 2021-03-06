import { LibraryItemTypes, LibraryItem } from './types';

class DnDService {
	public libraryItems: LibraryItem[] = [
		{
			id: 1,
			type: LibraryItemTypes.DataSet,
			title: 'Sample data set',
			description: 'Testing data set to test things out'
		},
		{
			id: 2,
			type: LibraryItemTypes.Transformer,
			title: 'Transformer',
			description: 'Allows you to rename and delete columns'
		},
		{
			id: 3,
			type: LibraryItemTypes.Filter,
			title: 'Filter',
			description: 'Allows you to filter rows by value'
		},
		{
			id: 4,
			type: LibraryItemTypes.Merger,
			title: 'Merger',
			description: 'Allows you to merge columns'
		}
	]

	public getLibraryItemById (id: number) {
		return this.libraryItems.find((item) => item.id === id)
	}

}

export const DnD = new DnDService()
