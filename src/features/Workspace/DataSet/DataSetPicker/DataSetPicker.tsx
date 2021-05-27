import React, { useState } from 'react';

import styles from './DataSetPicker.module.scss'

import {
	DataSet,
	dataSet1,
	dataSet2
} from '../../../../services/DnD';

import { SectionComponent } from '../../../../components/Section';

interface DataSetPickerProps {
	onPick: (dataSet: DataSet) => void
}

const dataSets = [dataSet1, dataSet2]

export const DataSetPickerComponent: React.FC<DataSetPickerProps> = ({ onPick }) => {
	const [opened, setOpened] = useState(false)

	const handleClick = (dataSet: DataSet) => {
		onPick(dataSet)
		setOpened(false)
	}

	return (
		<div className={styles.picker}>
			<button
				className={styles.picker__button}
				onClick={() => setOpened(!opened)}
			>
				dataset
			</button>

			{ opened &&
				<SectionComponent externalClass={styles.picker__list}>
					<ul>
						{ dataSets.map((dataSet, i) =>
							<li key={i} onClick={() => handleClick(dataSet)}>{ dataSet.title }</li>)
						}
					</ul>
				</SectionComponent>
			}
		</div>
	)
}
