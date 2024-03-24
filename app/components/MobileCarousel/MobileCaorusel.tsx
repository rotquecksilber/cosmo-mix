"use client"
import styles from "./MobileCaorusel.module.css";
import { ButtonBanner } from "@/app/components";
import React, {useState} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import './swiper.css';
import 'swiper/css/effect-cards';
import './styles.css';
import { EffectCards } from 'swiper/modules';



export const MobileCarousel = () => {

    const [isSwiping, setIsSwiping] = useState(false);

    const handleTouchStart = () => {
        setIsSwiping(false);
    }

    const handleTouchMove = () => {
        setIsSwiping(true);
    }

    return (
        <div className={styles.carouselContainer}>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
                loop={true}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
            >
                <SwiperSlide className={styles.slide}>
                    <ButtonBanner
                        htagText={["Тональные", "средства"]}
                        spanText={"Идеальное сочетание текстуры и оттенков"}
                        imageAlt={"Контрактное производство тональных кремов"}
                        imageSrc={"/home/foundation_.webp"}
                        isSwiping={isSwiping}
                    />
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                    <ButtonBanner
                        htagClassName={"button_htag_add"}
                        spanClassName={"button_span_add"}
                        htagText={["Румяна"]}
                        spanText={"Яркие цвета и ощущение свежести"}
                        imageAlt={"Контрактное производство румян"}
                        imageSrc={"/home/blush_.webp"}
                        isSwiping={isSwiping}
                    />
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                    <ButtonBanner
                        htagClassName={"button_htag_add"}
                        spanClassName={"button_span_add"}
                        htagText={["Помады"]}
                        spanText={"Стойкость и насыщенность цвета"}
                        imageAlt={"Контрактное производство помад"}
                        imageSrc={"/home/lipstick_.webp"}
                        isSwiping={isSwiping}
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};
