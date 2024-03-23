"use client"
import { motion } from "framer-motion";
import cn from "classnames";
import styles from "./TestMenu.module.css";
import { TestMenuProps } from "@/app/components/TestMenu/TestMenu.props";
import React from "react";
import Link from "next/link"; // Импортируем Link из Next.js

export const TestMenu = ({ isOpen, toggle }: TestMenuProps): React.JSX.Element => {
    const handleClick = () => {
        toggle(!isOpen);
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
            x: "-100%",
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
                ease: "easeInOut"
            }
        },
        closed: {
            opacity: 0,
            y: -20,
            transition: {
                duration: 0.2,
                ease: "easeInOut"
            }
        }
    };

    return (
        <>
            {isOpen && (
                <motion.div className={styles.background} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
            )}
            <motion.div
                className={styles.burger_wrapper}
                onClick={handleClick}
                initial={false}
                animate={isOpen ? "open" : "closed"}
                variants={menuVariants}
            >
                <motion.div
                    className={cn(styles.burger_1, styles.burger)}
                    animate={isOpen ? { rotate: 30, y: 7, x: -15, width: "100%" } : { rotate: 0, y: 0, width: "100%" }}
                />
                <motion.div
                    className={cn(styles.burger_2, styles.burger)}
                    animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                />
                <motion.div
                    className={cn(styles.burger_3, styles.burger)}
                    animate={isOpen ? { rotate: -30, y: -12, x: 10, width: "100%" } : { rotate: 0, y: 0, width: "100%" }}
                />

                {/* Используем анимацию для списка меню */}
                <motion.nav className={styles.content} role="navigation" variants={menuItemVariants} animate={isOpen ? "open" : "closed"}>
                    <ul className={cn(styles.list)}>
                        <motion.li>
                            <Link href={"/"} passHref>
                                <motion.a className={cn(styles.menuItem)}>Главная</motion.a>
                            </Link>
                        </motion.li>
                        <motion.li>
                            <Link href={"/about"} passHref>
                                <motion.a className={cn(styles.menuItem)}>О нас</motion.a>
                            </Link>
                        </motion.li>
                        <motion.li>
                            <Link href={"/production"} passHref>
                                <motion.a className={cn(styles.menuItem)}>Производство</motion.a>
                            </Link>
                        </motion.li>
                        <motion.li>
                            <Link href={"/products"} passHref>
                                <motion.a className={cn(styles.menuItem)}>Продукция</motion.a>
                            </Link>
                        </motion.li>
                        <motion.li>
                            <Link href={"/cases"} passHref>
                                <motion.a className={cn(styles.menuItem)}>Кейсы</motion.a>
                            </Link>
                        </motion.li>
                        <motion.li>
                            <Link href={"/blog"} passHref>
                                <motion.a className={cn(styles.menuItem)}>Блог</motion.a>
                            </Link>
                        </motion.li>
                        <motion.li>
                            <Link href={"/contacts"} passHref>
                                <motion.a className={cn(styles.menuItem)}>Контакты</motion.a>
                            </Link>
                        </motion.li>
                    </ul>
                </motion.nav>
            </motion.div>
        </>
    );
};
