import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {ButtonBanner} from "@/app/components";


const CARD_COLORS = ["#266678", "#cb7c7a", "#36a18b"];
const CARD_OFFSET = 40;
const SCALE_FACTOR = 0.1;

export const CardStack = () => {
    const [cards, setCards] = React.useState(CARD_COLORS);

    const moveToEnd = (from: number) => {
        const newCards = [...cards];
        const movedCard = newCards.splice(from, 1)[0];
        newCards.push(movedCard);
        setCards(newCards);
    };

    return (
        <div style={wrapperStyle}>
            <ul style={cardWrapStyle}>
                {cards.map((color, index) => {
                    const canDrag = index === 0;

                    return (
                        <motion.li
                            key={color}
                            style={{
                                ...cardStyle,

                                cursor: canDrag ? "grab" : "auto"
                            }}
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
                            <motion.div drag="x" dragConstraints={{left: 0, right: 0}}
                                        onDragEnd={() => moveToEnd(index)}>
                                <ButtonBanner
                                    htagClassName={"button_htag_add"}
                                    spanClassName={"button_span_add"}
                                    htagText={["Тоники"]}
                                    spanText={"Увлажняющий уход для кожи"}
                                    imageAlt={"Контрактное производство тоников для лица"}
                                    imageSrc={"/home/tonics_.webp"}

                                />
                            </motion.div>

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
    height: "100vh"
};

const cardWrapStyle: React.CSSProperties = {
    position: "relative",
    width: "350px",
    height: "220px"
};

const cardStyle: React.CSSProperties = {
    position: "absolute",
    width: "350px",
    height: "220px",
    borderRadius: "8px",
    transformOrigin: "center center",
    listStyle: "none"
};
