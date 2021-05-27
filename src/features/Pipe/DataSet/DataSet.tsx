import React, { useState } from 'react';
import { useDrop } from 'react-dnd'

import styles from './DataSet.module.scss'

import { LibraryItemTypes } from '../../../services/DnD';

export const DataSetComponent = () => {
	const [text, setText] = useState('default')
	const [{ handlerId }, drop] = useDrop({
		accept: LibraryItemTypes.DataSet.toString(),
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
		<div className={styles.dataset}>
			data set
		</div>
	)
}
