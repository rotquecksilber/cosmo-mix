import styles from "./TestCaorusel.module.css";
import { ButtonBanner } from "@/app/components";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import './swiper_2.css';
import 'swiper/css/effect-cards';
import './styles_2.css';
import { EffectCards } from 'swiper/modules';
import Link from "next/link";



export const TestCarousel = () => {

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
                    <Link href={"/"}>
                    <ButtonBanner
                        htagText={["Тональные", "средства"]}
                        spanText={"Идеальное сочетание текстуры и оттенков"}
                        imageAlt={"Контрактное производство тональных кремов"}
                        imageSrc={"/home/foundation_.webp"}
                    />
                    </Link>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                    <Link href={"/"}>
                    <ButtonBanner
                        htagClassName={"button_htag_add"}
                        spanClassName={"button_span_add"}
                        htagText={["Румяна"]}
                        spanText={"Яркие цвета и ощущение свежести"}
                        imageAlt={"Контрактное производство румян"}
                        imageSrc={"/home/blush_.webp"}

                    />
                </Link>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                    <Link href={"/"}>
                    <ButtonBanner
                        htagClassName={"button_htag_add"}
                        spanClassName={"button_span_add"}
                        htagText={["Помады"]}
                        spanText={"Стойкость и насыщенность цвета"}
                        imageAlt={"Контрактное производство помад"}
                        imageSrc={"/home/lipstick_.webp"}
                    />
                </Link>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};
