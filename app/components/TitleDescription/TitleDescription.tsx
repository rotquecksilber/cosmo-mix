import cn from 'classnames';
import styles from '../Blocks/common.module.css';
import { TitleDescriptionProps } from '@/app/components/TitleDescription/TitleDescription.props';
import { Htag } from '@/app/components';
import { montserrat } from '@/app/(site)/fonts/fonts';
import React from 'react';
import Link from 'next/link';


export const TitleDescription: React.FC<TitleDescriptionProps> = ({ title, description, href, hrefText }) => {
  return (

    <div className={cn(styles.content, 'width')}>
      {title &&
      <div className={cn(styles.content_title)}>
        <Htag size={'h2'} transform={'yes'}> { title } </Htag>
      </div>
      }
      {description &&
        <div className={cn(styles.content_right, montserrat.className)}>
          <p role={'note'}> { description } </p>
        </div>
      }
      { href && hrefText &&
        <div className={cn(styles.content_right_link, montserrat.className)}>
          <Link className={cn(styles.link)} href={href}>
            <Htag size={'h3'} transform={'yes'}> { hrefText } </Htag>
          </Link>
        </div>
      }
    </div>

  );
};
