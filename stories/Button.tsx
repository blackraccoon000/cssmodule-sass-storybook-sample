import React from 'react';
import clsx from "clsx"
import styles from 'stories/Button.module.scss';

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  return (
<button
	type="button"
	className={
		clsx(
			styles.storybookButton,
			size === "small" && styles.storybookButtonSmall,
			size === "medium" && styles.storybookButtonMedium,
			size === "large" && styles.storybookButtonLarge,
			primary ? styles.storybookButtonPrimary : styles.storybookButtonSecondary
		)
	}
	style={{ backgroundColor }}
	{...props}
>
	{label}
</button>
  );
};
