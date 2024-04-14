'use client';
import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import styles from './UpButton.module.css';

export default function UpButton() {
  const [ isVisible, setIsVisible ] = useState(false);

  const checkScrollTop = useCallback(() => {
    let pageOffset = window.pageYOffset;
    if (!isVisible && pageOffset > 800){
      setIsVisible(true);
    }
    else if (isVisible && pageOffset <= 800) {
      setIsVisible(false);
    }
  }, [ isVisible ]);

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [ checkScrollTop ]);

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          className={styles.up}
          whileHover={{ scale: 1.2 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{ position: 'fixed', bottom: '35px', right: '2vw', cursor: 'pointer' }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <Image src="/header/Up.svg" alt="Go to top" width={50} height={50} />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
