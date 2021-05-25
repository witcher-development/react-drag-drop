import React from 'react';
import { useDrag } from 'react-dnd'

import styles from './Library.module.scss'

import { SectionComponent } from '../../components/Section';

export const LibraryComponent = () => {
  return (
    <div className={styles.library_wrap}>
      <SectionComponent>
        <div className={styles.library}>
        </div>
      </SectionComponent>
    </div>
  )
}
