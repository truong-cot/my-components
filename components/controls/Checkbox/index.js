import {Fragment} from 'react';
import clsx from 'clsx';
import styles from './Checkbox.module.scss';

export default function Checkbox({className, label, ...props}) {
	return (
		<Fragment>
			<label className={clsx(styles.container, className)}>
				{label}
				<input type='checkbox' {...props} />
				<span className={styles.checkmark}></span>
			</label>
		</Fragment>
	);
}
