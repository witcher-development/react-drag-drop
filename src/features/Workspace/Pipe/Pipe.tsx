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

	const moveItems = (draggedId: number, hoveredId: number, side: 'left' | 'right') => {
		// debugger
		const hoveredItem = items.find(({ id }) => id === hoveredId)
		if (!hoveredItem) return
		const hoveredIndex = items.indexOf(hoveredItem)
		if (side === 'left' && hoveredIndex > 0 && items[hoveredIndex - 1].id === draggedId) return;
		if (side === 'right' && hoveredIndex < items.length - 1 && items[hoveredIndex + 1].id === draggedId) return;

		const draggedItem = items.find(({ id }) => id === draggedId)
		if (!draggedItem) return

		// console.log('here', side)

		setItems([
			...items.filter(({ id }, i) => i < hoveredIndex && id !== draggedItem.id),
			draggedItem,
			...items.filter(({ id }, i) => i >= hoveredIndex && id !== draggedItem.id)
		])
	}

	return (
		<div className={styles.pipe} ref={drop}>
			{ items.map((item, i) =>
				<ItemComponent
					dataSet={dataSet}
					item={item}
					key={item.id}
					index={i}
					moveItems={moveItems}
				/>
			)}
		</div>
	)
}
