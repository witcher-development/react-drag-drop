import React from 'react';
import { useDrag } from 'react-dnd'

import styles from './Item.module.scss'

import { LibraryItem } from '../../../services/DnD';

export const ItemComponent: React.FC<LibraryItem> =
	({
		id,
		type,
		title,
		description
	}) => {
	const [{ isDragging }, dragRef] = useDrag(
		() => ({
			type: type.toString(),
			item: { id },
			collect: (monitor) => ({
				isDragging: monitor.isDragging(),
			}),
		}),
	)
	return (
		<div className={styles.box_wrap}>
			<div className={isDragging ? styles.box_dragged : styles.box} ref={dragRef}>
				<div className={styles.box_inner}>
					{ title }
				</div>
			</div>
			<div className={styles.box__tip}>{ description }</div>
		</div>
	)
}
