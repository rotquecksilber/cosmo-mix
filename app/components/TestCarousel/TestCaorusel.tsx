"use client";
import styles from "./TestCaorusel.module.css";
import {ButtonBanner, Htag} from "@/app/components";
import React, {useEffect, useRef} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import './swiper_2.css';
import 'swiper/css/effect-cards';
import './styles_2.css';
import { EffectCards } from 'swiper/modules';
import Link from "next/link";
import cn from "classnames";
import Image from "next/image";
import {montserrat} from "@/app/(site)/fonts/fonts";


export const TestCarousel = () => {


    return (
        <div className={styles.carouselContainer}>
            <Swiper
                effect={'cards'}
                modules={[EffectCards]}
                className="mySwiper"
                loop={true}
            >
                <SwiperSlide className={styles.slide}>
                    <Link className={cn(styles.button)} href={"/"}>
                            <div>
                                <Image
                                    className={cn(styles.button_image)}
                                    role={"img"}
                                    src={"/home/lipstick_.webp"}
                                    width={416}
                                    height={451}
                                    alt={"d"}
                                    quality={"100"}
                                />
                                <div className={cn(styles.button_text)}>
                                    <div className={cn(styles.button_htag)}>
                                        <Htag size={"h3"} transform={"yes"}>
                                            1 слайд
                                        </Htag>
                                    </div>
                                    <div className={cn(styles.button_span, styles.button_span_add, montserrat.className)}>
                                        <span>Слайд 1</span>
                                    </div>
                                </div>
                            </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                    <Link className={cn(styles.button)} href={"/"}>
                        <div>
                            <Image
                                className={cn(styles.button_image)}
                                role={"img"}
                                src={"/home/lipstick_.webp"}
                                width={416}
                                height={451}
                                alt={"d"}
                                quality={"100"}
                            />
                            <div className={cn(styles.button_text)}>
                                <div className={cn(styles.button_htag)}>
                                    <Htag size={"h3"} transform={"yes"}>
                                        2 слайд
                                    </Htag>
                                </div>
                                <div className={cn(styles.button_span, styles.button_span_add, montserrat.className)}>
                                    <span>Слайд 2</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                    <Link className={cn(styles.button)} href={"/"}>
                        <div>
                            <Image
                                className={cn(styles.button_image)}
                                role={"img"}
                                src={"/home/lipstick_.webp"}
                                width={416}
                                height={451}
                                alt={"d"}
                                quality={"100"}
                            />
                            <div className={cn(styles.button_text)}>
                                <div className={cn(styles.button_htag)}>
                                    <Htag size={"h3"} transform={"yes"}>
                                        3 слайд
                                    </Htag>
                                </div>
                                <div className={cn(styles.button_span, styles.button_span_add, montserrat.className)}>
                                    <span>Слайд 3</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};
