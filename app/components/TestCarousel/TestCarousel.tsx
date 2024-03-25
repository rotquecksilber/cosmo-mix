import React from "react";
import { motion } from "framer-motion";
import {ButtonBanner} from "@/app/components";
import styles from './testCarousel.module.css'
import cn from 'classnames'

const CARD_DATA = [
    {
        htagText: ["Кремы", "для лица"],
        spanText: "Эффективный и роскошный уход",
        imageAlt: "Контрактное производство кремов для лица",
        imageSrc: "/home/creams_for_face_.webp"
    },
    {
        htagText: ["Маски", "и патчи"],
        spanText: "Интенсивный уход и отличное качество",
        imageAlt: "Контрактное производство масок и патчей",
        imageSrc: "/home/masks_.webp"
    },
    {
        htagClassName: "button_htag_add",
        spanClassName: "button_span_add",
        htagText: ["Тоники"],
        spanText: "Увлажняющий уход для кожи",
        imageAlt: "Контрактное производство тоников для лица",
        imageSrc: "/home/tonics_.webp"
    },
];
const CARD_OFFSET = 25;
const SCALE_FACTOR = 0.1;

export const CardStack = () => {
    const [cards, setCards] = React.useState(CARD_DATA);

    const moveToEnd = (from: number) => {
        const newCards = [...cards];
        const movedCard = newCards.splice(from, 1)[0];
        newCards.push(movedCard);
        setCards(newCards);
    };

    return (
        <div className={styles.wrapperStyle}>
            <ul className={styles.cardWrapStyle}>
                {cards.map((card, index) => {
                    const canDrag = index === 0;

                    return (
                        <motion.li
                            key={card.imageSrc}
                            className={cn(
                                styles.cardStyle,
                                canDrag ? styles._cursor_grab : styles._cursor_auto
                            )}
                            animate={{
                                x: index * CARD_OFFSET,
                                scale: 1 - index * SCALE_FACTOR,
                                zIndex: -index
                            }}
                            drag={canDrag ? "x" : false}
                            dragConstraints={{
                                left: 0,
                                right: 0
                            }}
                            onDragEnd={() => moveToEnd(index)}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            <div>
                                <ButtonBanner
                                    htagText={card.htagText}
                                    spanText={card.spanText}
                                    imageAlt={card.imageAlt}
                                    imageSrc={card.imageSrc}
                                    htagClassName={card.htagClassName}
                                    spanClassName={card.spanClassName}
                                />
                            </div>
                        </motion.li>
                    );
                })}
            </ul>
        </div>
    );
};

const wrapperStyle: React.CSSProperties = {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%", // увеличьте ширину
    height: "450px"
};

const cardWrapStyle: React.CSSProperties = {
    position: "relative",
    width: "350px",
    height: "220px"
};

const cardStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "416px",
    height: "450px",
    borderRadius: "8px",
    transformOrigin: "center center",
    listStyle: "none"
};
