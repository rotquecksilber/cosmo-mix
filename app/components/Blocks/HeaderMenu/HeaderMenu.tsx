'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';
import styles from './HeaderMenu.module.css';
import { usePathname } from 'next/navigation';
import { montserrat } from '@/app/(site)/fonts/fonts';
import { AnimatePresence, motion } from 'framer-motion';
import {
  backgroundVariants,
  menuItemVariants,
  menuVariants,
  navVariants
} from '@/app/components/Blocks/HeaderMenu/animations/animations';
import { JsonLd } from 'react-schemaorg';
import { SiteNavigationElement } from 'schema-dts';
import { webSite } from '@/app/variables';
/**
 * HeaderMenu компонент представляет собой навигационное меню заголовка.
 */
export const HeaderMenu = (): React.JSX.Element => {
  // Обработчик нажатия клавиши Enter
  const handleKeyPress = (event: React.KeyboardEvent<HTMLAnchorElement>) => {
    if (event.key === 'Enter') {
      event.currentTarget.click();
    }
  };

  // Проверка активности ссылки
  const isActive = (href: string): boolean => {
    return pathName === href;
  };

  // Получение текущего пути страницы
  const pathName = usePathname();

  // Состояние для открытия/закрытия меню
  const [ menuOpen, setMenuOpen ] = useState(false);

  // Закрытие меню при загрузке страницы или при нажатии Esc
  useEffect(() => {
    setMenuOpen(false);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Функция для переключения состояния меню
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const mainContentRef = useRef<HTMLDivElement | null>(null);

  // Обработка закрытия меню при клике не по меню
  useEffect(() => {
    const handleClickOutsideMenu = (event: MouseEvent) => {
      if (
        mainContentRef.current &&
        event.target instanceof Node &&
        !mainContentRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutsideMenu);

    return () => {
      document.removeEventListener('click', handleClickOutsideMenu);
    };
  }, []);

  // Массив с пунктами меню
  const navItems = [
    { href: '/about', text: 'О нас' },
    { href: '/production', text: 'Производство' },
    { href: '/products', text: 'Продукция' },
    { href: '/cases', text: 'Кейсы' },
    { href: '/blog', text: 'Блог' },
    { href: '/contacts', text: 'Контакты' }
  ];


  return (
    <>
      {navItems.map((item, index) => {
        return (
          <JsonLd<SiteNavigationElement>
            key={index}
            item={{
              '@context': 'https://schema.org',
              '@type': 'SiteNavigationElement',
              'url': `${webSite}${item.href}`,
              'name': item.text
            }}
          />
        );
      })}
      <header className={cn(styles.header)}>
        <div className="width">
          <nav
            ref={mainContentRef}
            className={cn(
              montserrat.className,
              styles.nav,
              styles.nav_additional
            )}
            aria-label="Основное меню"
            role={'navigation'}
          >
            <ul className={cn(styles.nav_mobile)}>
              <li>
                {/* Кнопка для открытия/закрытия меню (мобильные) */}
                <button
                  className={cn(styles.nav_mobile__burger)}
                  onClick={toggleMenu}
                  tabIndex={0}
                  role={'button'}
                  aria-expanded={menuOpen}
                  aria-label={'Открыть раскрывающееся меню'}
                >
                  <motion.div
                    className={styles.nav_mobile__burger__wrapper}
                    onClick={toggleMenu}
                    initial={false}
                    animate={menuOpen ? 'open' : 'closed'}
                    variants={menuVariants}
                  >
                    <motion.div
                      className={cn(styles.burger_1, styles.burger)}
                      animate={
                        menuOpen
                          ? { rotate: 30, y: 8, x: -12, width: '100%' }
                          : { rotate: 0, y: 0, width: '100%' }
                      }
                    />
                    <motion.div
                      className={cn(styles.burger_2, styles.burger)}
                      animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                    />
                    <motion.div
                      className={cn(styles.burger_3, styles.burger)}
                      animate={
                        menuOpen
                          ? { rotate: -30, y: -12, x: 10, width: '100%' }
                          : { rotate: 0, y: 0, width: '100%' }
                      }
                    />
                  </motion.div>
                </button>
              </li>
              <li>
                {/* Ссылка на главную страницу */}
                <Link href={'/'} onKeyDown={handleKeyPress}>
                  <Image
                    src={'/header/logo.svg'}
                    width={80}
                    height={80}
                    alt={'Главная страница'}
                    priority={true}
                  />
                </Link>
              </li>
            </ul>
            <ul className={cn(styles.nav_main_li)}>
              {/* Ссылки на разделы сайта desktop */}
              {navItems.map((item) => (

                <li
                  key={item.href}
                  className={cn(styles.nav_li__mobile, {
                    [styles.nav_active]: isActive(item.href)
                  })}
                >
                  <Link
                    className={cn(styles.nav_main_link)}
                    href={item.href}
                    tabIndex={0}
                    onKeyDown={handleKeyPress}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <AnimatePresence>
            {menuOpen && (
              <motion.nav
                className={styles.content}
                role="navigation"
                variants={navVariants}
                initial="closed"
                animate={menuOpen ? 'open' : 'closed'}
                exit={'closed'}
              >
                <motion.div
                  className={styles.background}
                  initial="closed"
                  animate={menuOpen ? 'open' : 'closed'}
                  variants={backgroundVariants}
                  exit={'exit'}
                />
                <motion.ul className={cn(styles.list)} variants={navVariants}>
                  <motion.li variants={menuItemVariants}>
                    <Link
                      href={'/'}
                      onClick={toggleMenu}
                      className={cn(styles.menuItem, {
                        [styles.active]: isActive('/')
                      })}
                      tabIndex={0}
                      onKeyDown={handleKeyPress}
                    >
                    Главная
                    </Link>
                  </motion.li>
                  {navItems.map((item) => (
                    <motion.li key={item.href} variants={menuItemVariants}>
                      <Link
                        href={item.href}
                        onClick={toggleMenu}
                        className={cn(styles.menuItem, {
                          [styles.active]: isActive(item.href)
                        })}
                        tabIndex={0}
                        onKeyDown={handleKeyPress}
                      >
                        {item.text}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  );
};
