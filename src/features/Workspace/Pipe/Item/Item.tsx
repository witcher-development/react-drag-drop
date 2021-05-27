import React, { useRef, useEffect } from 'react';

import styles from './Item.module.scss'

import { DataSet, LibraryItemTypes, PipeItem } from '../../../../services/DnD';
import { useDrag, useDrop } from 'react-dnd';

export interface ItemProps {
	dataSet: DataSet
	item: PipeItem
	index: number
	moveItems: (draggedIndex: number, hoveredIndex: number) => void
}

export const ItemComponent: React.FC<ItemProps> =	(
	{ dataSet, item, index, moveItems }
) => {
	const ref = useRef<HTMLDivElement>(null)
	const [{ isOver, draggedItem }, dropRef] = useDrop<
		{ draggedIndex: number, id: number },
		null,
		{
			isOver: boolean,
			draggedItem: { draggedIndex: number, id: number },
		}>({
		canDrop: () => false,
		accept: [
			LibraryItemTypes.Transformer.toString(),
			LibraryItemTypes.Filter.toString(),
			LibraryItemTypes.Merger.toString(),
		],
		collect: (monitor) => ({
			isOver: monitor.isOver(),
			draggedItem: monitor.getItem(),
		})
	})

	const [{ isDragging }, dragRef] = useDrag(
		() => ({
			type: item.type.toString(),
			item: () => ({ ...item, draggedIndex: index }),
			collect: (monitor) => ({
				isDragging: monitor.isDragging(),
			}),
		}),
	)

	useEffect(() => {
		if (!isOver || !draggedItem || draggedItem.draggedIndex === undefined || index === draggedItem.draggedIndex) return
		moveItems(draggedItem.draggedIndex, index)
	}, [isOver])

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
