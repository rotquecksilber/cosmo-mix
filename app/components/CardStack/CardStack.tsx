'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ButtonBanner } from '@/app/components';
import styles from './CardStack.module.css';
import cn from 'classnames';
import { CardDataProps } from '@/app/components/CardStack/CardStack.props';

const CARD_OFFSET = 25;
const SCALE_FACTOR = 0.1;

export const CardStack: React.FC<{ cardData: CardDataProps[] }> = ({ cardData }) => {
  const [ cards, setCards ] = React.useState(cardData);

  const moveToEnd = (from: number) => {
    const newCards = [ ...cards ];
    const movedCard = newCards.splice(from, 1)[0];
    newCards.push(movedCard);
    setCards(newCards);
  };

  return (
    <div className={styles.wrapperStyle}>
      <ul className={styles.cardWrapStyle}>
        {cards.map((card, index: number) => {
          const canDrag = index === 0;

          return (
            <motion.li
              key={card.imageSrc}
              className={cn(
                styles.cardStyle,
                canDrag ? styles._cursor_grab : styles._cursor_auto
              )}
              animate={{
                x: index * CARD_OFFSET,
                scale: 1 - index * SCALE_FACTOR,
                zIndex: -index
              }}
              drag={canDrag ? 'x' : false}
              dragConstraints={{
                left: 0,
                right: 0
              }}
              onDragEnd={() => moveToEnd(index)}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div>
                <ButtonBanner
                  htagText={card.htagText}
                  spanText={card.spanText}
                  imageAlt={card.imageAlt}
                  imageSrc={card.imageSrc}
                  htagClassName={card.htagClassName}
                  spanClassName={card.spanClassName}
                />
              </div>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
};
