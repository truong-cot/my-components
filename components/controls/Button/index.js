import clsx from 'clsx';
import Link from 'next/link';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';

function Button({
	to,
	href,
	primary,
	outline,
	outline2,
	text,
	rounded,
	disabled,
	small,
	large,
	children,
	className,
	leftIcon,
	rightIcon,
	onClick,
	...passProps
}) {
	let Comp = 'button';
	const props = {
		onClick,
		...passProps,
	};

	// Remove event listener when btn is disabled
	if (disabled) {
		Object.keys(props).forEach((key) => {
			if (key.startsWith('on') && typeof props[key] === 'function') {
				delete props[key];
			}
		});
	}

	if (to) {
		props.to = to;
		Comp = Link;
	} else if (href) {
		props.href = href;
		Comp = 'a';
	}

	const classes = clsx(styles.btn, {
		[className]: className,
		[styles.primary]: primary,
		[styles.outline]: outline,
		[styles.text]: text,
		[styles.disabled]: disabled,
		[styles.rounded]: rounded,
		[styles.small]: small,
		[styles.large]: large,
		[styles.outline2]: outline2,
	});

	return (
		<Comp className={classes} {...props}>
			{leftIcon && <span className={styles.icon}>{leftIcon}</span>}
			<span className={styles.title}>{children}</span>
			{rightIcon && <span className={styles.icon}>{rightIcon}</span>}
		</Comp>
	);
}

Button.propTypes = {
	to: PropTypes.string,
	href: PropTypes.string,
	primary: PropTypes.bool,
	outline: PropTypes.bool,
	text: PropTypes.bool,
	rounded: PropTypes.bool,
	disabled: PropTypes.bool,
	small: PropTypes.bool,
	large: PropTypes.bool,
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	leftIcon: PropTypes.node,
	rightIcon: PropTypes.node,
	onClick: PropTypes.func,
};

export default Button;
