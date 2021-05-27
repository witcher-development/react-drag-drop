import React, { useState } from 'react';
import { useDrop } from 'react-dnd'

import styles from './Workspace.module.scss'

import { SectionComponent } from '../../components/Section';

import { DataSetComponent } from './DataSet';
import { PipeComponent } from './Pipe';

import { DataSet } from '../../services/DnD';

export const WorkspaceComponent = () => {
	const [dataSet, setDataSet] = useState<DataSet | null>(null)

	return (
		<div className={styles.workspace_wrap}>
			<div className={styles.workspace__line} />

			<SectionComponent externalClass={styles.workspace__section}>
				<>
					<span className={styles['workspace__section-name']}>Data set</span>
					<DataSetComponent dataSet={dataSet} setDataSet={setDataSet} />
				</>
			</SectionComponent>

			<SectionComponent externalClass={styles.workspace__section}>
				<>
					<span className={styles['workspace__section-name']}>Pipe</span>
					{ dataSet && <PipeComponent dataSet={dataSet} /> }
				</>
			</SectionComponent>

			<SectionComponent externalClass={styles.workspace__section}>
				<>
					<span className={styles['workspace__section-name']}>Output</span>
					<div className={styles.workspace}>


					</div>
				</>
			</SectionComponent>
		</div>
	)
}
