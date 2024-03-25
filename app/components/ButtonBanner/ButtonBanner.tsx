import React from "react";
import cn from "classnames";
import Image from "next/image";
import { Htag } from "@/app/components";
import styles from "./ButtonBanner.module.css";
import { ButtonBannerProps } from "@/app/components/ButtonBanner/ButtonBanner.props";
import { montserrat } from "@/app/(site)/fonts/fonts";
import Link from "next/link";

export const ButtonBanner = ({
                                 imageSrc,
                                 imageAlt,
                                 htagText,
                                 spanText,
                                 htagClassName,
                                 spanClassName,
                                 isSwiping,
    onDragEnd,
                             }: ButtonBannerProps): React.JSX.Element => {
    // Обходим массив htagText и добавляем тег <br/> между элементами
    const htagWithBr = htagText.map((text, index) => (
        <React.Fragment key={index}>
            {text}
            {index !== htagText.length - 1 && <br />}
        </React.Fragment>
    ));



    return (
            <Link className={cn(styles.button)} href={"/"}>
                <div>
                    <Image
                        className={cn(styles.button_image)}
                        role={"img"}
                        src={imageSrc}
                        width={416}
                        height={451}
                        alt={imageAlt}
                        quality={"100"}
                    />
                    <div className={cn(styles.button_text)}>
                        <div className={cn(styles.button_htag, htagClassName)}>
                            <Htag size={"h3"} transform={"yes"}>
                                {htagWithBr}
                            </Htag>
                        </div>
                        <div className={cn(styles.button_span, spanClassName, montserrat.className)}>
                            <span>{spanText}</span>
                        </div>
                    </div>
                </div>
            </Link>
    );
};
