import React from 'react';

import styles from './Box.module.scss'

export interface BoxProps {
	title: string
	description: string
}

export const BoxComponent: React.FC<BoxProps> = ({ title, description }) => {
	return (
		<div className={styles.box}>
			<div className={styles.box_inner}>
				{ title }
				<div className={styles.box__tip}>{ description }</div>
			</div>
		</div>
	)
}
