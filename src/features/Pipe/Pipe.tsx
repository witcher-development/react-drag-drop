import React from 'react';
import { useDrag } from 'react-dnd'

import styles from './Pipe.module.scss'

import { SectionComponent } from '../../components/Section';
import { BoxComponent } from './Box';

interface Item {
	title: string
	description: string
}

const items: Item[] = [
	{
		title: 'Data set',
		description: 'Testing data set to test things out'
	},
	{
		title: 'Transformer',
		description: 'Allows you to rename and delete columns'
	},
	{
		title: 'Filter',
		description: 'Allows you to filter rows by value'
	},
	{
		title: 'Merger',
		description: 'Allows you to merge columns'
	}
]

export const PipeComponent = () => {
	return (
		<div className={styles.pipe_wrap}>
			<div className={styles.pipe__line} />

			<SectionComponent externalClass={styles.pipe__section}>
				<div className={styles.pipe}>

					data set

				</div>
			</SectionComponent>

			<SectionComponent externalClass={styles.pipe__section}>
				<div className={styles.pipe}>

					pipe

				</div>
			</SectionComponent>

			<SectionComponent externalClass={styles.pipe__section}>
				<div className={styles.pipe}>

					output

				</div>
			</SectionComponent>
		</div>
	)
}
