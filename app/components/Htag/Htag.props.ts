import {ReactNode} from "react";

export interface HtagProps {
    size: "h2" | "h3" | "h4";
    children: ReactNode;
    transform: "no" | "yes";
}
