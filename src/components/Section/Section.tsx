import React from 'react';

import styles from './Section.module.scss';

export const SectionComponent: React.FC = ({ children }) => {
	return (
		<div className={styles.section}>
			{ children }
		</div>
	)
}
