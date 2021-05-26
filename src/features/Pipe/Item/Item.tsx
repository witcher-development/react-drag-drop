import React from 'react';

import styles from './Item.module.scss'

export interface ItemProps {
	title: string
	description: string
}

export const ItemComponent: React.FC<ItemProps> = ({ title, description }) => {
	return (
		<div className={styles.box}>
			<div className={styles.box_inner}>
				{ title }
				<div className={styles.box__tip}>{ description }</div>
			</div>
		</div>
	)
}
