import cn from "classnames";
import styles from "./MobileCaorusel.module.css";
import { ButtonBanner } from "@/app/components";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";
import './swiper.css';
import 'swiper/css/effect-cards';
import './styles.css';
import { EffectCards } from 'swiper/modules';



export const MobileCarouselS = () => {

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
                        imageSrc={"/home/creams_for_face.jpg"}
                    />
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                    <ButtonBanner
                        htagText={["Маски", "и патчи"]}
                        spanText={"Интенсивный уход и отличное качество"}
                        imageAlt={"Контрактное производство масок и патчей"}
                        imageSrc={"/home/masks.jpg"}
                    />
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                    <ButtonBanner
                        htagClassName={"button_htag_add"}
                        spanClassName={"button_span_add"}
                        htagText={["Тоники"]}
                        spanText={"Увлажняющий уход для кожи"}
                        imageAlt={"Контрактное производство тоников для лица"}
                        imageSrc={"/home/tonics.jpg"}
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};