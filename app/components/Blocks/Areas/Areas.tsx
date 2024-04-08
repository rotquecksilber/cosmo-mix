import cn from 'classnames';
import localStyles from './Areas.module.css';
import React from 'react';
import { Htag, TitleDescription } from '@/app/components';
import { montserrat } from '@/app/(site)/fonts/fonts';
import Image from 'next/image';
import Link from 'next/link';

/**
 * Компонент Areas представляет собой блок с информацией о производственных направлениях.
 * Включает в себя изображения и описания двух направлений: декоративной косметики и уходовой косметики.
 */
export const Areas = (): React.JSX.Element => {
  return (
    <section className={'width'}>
      <div className={cn(localStyles.content_margin)}>
        {/* Блок с заголовком и описанием */}
        <TitleDescription
          title="Производственные направления"
          description="Мы придаем первостепенное значение качеству косметических продуктов"
        />

        {/* Блок с изображениями и описаниями направлений */}
        <div className={cn(localStyles.content_images)}>
          {/* Ссылка на страницу с информацией о декоративной косметике */}
          <Link href={'/'} className={cn(localStyles.content_button)}>
            <Image
              className={cn(localStyles.content_image__big)}
              role={'img'}
              height={676}
              width={630}
              src={'/home/Cosmetics_.webp'}
              alt={'Контрактное производство декоративной косметики'}
            />
            <div className={cn(localStyles.content_wrapper)}>
              <div className={cn(localStyles.content_text)}>
                <Htag size={'h3'} transform={'yes'}>Производство декоративной косметики</Htag>
              </div>
              <div className={cn(localStyles.content_description, montserrat.className)}>
                <span>
                  <span className={cn(localStyles.cosmomix)}>COSMOMIX</span> специализируется на контрактном производстве декоративной косметики, предлагая индивидуальный подход и высочайшее качество
                </span>
              </div>
            </div>
          </Link>

          {/* Ссылка на страницу с информацией об уходовой косметике */}
          <Link href={'/'} className={cn(localStyles.content_button)}>
            <Image
              className={cn(localStyles.content_image__big)}
              role={'img'}
              height={676}
              width={630}
              src={'/home/Creams.webp'}
              alt={'Контрактное производство декоративной косметики'}
            />
            <div className={cn(localStyles.content_wrapper, localStyles.content_wrapper_2)}>
              <div className={cn(localStyles.content_text)}>
                <Htag size={'h3'}  transform={'yes'}>Производство уходовой косметики</Htag>
              </div>
              <div className={cn(localStyles.content_description, montserrat.className)}>
                <span>
                            Мы также занимаемся контрактным производством уходовой косметики, гарантируя эффективность и безопасность каждого продукта
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
