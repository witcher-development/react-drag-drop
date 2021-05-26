import React from 'react';
import { useDrag } from 'react-dnd'

import styles from './Item.module.scss'

import { ItemTypes } from '../../../constants';

export interface ItemProps {
	title: string
	description: string
}

export const ItemComponent: React.FC<ItemProps> = ({ title, description }) => {
	const [{ isDragging }, dragRef, preview] = useDrag(
		() => ({
			type: ItemTypes.LibraryItem.toString(),
			item: { title, description },
			collect: (monitor) => ({
				isDragging: monitor.isDragging()
			})
		}),
		[]
	)
	return (
		<div className={styles.box_wrap}>
			<div className={isDragging ? styles.box_dragged : styles.box} ref={dragRef}>
				<div className={styles.box_inner}>
					{ title }
				</div>
			</div>
			<div className={styles.box__tip}>{ description }</div>
			{/*<div className={styles.box_dragged} ref={preview}>*/}
			{/*	<div className={styles.box_inner}>*/}
			{/*		{ title }*/}
			{/*	</div>*/}
			{/*</div>*/}
		</div>
	)
}
