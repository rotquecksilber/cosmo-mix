'use client';
import { Carousel, TitleDescription } from '@/app/components';
import Image from 'next/image';
import styles from './Certificates.module.css';
import React from 'react';


const certificatesPhoto = [
  {
    id: 1,
    link: '/home/certificate.webp'
  },
  {
    id: 2,
    link: '/home/certificate.webp'
  },
  {
    id: 3,
    link: '/home/certificate.webp'
  }
];
export const Certificates =(): React.JSX.Element => {

  return (
    <section className={'width'}>
      <TitleDescription
        title={'Сертификаты'}
      />
      <div className={styles.certificates_wrapper}>
        {certificatesPhoto.map(item => (
          <div
            key={item.id + 'certificate'}
            className={styles.image_wrapper}
          >
            <Image
              src={item.link}
              alt={'Сертификат' + item.id}
              width={370}
              height={567}
              className={styles.certificates_photo}
            />
          </div>
        ))}
      </div>
      <div>
        <Carousel>
          {certificatesPhoto.map(item => (
            <Image
              key={item.id + 'certificate'}
              src={item.link}
              alt={'Сертификат' + item.id}
              width={370}
              height={567}
              className={styles.certificates_photo}
            />
          ))}
        </Carousel>
      </div>
    </section>
  );
};
