import styles from './page.module.css';
import cn from 'classnames';
import { Areas, DesktopBanner, MobileBanner, Products, Reasons, Stages } from '@/app/components';
import { montserrat } from '@/app/(site)/fonts/fonts';
import React from 'react';
import { Metadata } from 'next';
import { JsonLd } from 'react-schemaorg';
import { WebPage } from 'schema-dts';
import { webSite } from '@/app/variables';

export const metadata: Metadata = {
  title: 'Контрактное производство косметики на заказ под собственным брендом - COSMOMIX',
  description: 'Контрактное производство косметики на заказ под собственным брендом СТМ, готовая продукция через 7 дней, используем современное оборудование, производим косметику по проверенным рецептам.',
  openGraph: {
    type: 'website',
    url: webSite,
    title: 'Контрактное производство косметики на заказ под собственным брендом - COSMOMIX',
    description: 'Контрактное производство косметики на заказ под собственным брендом СТМ, готовая продукция через 7 дней, используем современное оборудование, производим косметику по проверенным рецептам.',
    siteName: 'COSMOMIX',
    images: [ {
      url: `${webSite}/home/banner_desktop.webp`
    } ]
  }
};

/**
 * Компонент главной страницы.
 * Содержит баннер с изображением, текстовый блок и кнопку.
 * При маленьком разрешении экрана добавляется дополнительный мобильный баннер.
 */
export default function Home() {
  return (
    <main className={cn(styles.main, montserrat.className)}>
      <JsonLd<WebPage>
        item={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          'url': webSite,
          'name': 'Контрактное производство косметики на заказ под собственным брендом - COSMOMIX',
          'description': 'Контрактное производство косметики на заказ под собственным брендом СТМ, готовая продукция через 7 дней, используем современное оборудование, производим косметику по проверенным рецептам.',
          'primaryImageOfPage': {
            '@type': 'ImageObject',
            'url': `${webSite}/home/banner_desktop.webp`
          }
        }}
      />
      {/* Баннер с изображением */}
      <section>
        <DesktopBanner />
        {/* Мобильный баннер */}
        <div className={cn(styles.mobile)}>
          <MobileBanner />
        </div>
      </section>
      {/* Основной контент сайта */}
      <Areas />
      <Products />
      <Reasons />
      <Stages />
      <div><br /></div>
      <div><br /></div>
      <div><br /></div>
    </main>
  );
}
