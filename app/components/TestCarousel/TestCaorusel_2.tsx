import cn from "classnames";
import styles from "./TestCaorusel.module.css";
import { ButtonBanner } from "@/app/components";
import React, {useState} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";
import './swiper_2.css';
import 'swiper/css/effect-cards';
import './styles_2.css';
import { EffectCards } from 'swiper/modules';



export const TestCarouselS = () => {
    

    return (
        <div className={styles.carouselContainer}>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
                loop={true}

            >
                <SwiperSlide className={styles.slide}>
                    <ButtonBanner
                        htagText={["Кремы", "для лица"]}
                        spanText={"Эффективный и роскошный уход"}
                        imageAlt={"Контрактное производство кремов для лица"}
                        imageSrc={"/home/creams_for_face_.webp"}

                    />
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                    <ButtonBanner
                        htagText={["Маски", "и патчи"]}
                        spanText={"Интенсивный уход и отличное качество"}
                        imageAlt={"Контрактное производство масок и патчей"}
                        imageSrc={"/home/masks_.webp"}

                    />
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                    <ButtonBanner
                        htagClassName={"button_htag_add"}
                        spanClassName={"button_span_add"}
                        htagText={["Тоники"]}
                        spanText={"Увлажняющий уход для кожи"}
                        imageAlt={"Контрактное производство тоников для лица"}
                        imageSrc={"/home/tonics_.webp"}

                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};
