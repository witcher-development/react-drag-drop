import React, { useState } from 'react';
import { useDrop } from 'react-dnd'

import styles from './Pipe.module.scss'

import { ItemTypes } from '../../constants';

import { SectionComponent } from '../../components/Section';
import { ItemComponent } from './Item';

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
	const [text, setText] = useState('default')
	const [{ handlerId }, drop] = useDrop({
		accept: ItemTypes.LibraryItem.toString(),
		collect(monitor) {
			return {
				handlerId: monitor.getHandlerId(),
			}
		},
		drop: (test: any) => {
			setText(test.title)
		}
	})

	return (
		<div className={styles.pipe_wrap}>
			<div className={styles.pipe__line} />

			<SectionComponent externalClass={styles.pipe__section}>
				<div className={styles.pipe} ref={drop} data-handler-id={handlerId}>

					data set, { text }

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
