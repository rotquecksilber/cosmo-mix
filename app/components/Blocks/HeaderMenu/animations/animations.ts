export const menuVariants = {
  open: {
    x: 0,
    transition: {
      duration: 0.3,
      ease: 'easeInOut'
    }
  },
  closed: {
    x: '0',
    transition: {
      duration: 0.3,
      ease: 'easeInOut'
    }
  }
};

export const menuItemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: 'easeInOut'
    }
  },
  closed: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.01, // Используйте такое же значение как и в open
      ease: 'easeInOut'
    }
  }
};

export const navVariants = {
  open: {

    transition: { staggerChildren: 0.07, delayChildren: 0.2, duration: 0.6, ease: 'easeInOut' }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1, duration: 0.6, ease: 'easeInOut', when: 'beforeChildren' }
  }
};

export const backgroundVariants = {
  open: {
    x: '0',
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut'
    }
  },
  closed: {
    x: '-100%',
    y: '-100%',
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut'
    }
  },
  exit: { // Добавляем анимацию для выхода
    x: '-100%',
    y: '-100%',
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.8,
      ease: 'easeInOut'
    }
  }
};
