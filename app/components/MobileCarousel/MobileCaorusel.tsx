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



export const MobileCarousel = () => {

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
                        htagText={["Тональные", "средства"]}
                        spanText={"Идеальное сочетание текстуры и оттенков"}
                        imageAlt={"Контрактное производство тональных кремов"}
                        imageSrc={"/home/foundation_.webp"}
                    />
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                    <ButtonBanner
                        htagClassName={"button_htag_add"}
                        spanClassName={"button_span_add"}
                        htagText={["Румяна"]}
                        spanText={"Яркие цвета и ощущение свежести"}
                        imageAlt={"Контрактное производство румян"}
                        imageSrc={"/home/blush_.jpg"}
                    />
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                    <ButtonBanner
                        htagClassName={"button_htag_add"}
                        spanClassName={"button_span_add"}
                        htagText={["Помады"]}
                        spanText={"Стойкость и насыщенность цвета"}
                        imageAlt={"Контрактное производство помад"}
                        imageSrc={"/home/lipstick_.jpg"}
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};
