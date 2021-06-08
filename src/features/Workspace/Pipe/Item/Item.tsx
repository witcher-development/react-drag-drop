import React, { useRef, useEffect } from 'react';

import styles from './Item.module.scss'

import { DataSet, LibraryItemTypes, PipeItem } from '../../../../services/DnD';
import { useDrag, useDrop, XYCoord } from 'react-dnd';

export interface ItemProps {
	dataSet: DataSet
	item: PipeItem
	index: number
	moveItems: (draggedId: number, hoveredId: number, side: 'left' | 'right') => void
}

export const ItemComponent: React.FC<ItemProps> =	(
	{ dataSet, item, index, moveItems }
) => {
	const ref = useRef<HTMLDivElement>(null)

	/**
	 * Drop
	 */
	const [, dropRef] = useDrop<PipeItem, null,	null>({
		canDrop: () => false,
		accept: [
			LibraryItemTypes.Transformer.toString(),
			LibraryItemTypes.Filter.toString(),
			LibraryItemTypes.Merger.toString(),
		],
		// collect: (monitor) => ({
		// 	isOver: monitor.isOver(),
		// 	draggedItem: monitor.getItem(),
		// 	draggedLocation: monitor.getClientOffset() as XYCoord
		// }),
		hover: (draggedItem, monitor) => {
			// if (draggedItem?.draggedIndex === index) return
			if (draggedItem?.id === item.id) return
			if (!ref || !ref.current) return

			const draggedLocation = monitor.getClientOffset() as XYCoord
			const currentLocation = ref.current.getBoundingClientRect()

			let side: 'left' | 'right' = 'left'
			if (currentLocation.x + (currentLocation.width / 2) > draggedLocation.x) {
				side = 'left'
			}
			if (currentLocation.x + (currentLocation.width / 2) < draggedLocation.x) {
				side = 'right'
			}

			moveItems(draggedItem.id, item.id, side)
		}
	})

	/**
	 * Drag
	 */
	const [{ isDragging }, dragRef] = useDrag(
		() => ({
			type: item.type.toString(),
			item: () => ({ ...item, draggedIndex: index }),
			collect: (monitor) => ({
				isDragging: monitor.isDragging(),
			}),
		}),
	)

	// useEffect(() => {
	// 	if (!isOver || !draggedItem || draggedItem.draggedIndex === undefined || index === draggedItem.draggedIndex) return
	// 	moveItems(draggedItem.draggedIndex, index)
	// }, [isOver])

	const itemTypeClass = (item: PipeItem) => {
		switch (item.type) {
			case LibraryItemTypes.Filter:
				return styles.box_filter
			case LibraryItemTypes.Merger:
				return styles.box_merger
			case LibraryItemTypes.Transformer:
				return styles.box_transformer
		}
	}

	dragRef(dropRef(ref))
	return (
		<div
			className={`${styles.box} ${itemTypeClass(item)} ${isDragging ? styles.box_dragged : ''}`}
			ref={ref}
		>
			<button className={styles.box__settings} />
		</div>
	)
}
