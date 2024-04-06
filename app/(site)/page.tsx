import styles from './page.module.css';
import cn from 'classnames';
import { Areas, DesktopBanner, MobileBanner, Products } from '@/app/components';
import { montserrat } from '@/app/(site)/fonts/fonts';
import React from 'react';
import { Metadata } from 'next';
import { JsonLd } from 'react-schemaorg';
import { WebPage } from 'schema-dts';

export const metadata: Metadata = {
  title: 'Контрактное производство косметики на заказ под собственным брендом - COSMOMIX',
  description: 'Контрактное производство косметики на заказ под собственным брендом СТМ, готовая продукция через 7 дней, используем современное оборудование, производим косметику по проверенным рецептам.',
  openGraph: {
    type: 'website',
    url: 'https://cosmo-mix.com',
    title: 'Контрактное производство косметики на заказ под собственным брендом - COSMOMIX',
    description: 'Контрактное производство косметики на заказ под собственным брендом СТМ, готовая продукция через 7 дней, используем современное оборудование, производим косметику по проверенным рецептам.',
    siteName: 'COSMOMIX',
    images: [ {
      url: 'https://cosmo-mix.com/home/banner_desktop.webp'
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
          'url': 'https://cosmo-mix.com',
          'name': 'Контрактное производство косметики на заказ под собственным брендом - COSMOMIX',
          'description': 'Контрактное производство косметики на заказ под собственным брендом СТМ, готовая продукция через 7 дней, используем современное оборудование, производим косметику по проверенным рецептам.'
        }}
      />
      {/* Баннер с изображением */}
      <section>
        <DesktopBanner/>
        {/* Мобильный баннер */}
        <div className={cn(styles.mobile)}>
          <MobileBanner/>
        </div>
      </section>
      {/* Основной контент сайта */}
      <Areas/>
      <Products/>
    </main>
  );
}
