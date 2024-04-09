'use client';
import React from 'react';
import { Htag, TitleDescription } from '@/app/components';
import cn from 'classnames';
import styles from './Stages.module.css';
import { textBlocks } from '@/app/components/Blocks/Stages/Stages.variables';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AnimatedBlockProps } from '@/app/components/Blocks/Stages/Stages.props';

const AnimatedBlock = ({ children, className }: AnimatedBlockProps) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        scale: 1, // Adding scaling
        transition: { duration: 0.5 }
      }).then(() => {});
    }
    if (!inView) {
      animation.start({
        opacity: 0,
        scale: 0.95 // Adding scaling
      }).then(() => {});
    }
  }, [ inView, animation ]);

  return (
    <motion.div ref={ref} animate={animation} className={className}>
      {children}
    </motion.div>
  );
};

export const Stages = (): React.JSX.Element => {


  return (
    <section className={'width'}>
      <TitleDescription
        title={<><span>Этапы</span><br/><span>Производства</span></>}
        description= {<>Здесь мы собрали основные этапы производства косметики</>}
      />

      <div className={cn(styles.grid_container)}>
        {textBlocks.map((block, index) => (
          <React.Fragment key={index}>
            <AnimatedBlock key={index + 'stages'} className={cn(block.class)}>
              <Htag size={'h3'} transform={'yes'}><span>{block.header}</span></Htag>
              <span>{block.text}</span>
            </AnimatedBlock>
            <div key={index + 'circle'}
              className={cn(styles.circle, styles[`circle__${index + 1}`])}
            ></div>
          </React.Fragment>

        ))}
        <div className={cn(styles.line)}></div>
      </div>
    </section>
  );
};
