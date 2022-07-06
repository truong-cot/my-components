import clsx from 'clsx';

import {memo, useState} from 'react';
import {IoEyeOutline, IoEyeOffOutline} from 'react-icons/io5';
import styles from './Input.module.scss';

function Input({
	type = 'text',
	children,
	label = '',
	className,
	name,
	placeholder,
	message,
	onFocus,
	required = false,
	iconLeft,
	Icon,
	...props
}) {
	const [showPass, setShowPass] = useState(false);
	const isPassword = type === 'password';

	const handleFocus = () => {
		if (typeof onFocus === 'function') {
			onFocus(name);
		}
	};

	const handleToggleShowPass = () => {
		setShowPass(!showPass);
	};

	const hasIconLeft = iconLeft ? styles.hasIconLeft : styles.noIconLeft;
	const hasIconRight = isPassword ? styles.hasIconRight : styles.noIconRight;
	return (
		<>
			<div className={clsx([className, styles.groupForm])}>
				{label != '' && !children && (
					<>
						<div className={styles.groupLabel}>
							<label className={styles.label}>{label}</label>
						</div>
					</>
				)}
				{label == '' && children && <>{children}</>}
				{label != '' && children && (
					<>
						<div className={styles.groupLabel}>
							<label className={styles.label}>
								{label}
								{required && <span>*</span>}
							</label>
							{children}
						</div>
					</>
				)}
				<div
					className={clsx([
						styles.groupInput,
						hasIconLeft,
						hasIconRight,
					])}
				>
					{iconLeft && (
						<span className={styles.icon_left}>{iconLeft}</span>
					)}
					<div className={styles.input}>
						{Icon && (
							<div className={styles.icon}>
								<Icon />
							</div>
						)}
						<input
							type={showPass ? 'text' : type}
							placeholder={placeholder}
							name={name}
							onFocus={handleFocus}
							{...props}
						/>
					</div>
					{isPassword && (
						<span
							className={styles.toggleType}
							onClick={handleToggleShowPass}
						>
							{showPass ? <IoEyeOutline /> : <IoEyeOffOutline />}
						</span>
					)}
				</div>
			</div>
		</>
	);
}

export default memo(Input);
