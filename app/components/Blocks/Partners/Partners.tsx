import { TitleDescription } from '@/app/components';
import React from 'react';
import styles from './Partners.module.css';
import Image from 'next/image';

const partnersData = [
  { src: '/home/yr.webp', alt: 'yves rocher' },
  { src: '/home/nyx.webp', alt: 'nyx' },
  { src: '/home/vichy.webp', alt: 'vichy' },
  { src: '/home/ga.webp', alt: 'ga' }
];

export const Partners = (): React.JSX.Element => {
  return (
    <section className={'width'}>
      <TitleDescription title={'Партнеры'} />

      <div className={styles.partners_wrapper}>
        {partnersData.map((partner, index) => (
          <div key={index} className={styles.partner}>
            <Image src={partner.src} width={225} height={225} alt={partner.alt} className={styles.image} />
          </div>
        ))}
      </div>
    </section>
  );
};
