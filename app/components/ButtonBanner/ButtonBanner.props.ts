import React from "react";

export interface ButtonBannerProps {
    imageSrc: string;
    imageAlt: string;
    htagText: string[];
    spanText: string;
    htagClassName?: string;
    spanClassName?: string;
    isSwiping?: boolean;
    onDragEnd?: () => void;
}
