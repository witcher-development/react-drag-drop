import React, { useState } from 'react';
import { useDrop } from 'react-dnd'

import styles from './Pipe.module.scss'

import { DataSet, DnD, libraryItemToPipeItem, LibraryItemTypes, PipeItem } from '../../../services/DnD';

import { ItemComponent } from './Item'

interface PipeProps {
	dataSet: DataSet
}

export const PipeComponent: React.FC<PipeProps> = ({ dataSet }) => {
	const [, drop] = useDrop<{ id: number }, null, { isOver: boolean }>({
		accept: [
			LibraryItemTypes.Transformer.toString(),
			LibraryItemTypes.Filter.toString(),
			LibraryItemTypes.Merger.toString(),
		],
		drop: ({ id }) => {
			const libraryItem = DnD.getLibraryItemById(id)
			if (!libraryItem) return

			const pipeItem = libraryItemToPipeItem(libraryItem)
			if (!pipeItem) return

			setItems([...items, pipeItem])

			return null
		},
	})

	const [items, setItems] = useState<PipeItem[]>([])

	const moveItems = (draggedIndex: number, hoveredIndex: number) => {
		setItems([
			...items.filter((_, i) => i < hoveredIndex && i !== draggedIndex),
			items[draggedIndex],
			...items.filter((_, i) => i >= hoveredIndex && i !== draggedIndex)
		])
	}

	return (
		<div className={styles.pipe} ref={drop}>
			{ items.map((item, i) =>
				<ItemComponent
					dataSet={dataSet}
					item={item}
					key={i}
					index={i}
					moveItems={moveItems}
				/>
			)}
		</div>
	)
}
