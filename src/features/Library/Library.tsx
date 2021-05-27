import React, { useState } from 'react';

import styles from './Library.module.scss'

import { DnD } from '../../services/DnD';

import { SectionComponent } from '../../components/Section';
import { ItemComponent } from './Item';

export const LibraryComponent = () => {
  const [items] = useState(DnD.libraryItems)

  return (
    <div className={styles.library_wrap}>
      <SectionComponent>
        <div className={styles.library}>

          { items.map((item) =>
            <ItemComponent { ...item } key={item.id} />
          )}

        </div>
      </SectionComponent>
    </div>
  )
}
