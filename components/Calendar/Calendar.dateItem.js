import clsx from 'clsx';
import {memo} from 'react';
import style from './Calendar.module.scss';

function DateItem({date, status, time, isActive, onClick, onChoose}) {
	const handleClick = () => {
		onChoose(time);
		if (onClick) {
			onClick(time);
		}
	};
	return (
		<div
			className={clsx(style.dateItem, style[`${status}`], {
				[style.active]: isActive,
			})}
			onClick={handleClick}
		>
			<span className={style.dateText}>{date}</span>
		</div>
	);
}

export default memo(DateItem);
