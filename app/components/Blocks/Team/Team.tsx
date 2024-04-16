import React from 'react';
import { Carousel, Htag, TitleDescription } from '@/app/components';
import styles from './Team.module.css';
import cn from 'classnames';
import Image from 'next/image';

const team = [
  {
    id: 1,
    name:  'Джессика Миллер',
    job: 'Директор по развитию',
    image: '/home/team_1.webp'
  },
  {
    id: 2,
    name: 'Александр Иванов',
    job: 'Главный химик-технолог',
    image: '/home/team_2.webp'
  },
  {
    id: 3,
    name: 'Елена Смирнова',
    job: 'PR-менеджер',
    image: '/home/team_3.webp'
  }
];
export const Team = (): React.JSX.Element => {
  return (
    <section className={'width'}>
      <TitleDescription
        title={'Наша команда'}
      />
      <div className={styles.team_wrapper}>


        {team.map((item) => (
          <div className={styles.wrapper} key={item.id + 'team'}>
            <div

              className={styles.image_wrapper}
            >


              <Image
                src={item.image}
                alt={'Сотрудник' + item.name}
                width={400}
                height={265}
                className={styles.team_photo}
              />
            </div>
            <div className={styles.text_wrapper}>
              <Htag size={'h3'} transform={'no'} align={'center'}>
                {item.name}
              </Htag>
              <div className={styles.job}>
                {item.job}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
