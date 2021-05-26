import React from 'react';

import styles from './Section.module.scss';

export interface SectionProps {
	externalClass?: string
}

export const SectionComponent: React.FC<SectionProps> = ({ children, externalClass }) => {
	return (
		<div className={`${styles.section} ${externalClass || ''}`}>
			{ children }
		</div>
	)
}
