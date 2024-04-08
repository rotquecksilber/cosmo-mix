import React from 'react';
import styles from './Htag.module.css';
import cn from 'classnames';
import { HtagProps } from '@/app/components/Htag/Htag.props';
import { mulish } from '@/app/(site)/fonts/fonts';

export const Htag = ({ size, children, transform, align }: HtagProps): React.JSX.Element => {
  // Создаем объект, содержащий классы для условного применения
  const classNames = {
    [styles.transform_no]: transform === 'no', // Добавляем класс transform_no, если transform === "no"
    [styles.transform_yes]: transform === 'yes', // Добавляем класс transform_yes, если transform === "yes"
    [styles.align_center]: align === 'center',
    [styles.align_right]: align === 'right'
  };

  switch (size) {
  case 'h2':
    return (<h2 className={cn(styles.h2, classNames, mulish.className)}>{children}</h2>);
  case 'h3':
    return (<h3 className={cn(styles.h3, classNames, mulish.className)}>{children}</h3>);
  case 'h4':
    return (<h4 className={cn(styles.h4, classNames, mulish.className)}>{children}</h4>);
  default:
    return (<></>);
  }
};
