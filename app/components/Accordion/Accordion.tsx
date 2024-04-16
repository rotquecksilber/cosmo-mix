'use client';
import React, { useState } from 'react';
import { AccordionProps } from '@/app/components/Accordion/Accordion.props';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import cn from 'classnames';
import styles from './Accordion.module.css';
import { Button, Htag } from '@/app/components';

export const Accordion = (props: AccordionProps): React.JSX.Element => {
  const [ isOpenIndex, setIsOpenIndex ] = useState(0);

  const handleClick = (index: number) => {
    if (isOpenIndex === index) {
      setIsOpenIndex(-1); // Close the current open item
    } else {
      setIsOpenIndex(index); // Open the clicked item
    }
  };

  return (
    <ul className={cn('width', styles.ul)}>
      {props.data.map((item, index) => {
        const { title, description, photo, href, device } = item;
        const isOpen = isOpenIndex === index;

        return (
          <li key={ index + 'accordion' } className={cn(styles.li, {
            [styles.mobile]: item.device === 'mobile',
            [styles.desktop]: item.device === 'desktop'
          })}>
            <div
              className={styles.title}
              onClick={() => handleClick(index)}
              style={{ cursor: 'pointer' }}
            >
              <Htag size={'h3'} transform={'no'}>{title}</Htag>
              <motion.div
                initial={false}
                animate={{ rotateX: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >

                <Image
                  src={'/header/arrow.svg'}
                  alt={'Открыть/закрыть раскрывающийся список'}
                  height={26}
                  width={48}
                />
              </motion.div>

            </div>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div

                >
                  <div className={styles.block}>
                    <div  className={styles.content}>

                      {photo && <Image src={photo} alt={title} width={200} height={200}  className={styles.image}/>}

                      <p className={styles.content_text}>{description}</p>
                    </div>
                    {href &&  <Button size={'big'} buttonColor={'purple'} aria_label={'Подробнее'}>Подробнее</Button>}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
};
