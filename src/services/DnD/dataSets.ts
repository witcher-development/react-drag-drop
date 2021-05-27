import { DataSet } from './types';

export const dataSet1: DataSet = {
	title: 'cats',
	data: {
		meta: {
			columns: ['name', 'weight'],
			numberOfRows: 5
		},
		rows: [
			{ name: 'Cat1', weight: 10 },
			{ name: 'Cat2', weight: 11 },
			{ name: 'Cat3', weight: 9 },
			{ name: 'Cat4', weight: 8 },
			{ name: 'Cat5', weight: 7 }
		]
	}
}

export const dataSet2: DataSet = {
	title: 'dogs',
	data: {
		meta: {
			columns: ['name', 'weight'],
			numberOfRows: 5
		},
		rows: [
			{ name: 'Dog1', weight: 20 },
			{ name: 'Dog2', weight: 21 },
			{ name: 'Dog3', weight: 19 },
			{ name: 'Dog4', weight: 18 },
			{ name: 'Dog5', weight: 17 }
		]
	}
}
