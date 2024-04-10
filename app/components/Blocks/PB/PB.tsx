import React from 'react';
import { Button, TitleDescription } from '@/app/components';
import cn from 'classnames';
import styles from './PB.module.css';
import Image from 'next/image';

const text = 'Мы предлагаем полное создание бренда косметики под ключ - от концепции до конечного продукта. Наш опытный и квалифицированный персонал обеспечит вам весь спектр услуг, включая разработку уникальной концепции бренда, формулирование продуктов, дизайн упаковки, производство и даже помощь в маркетинговых стратегиях. Мы стремимся к тому, чтобы ваш бренд косметики стал не только успешным, но и уникальным и запоминающимся для вашей целевой аудитории.';
export const PB = (): React.JSX.Element => {
  return (
    <section className={'width'}>

      <TitleDescription
        title={<><span>Собственный бренд</span><br /><span>косметики стм</span></>}
        description={<>Мы предоставляем услугу создания СТМ под ключ</>}
      />
      <div className={cn(styles.grid_container)}>
        <div className={cn(styles.grid_text)}> {text} </div>
        <div className={cn(styles.grid_button)}>
          <Button size={'middle'} buttonColor={'purple'} aria_label={'Больше о собственной торговой марке'}>Больше об СТМ</Button>
        </div>
        <Image className={cn(styles.grid_image)} src={'/home/stm.webp'} alt={'Собственная торговая марка'} width={606} height={564} loading={'lazy'}></Image>

        <div className={cn(styles.grid_offer)}>
        Оставьте заявку сейчас и получите скидку 5% на создание образцов
        </div>
        <div className={cn(styles.grid_offer__button)}>
          <Button size={'small'} buttonColor={'white'} aria_label={'Оставить заявку'}>
          Оставить заявку
          </Button>
        </div>
      </div>
    </section>
  );
};
