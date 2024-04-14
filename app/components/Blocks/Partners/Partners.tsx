import { TitleDescription } from '@/app/components';
import React from 'react';
import styles from './Partners.module.css';
import Image from 'next/image';


export const Partners = (): React.JSX.Element => {
  return (
    <section className={'width'}>
      <TitleDescription title={'Партнеры'} />

      <div className={styles.partners_wrapper}>
        <div className={styles.partner}>
          <Image src={'/home/yr.webp'} width={225} height={225} alt={'yves rocher'} className={styles.image} />
        </div>
        <div className={styles.partner}>
          <Image src={'/home/nyx.webp'} width={225} height={225} alt={'nyx'} className={styles.image} />
        </div>
        <div className={styles.partner}>
          <Image src={'/home/vichy.webp'} width={225} height={225} alt={'vichy'} className={styles.image} />
        </div>
        <div className={styles.partner}>
          <Image src={'/home/ga.webp'} width={225} height={225} alt={'ga'} className={styles.image} />
        </div>
      </div>
    </section>
  );
};
