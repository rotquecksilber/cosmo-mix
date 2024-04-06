import React from 'react';
import { ButtonProps } from '@/app/components/Button/Button.props';
import styles from './Button.module.css';
import cn from 'classnames';
import { montserrat } from '@/app/(site)/fonts/fonts';

export const Button = ({
  size,
  buttonColor,
  aria_label,
  children
}: ButtonProps): React.JSX.Element => {
  const buttonClasses = cn(styles.button, montserrat.className, {
    [styles.big]: size === 'big',
    [styles.middle]: size === 'middle',
    [styles.small]: size === 'small',
    [styles.white]: buttonColor === 'white',
    [styles.purple]: buttonColor === 'purple'
  });
  return (
    <button className={buttonClasses} role={'button'} aria-label={aria_label}>
      {children}
    </button>
  );
};
