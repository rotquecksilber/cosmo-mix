"use client";
import React, {useEffect, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import cn from "classnames";
import styles from "./HeaderMenu.module.css";
import { usePathname } from "next/navigation";
import {montserrat} from "@/app/(site)/fonts/fonts";
import {AnimatePresence, motion} from "framer-motion";


/**
 * Компонент HeaderMenu представляет собой навигационное меню заголовка.
 */
export const HeaderMenu = (): React.JSX.Element => {
    // Обработчик нажатия клавиши Enter
    const handleKeyPress = (event: React.KeyboardEvent<HTMLAnchorElement>) => {
        if (event.key === "Enter") {
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
    const [menuOpen, setMenuOpen] = useState(false);

    // Создаем ref для кнопки закрытия меню


    // Закрытие меню при загрузке страницы или при нажатии Esc
    useEffect(() => {
        setMenuOpen(false);

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setMenuOpen(false);
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);


    // Функция для переключения состояния меню
    const toggleMenu = () => {
            setMenuOpen(!menuOpen);
    };

    const menuVariants = {
        open: {
            x: 0,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
        closed: {
            x: "0",
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    };
    const menuItemVariants = {
        open: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.2,
                ease: "easeInOut",
            },
        },
        closed: {
            opacity: 0,
            y: -20,
            transition: {
                duration: 0.01, // Используйте такое же значение как и в open
                ease: "easeInOut",
            },
        },
    };
    const navVariants = {
        open: {

            transition: { staggerChildren: 0.07, delayChildren: 0.2, duration: 0.6, ease: "easeInOut" },
        },
        closed: {
            transition: { staggerChildren: 0.05, staggerDirection: -1, duration: 0.6, ease: "easeInOut", when: "beforeChildren" },
        },
    };
    const backgroundVariants = {
        open: {
            x: "0",
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        },
        closed: {
            x: "-100%",
            y: "-100%",
            opacity: 0,
            scale: 0,
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        },
        exit: { // Добавляем анимацию для выхода
            x: "-100%",
            y: "-100%",
            opacity: 0,
            scale: 0,
            transition: {
                duration: 0.8,
                ease: "easeInOut"
            }
        }
    };


    return (
        <header className={cn(styles.header)}>
            <div className="width">
                <nav className={cn(montserrat.className, styles.nav, styles.nav_main)} aria-label="Основное меню"
                     role={"navigation"}>
                    <ul className={cn(styles.nav_mobile)}>
                        <li>
                            {/* Кнопка для открытия/закрытия меню */}
                            <button className={cn(styles.nav_burger)} onClick={toggleMenu} tabIndex={0} role={"button"}
                                    aria-expanded={menuOpen} aria-label={"Открыть раскрывающееся меню"}>
                                <motion.div
                                    className={styles.burger_wrapper}
                                    onClick={toggleMenu}
                                    initial={false}
                                    animate={menuOpen ? "open" : "closed"}
                                    variants={menuVariants}
                                >
                                    <motion.div
                                        className={cn(styles.burger_1, styles.burger)}
                                        animate={menuOpen ? {rotate: 30, y: 8, x: -12, width: "100%"} : {
                                            rotate: 0,
                                            y: 0,
                                            width: "100%"
                                        }}
                                    />
                                    <motion.div
                                        className={cn(styles.burger_2, styles.burger)}
                                        animate={menuOpen ? {opacity: 0} : {opacity: 1}}
                                    />
                                    <motion.div
                                        className={cn(styles.burger_3, styles.burger)}
                                        animate={menuOpen ? {rotate: -30, y: -12, x: 10, width: "100%"} : {
                                            rotate: 0,
                                            y: 0,
                                            width: "100%"
                                        }}
                                    />
                                </motion.div>
                            </button>
                        </li>
                        <li>
                            {/* Ссылка на главную страницу */}
                            <Link href={"/"} onKeyDown={handleKeyPress}>
                                <Image src={"/header/logo.svg"} width={80} height={80} alt={"Главная страница"}
                                       priority={true}/>
                            </Link>
                        </li>
                    </ul>
                    <ul className={cn(styles.nav_main_li)}>
                        {/* Ссылки на разделы сайта */}
                        <li className={cn(styles.nav_li__mobile, {[styles.nav_active]: isActive("/about")})}>
                            <Link className={cn(styles.nav_main_link)} href={"/"} tabIndex={0}
                                  onKeyDown={handleKeyPress}>
                                О нас
                            </Link>
                        </li>
                        <li className={cn(styles.nav_li__mobile, {[styles.nav_active]: isActive("/production")})}>
                            <Link className={cn(styles.nav_main_link)} href={"/"} tabIndex={0}
                                  onKeyDown={handleKeyPress}>
                                Производство
                            </Link>
                        </li>
                        <li className={cn(styles.nav_li__mobile, {[styles.nav_active]: isActive("/products")})}>
                            <Link className={cn(styles.nav_main_link)} href={"/"} tabIndex={0}
                                  onKeyDown={handleKeyPress}>
                                Продукция
                            </Link>
                        </li>
                        <li className={cn(styles.nav_li__mobile, {[styles.nav_active]: isActive("/cases")})}>
                            <Link className={cn(styles.nav_main_link)} href={"/"} tabIndex={0}
                                  onKeyDown={handleKeyPress}>
                                Кейсы
                            </Link>
                        </li>
                        <li className={cn(styles.nav_li__mobile, {[styles.nav_active]: isActive("/blog")})}>
                            <Link className={cn(styles.nav_main_link)} href={"/"} tabIndex={0}
                                  onKeyDown={handleKeyPress}>
                                Блог
                            </Link>
                        </li>
                        <li className={cn(styles.nav_li__mobile, {[styles.nav_active]: isActive("/contacts")})}>
                            <Link className={cn(styles.nav_main_link)} href={"/"} tabIndex={0}
                                  onKeyDown={handleKeyPress}>
                                Контакты
                            </Link>
                        </li>
                    </ul>
                </nav>
                <AnimatePresence>
                {menuOpen && (


                    <motion.nav className={styles.content} role="navigation" variants={navVariants}
                                initial="closed" animate={menuOpen ? "open" : "closed"} exit={"closed"}>
                        <motion.div
                            className={styles.background}
                            initial="closed"
                            animate={menuOpen ? "open" : "closed"}
                            variants={backgroundVariants}
                            exit={"exit"}

                        />
                        <motion.ul className={cn(styles.list)} variants={navVariants}>
                            <motion.li variants={menuItemVariants}>
                                <Link href={"/"} onClick={toggleMenu}
                                      className={cn(styles.menuItem, {[styles.active]: isActive("/")})} tabIndex={0}
                                      onKeyDown={handleKeyPress}>
                                    Главная
                                </Link>
                            </motion.li>
                            <motion.li variants={menuItemVariants}>
                                <Link href={"/about"} onClick={toggleMenu}
                                      className={cn(styles.menuItem, {[styles.active]: isActive("/about")})}
                                      tabIndex={0} onKeyDown={handleKeyPress}>
                                    О нас
                                </Link>
                            </motion.li>
                            <motion.li variants={menuItemVariants}>
                                <Link href={"/production"} onClick={toggleMenu}
                                      className={cn(styles.menuItem, {[styles.active]: isActive("/production")})}
                                      tabIndex={0} onKeyDown={handleKeyPress}>
                                    Производство
                                </Link>
                            </motion.li>
                            <motion.li variants={menuItemVariants}>
                                <Link href={"/products"} onClick={toggleMenu}
                                      className={cn(styles.menuItem, {[styles.active]: isActive("/products")})}
                                      tabIndex={0} onKeyDown={handleKeyPress}>
                                    Продукция
                                </Link>
                            </motion.li>
                            <motion.li variants={menuItemVariants}>
                                <Link href={"/cases"} onClick={toggleMenu}
                                      className={cn(styles.menuItem, {[styles.active]: isActive("/cases")})}
                                      tabIndex={0} onKeyDown={handleKeyPress}>
                                    Кейсы
                                </Link>
                            </motion.li>
                            <motion.li variants={menuItemVariants}>
                                <Link href={"/blog"} onClick={toggleMenu}
                                      className={cn(styles.menuItem, {[styles.active]: isActive("/blog")})} tabIndex={0}
                                      onKeyDown={handleKeyPress}>
                                    Блог
                                </Link>
                            </motion.li>
                            <motion.li variants={menuItemVariants}>
                                <Link href={"/contacts"} onClick={toggleMenu}
                                      className={cn(styles.menuItem, {[styles.active]: isActive("/contacts")})}
                                      tabIndex={0} onKeyDown={handleKeyPress}>
                                    Контакты
                                </Link>
                            </motion.li>
                        </motion.ul>
                    </motion.nav>

                )}
                    </AnimatePresence>
            </div>

        </header>

    );
};

