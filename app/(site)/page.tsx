"use client";
import Image from "next/image";
import styles from "./page.module.css";
import cn from "classnames";
import {Areas, Button, MobileBanner, Products} from "@/app/components";
import {montserrat} from "@/app/(site)/fonts/fonts";
import React from "react";
import {motion} from "framer-motion";

/**
 * Компонент главной страницы.
 * Содержит баннер с изображением, текстовый блок и кнопку.
 * При маленьком разрешении экрана добавляется дополнительный мобильный баннер.
 */
export default function Home() {
    return (
        <main className={cn(styles.main, montserrat.className)}>
            {/* Баннер с изображением */}
            <section>

                <div className={cn(styles.banner)}>
                    <Image
                        role={"img"}
                        className={cn(styles.image)}
                        src={"/home/banner_desktop.jpg"}
                        width={1512}
                        height={646}
                        alt={"Контрактное производство косметики"}
                    />
                </div>
                {/* Блок с текстом и кнопкой */}

                <div className={cn(styles.overlay, "width")}>
                    <div className={cn(styles.left_part)}>
                        <h1 className={cn(styles.h1)}>
                            Контрактное производство косметики
                        </h1>
                        <p className={cn(styles.p)}>
                            Добро пожаловать на сайт российского контрактного производства
                            косметики
                            <span className={cn(styles.span)}> COSMOMIX</span>. Наша
                            специализация — это производство декоративной и уходовой косметики
                            для вашего бизнеса или бренда
                        </p>
                        <Button size={"small"} buttonColor={"white"} aria_label={"Оставить заявку"}>
                            Оставить заявку
                        </Button>
                    </div>
                    {/* Правая часть с краткой информацией */}
                    <div className={cn(styles.right_part)}>
                        <div>
                            <p className={cn(styles.p_right)}>20+</p>
                            <p className={cn(styles.p_right_comment)}>
                                партнеров по всей<br/>
                                России
                            </p>
                        </div>
                        <div>
                            <p className={cn(styles.p_right)}>15+</p>
                            <p className={cn(styles.p_right_comment)}>экспертов<br/>в команде</p>
                        </div>
                        <div>
                            <p className={cn(styles.p_right)}>3000+</p>
                            <p className={cn(styles.p_right_comment)}>производится<br/>ежемесячно</p>
                        </div>
                    </div>
                </div>
                {/* Мобильный баннер */}
                <div className={cn(styles.mobile)}>
                    <MobileBanner/>
                </div>
            </section>
            {/* Основной контент сайта */}
            <Areas/>
            <Products/>
        </main>
    );
}
