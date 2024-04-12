'use client';

import React, { useState } from 'react';
import styles from './Offers.module.css';
import { AnimatePresence, motion } from 'framer-motion';
import cn from 'classnames';
import { Accordion, Button, Htag, TitleDescription } from '@/app/components';
import { OffersDesktopProps, TabItem } from '@/app/components/Blocks/Offers/Offers.props';
import Image from 'next/image';

const tabs: TabItem[] = [
  {
    title: 'Для интернет-магазинов',
    description: 'Мы помогаем интернет-магазинам создать собственные линии косметики, что позволяет им дифференцировать предложение, повышать лояльность клиентов и увеличивать прибыль, предлагая продукцию высочайшего качества. Создайте свою уникальную линию косметики с нашей помощью и увеличьте конкурентоспособность вашего интернет-магазина.',
    photo: '/home/internet_magazin.webp',
    href: '/offers/internet-stores'
  },
  {
    title: 'Для маркетплейсов',
    description: 'Позвольте нам стать вашим надежным партнером в производстве косметики. Мы предлагаем высококачественные услуги по контрактному производству, позволяющие вам развивать ваш бренд на маркетплейсе, расширять ассортимент и привлекать новых клиентов. Станьте партнером в контрактном производстве косметики с нами и развивайте ваш бренд на маркетплейсе.',
    photo: '/home/contract_manufacturing_marketplace.webp',
    href: '/offers/marketplace'
  },
  {
    title: 'Для розничных сетей',
    description: 'Предлагаем вашей розничной сети партнерство в создании уникальной линии косметики. Наш опыт в контрактном производстве поможет вам развить собственный бренд и расширить ассортимент товаров. Создавая продукцию высокого качества, мы поможем вам привлечь внимание и уверенно конкурировать на рынке.',
    photo: '/home/contract_manufacturing_retail.webp',
    href: '/offers/retail-chains'
  }

];

const OffersDesktop = ({ selectedTab }: OffersDesktopProps): React.JSX.Element => {
  return (
    selectedTab &&
    <div className={styles.grid_wrapper}>
      <div className={styles.grid_image_wrapper}>
        <Image
          src={selectedTab.photo}
          width={460}
          height={283}
          alt={selectedTab.title}
          className={styles.grid_image}
        />
      </div>
      <div className={styles.grid_text}>
        <span>{selectedTab.description}</span>
      </div>
      <div className={styles.grid_button}>
        <Button size={'big'} buttonColor={'purple'} aria_label={'Подробнее'}>Подробнее</Button>
      </div>
    </div>
  );
};

export const Offers = (): React.JSX.Element => {
  const [ selectedTab, setSelectedTab ] = useState(tabs[0]);
  return (
    <section className={'width'} >
      <TitleDescription
        title={<><span>Предложения под</span><br /><span>конкретный бизнес</span></>}
        // description={<>Мы подготовили для вас конкретные варианты сотрудничества</>}
      />
      <div className={styles.window}>
        <div className={styles.nav}>
          <ul className={styles.ul}>
            {tabs.map((item) => (
              <li
                key={item.title}
                className={item === selectedTab ? cn(styles.selected, styles.li) : styles.li}
                onClick={() => setSelectedTab(item)}
              >
                {<Htag size={'h3'} transform={'no'}>{item.title}</Htag>}
                {item === selectedTab ? (
                  <motion.div className={styles.underline} layoutId="underline" />
                ) : null}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab ? selectedTab.title : 'empty'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {tabs.map((item) => (
                <div key={item.title + 'description'} style={{ display: item === selectedTab ? 'block' : 'none' }}>
                  <OffersDesktop selectedTab={item} />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <Accordion data={tabs} />
    </section>
  );
};
