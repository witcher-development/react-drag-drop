import React, { useState } from 'react';
import { useDrop } from 'react-dnd'

import styles from './Pipe.module.scss'

import { SectionComponent } from '../../components/Section';
import { DataSetComponent } from './DataSet';
import { ItemComponent } from './Item';

interface Item {
	title: string
	description: string
}


export const PipeComponent = () => {
	// const [{ handlerId }, drop] = useDrop({
	// 	accept: ItemTypes.LibraryItem.toString(),
	// 	collect(monitor) {
	// 		return {
	// 			handlerId: monitor.getHandlerId(),
	// 		}
	// 	},
	// 	drop: (test: any) => {
	// 		setText(test.title)
	// 	}
	// })

	return (
		<div className={styles.pipe_wrap}>
			<div className={styles.pipe__line} />

			<SectionComponent externalClass={styles.pipe__section}>
				<>
					<span className={styles['pipe__section-name']}>Data set</span>
					<DataSetComponent />
				</>
			</SectionComponent>

			<SectionComponent externalClass={styles.pipe__section}>
				<>
					<span className={styles['pipe__section-name']}>Pipe</span>
					{/*<div className={styles.pipe} ref={drop} data-handler-id={handlerId}>*/}

					{/*	{ text }*/}

					{/*</div>*/}
				</>
			</SectionComponent>

			<SectionComponent externalClass={styles.pipe__section}>
				<>
					<span className={styles['pipe__section-name']}>Output</span>
					<div className={styles.pipe}>


					</div>
				</>
			</SectionComponent>
		</div>
	)
}
