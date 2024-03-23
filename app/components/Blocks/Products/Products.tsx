import React from "react";
import cn from "classnames";
import styles from "@/app/components/Blocks/common.module.css";
import localStyles from './Products.module.css'
import {ButtonBanner, Htag, MobileCarousel} from "@/app/components";
import {montserrat} from "@/app/(site)/fonts/fonts";
import Link from "next/link";
import {MobileCarouselS} from "@/app/components/MobileCarousel/MobileCaorusel_2";


export const Products = (): React.JSX.Element => {
    return (
        <section>
            <div className="width">
                {/* Блок с заголовком и ссылкой */}
                <div className={cn(styles.content)}>
                    <div className={cn(styles.content_title)}>
                        <Htag size={"h2"} transform={"yes"}>Что мы<br/>производим?</Htag>
                    </div>
                    <div className={cn(styles.content_right_link, montserrat.className)}>
                        <Link className={cn(styles.link)} href={"/production/dekorativnaya_kosmetika"}>
                            <Htag size={"h3"} transform={"yes"}>Декоративная косметика</Htag>
                        </Link>
                    </div>
                </div>
                <div className={cn(localStyles.carousel_desktop)}>
                    <ButtonBanner
                        htagText={["Тональные", "средства"]}
                        spanText={"Идеальное сочетание текстуры и оттенков"}
                        imageAlt={"Контрактное производство тональных кремов"}
                        imageSrc={"/home/foundation.jpg"}
                    />
                    <ButtonBanner
                        htagClassName={"button_htag_add"}
                        spanClassName={"button_span_add"}
                        htagText={["Румяна"]}
                        spanText={"Яркие цвета и ощущение свежести"}
                        imageAlt={"Контрактное производство румян"}
                        imageSrc={"/home/blush.jpg"}
                    />
                    <ButtonBanner
                        htagClassName={"button_htag_add"}
                        spanClassName={"button_span_add"}
                        htagText={["Помады"]}
                        spanText={"Стойкость и насыщенность цвета"}
                        imageAlt={"Контрактное производство помад"}
                        imageSrc={"/home/lipstick.jpg"}
                    />
                </div>
                <MobileCarousel/>

                <div className={cn(styles.content)}>
                    <div className={cn(styles.content_title)}>
                    </div>
                    <div className={cn(styles.content_right_link, montserrat.className)}>
                        <Link className={cn(styles.link)} href={"/production/uhodovaya_kosmetika"}>
                            <Htag size={"h3"} transform={"yes"}>Уходовая косметика</Htag>
                        </Link>
                    </div>
                </div>
                <div className={cn(localStyles.carousel_desktop)}>
                    <ButtonBanner
                        htagText={["Кремы", "для лица"]}
                        spanText={"Эффективный и роскошный уход"}
                        imageAlt={"Контрактное производство кремов для лица"}
                        imageSrc={"/home/creams_for_face.jpg"}
                    />
                    <ButtonBanner
                        htagText={["Маски", "и патчи"]}
                        spanText={"Интенсивный уход и отличное качество"}
                        imageAlt={"Контрактное производство масок и патчей"}
                        imageSrc={"/home/masks.jpg"}
                    />
                    <ButtonBanner
                        htagClassName={"button_htag_add"}
                        spanClassName={"button_span_add"}
                        htagText={["Тоники"]}
                        spanText={"Увлажняющий уход для кожи"}
                        imageAlt={"Контрактное производство тоников для лица"}
                        imageSrc={"/home/tonics.jpg"}
                    />
                </div>
                <MobileCarouselS/>
            </div>
        </section>
    )
}
