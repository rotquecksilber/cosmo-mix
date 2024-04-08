import React from 'react';
import { Htag, TitleDescription } from '@/app/components';
import { reasons } from '@/app/components/Blocks/Reasons/reasons.variables';
import cn from 'classnames';
import styles from './Reasons.module.css';


export const Reasons = (): React.JSX.Element => {
  return (
    <section className="width">
      <TitleDescription
        title={<><span>3 причины</span><br /><span>выбрать нас</span></>}
        description={<>Каждый продукт в <span style={{ fontWeight: '600' }}>COSMOMIX</span> создается с любовью и заботой</>}
      />
      <div className={cn(styles.reasons)}>
        {reasons.map((reason, index) => (
          <div key={reason.id}
            className={cn(styles.reasons_wrapper, { [styles.middle]: index === Math.floor(reasons.length / 2) })}>
            <div className={styles.reasons_columns}>
              <div className={cn(styles.reasons_title)}>
                {/*<span className={cn(styles.reasons_id, mulish.className)}>{reason.id}</span>*/}
                <Htag size={'h3'} transform={'yes'} align={'center'}>
                  <span className={cn(styles.title)}>{reason.title}</span>
                </Htag>
              </div>
              <div className={cn(styles.text_wrapper)}>
                <div className={cn(styles.centered, styles.reasons_text)}>
                  {reason.content[0]}<span style={{ fontWeight: '600' }}>{reason.content[1]}</span>{reason.content[2]}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
