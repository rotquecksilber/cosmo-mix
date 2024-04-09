import React from 'react';
import cn from 'classnames';
import styles from '@/app/components/Blocks/common.module.css';
import localStyles from './Products.module.css';
import { ButtonBanner, CardStack, Htag, TitleDescription } from '@/app/components';
import { montserrat } from '@/app/(site)/fonts/fonts';
import Link from 'next/link';
import {
  bannersData_decor_1,
  bannersData_decor_2,
  CARD_DATA_1, CARD_DATA_2
} from '@/app/components/Blocks/Products/Products.variables';



export const Products = (): React.JSX.Element => {
  // Массив объектов с данными для каждого баннера

  return (
    <section>
      <div className="width">
        {/* Блок с заголовком и ссылкой */}
        <TitleDescription
          title="Что мы производим?"
          href="/production/dekorativnaya_kosmetika"
          hrefText={'Декоративная косметика'}
        />
        <div className={cn(localStyles.carousel_desktop)}>
          {/* Используем map для рендеринга ButtonBanner */}
          {bannersData_decor_1.map((banner, index) => (
            <ButtonBanner
              key={index + 'decor'}
              htagClassName={banner.htagClassName}
              spanClassName={banner.spanClassName}
              htagText={banner.htagText}
              spanText={banner.spanText}
              imageAlt={banner.imageAlt}
              imageSrc={banner.imageSrc}
            />
          ))}
        </div>
        <CardStack cardData={CARD_DATA_1}/>

        <div className={cn(styles.content)}>
          <div className={cn(styles.content_title)}>
          </div>
          <div className={cn(styles.content_right_link, montserrat.className)}>
            <Link className={cn(styles.link)} href={'/production/uhodovaya_kosmetika'}>
              <Htag size={'h3'} transform={'yes'}>Уходовая косметика</Htag>
            </Link>
          </div>
        </div>
        <div className={cn(localStyles.carousel_desktop)}>
          {bannersData_decor_2.map((banner, index) => (
            <ButtonBanner
              key={index + 'uhod'}
              htagClassName={banner.htagClassName}
              spanClassName={banner.spanClassName}
              htagText={banner.htagText}
              spanText={banner.spanText}
              imageAlt={banner.imageAlt}
              imageSrc={banner.imageSrc}
            />
          ))}
        </div>
        <CardStack cardData={CARD_DATA_2}/>
      </div>
      <div style={{ marginTop: '40px' }}></div>
    </section>
  );
};
