import cn from 'classnames';
import styles from '@/app/components/Blocks/MobileBanner/MobileBanner.module.css';
import React from 'react';

const statistics = [
  { value: '20+', comment: 'партнеров по всей России' },
  { value: '15+', comment: 'экспертов в команде' },
  { value: '3000+', comment: 'производится ежемесячно' }
];

export const MobileBanner = ():React.JSX.Element => {
  return(
    <div className={cn(styles.wrapper)}>
      <div className={cn(styles.right_part_mobile)}>
        {statistics.map((statistic, index) => (
          <div key={index}>
            <p className={styles.p_right_mobile}>{statistic.value}</p>
            <p className={styles.p_right_comment_mobile}>{statistic.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
