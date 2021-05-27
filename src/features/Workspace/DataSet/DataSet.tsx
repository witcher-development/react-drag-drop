import React from 'react';
import { useDrop } from 'react-dnd'

import styles from './DataSet.module.scss'

import {
	DataSet,
	LibraryItemTypes,
	libraryItemToDataSet,
} from '../../../services/DnD';

import { DataSetPickerComponent } from './DataSetPicker';

interface DataSetProps {
	dataSet: DataSet | null
	setDataSet: (dataSet: DataSet) => void
}

export const DataSetComponent: React.FC<DataSetProps> = ({ dataSet, setDataSet }) => {
	const [{ isOver }, drop] = useDrop({
		accept: LibraryItemTypes.DataSet.toString(),
		collect(monitor) {
			return {
				isOver: monitor.isOver(),
			}
		},
		drop: () => {
			setDataSet(libraryItemToDataSet())
		}
	})

	return (
		<div className={styles.dataset} ref={drop}>
			{ dataSet &&
				<>
					{	dataSet.data &&
						<div className={styles.dataset__current}>
							<p>{ `${dataSet.title.toUpperCase()}: ${dataSet.data.meta.numberOfRows} rows` }</p>
						</div>
					}
					{	!dataSet.data &&
						<div className={styles.dataset__choose}>
							Choose data set
							<DataSetPickerComponent onPick={setDataSet} />
						</div>
					}
				</>
			}
			{ !dataSet &&
				<div className={isOver ? styles.dataset__empty_over : styles.dataset__empty}>
					empty
				</div>
			}
		</div>
	)
}
