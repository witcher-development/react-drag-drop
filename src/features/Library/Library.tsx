import React from 'react';

import styles from './Library.module.scss'

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

export const LibraryComponent = () => {
  return (
    <div className={styles.library_wrap}>
      <SectionComponent>
        <div className={styles.library}>

          { items.map(({ title, description }, i) =>
            <ItemComponent title={title} description={description} key={i} />
          )}

        </div>
      </SectionComponent>
    </div>
  )
}
