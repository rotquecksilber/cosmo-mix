import React from 'react';
import { Button, Htag, TitleDescription } from '@/app/components';
import styles from './Interesting.module.css';
import cn from 'classnames';
import Image from 'next/image';

const topics = [
  {
    id: 1,
    title: 'Инновационные технологии и тенденции в контрактном производстве косметики',
    description: 'Современное контрактное производство косметики активно внедряет инновационные технологии и следит за актуальными тенденциями в индустрии красоты.',
    image: '/home/topic1.webp'
  },
  {
    id: 2,
    title: 'Этичность и устойчивость в контрактном производстве косметики',
    description: 'Современные потребители все больше обращают внимание на этичность и устойчивость производства косметики.',
    image: '/home/topic2.webp'
  }
];
export const Interesting = (): React.JSX.Element => {
  return (
    <section className={'width'}>
      <TitleDescription title={<><span>Интересное о контрактном</span><br /><span>производстве</span></>} />
      <div className={styles.grid}>
        {topics.map((topic) => (
          <React.Fragment key={topic.id + 'topics'}>
            <div className={cn(styles[`grid_photo${topic.id}`], styles.grid_photo)}>
              <Image src={topic.image} width={'602'} height={'310'} alt={topic.title} className={styles.photo}/>
            </div>
            <div className={cn(styles[`grid_title${topic.id}`])}>
              <Htag size={'h3'} transform={'no'}>{topic.title}</Htag>
            </div>
            <div className={cn(styles[`grid_description${topic.id}`])}>
              <span>{topic.description}</span>
            </div>
          </React.Fragment>
        ))}
      </div>
      <div className={styles.button}>
        <Button size={'big'} buttonColor={'purple'} aria_label={'Больше интересного в блоге'}>Больше в блоге</Button>
      </div>
    </section>
  );
};
