import cn from "classnames";
import styles from "@/app/components/Blocks/MobileBanner/MobileBanner.module.css";
import React from "react";

export const MobileBanner = ():React.JSX.Element => {
    return(
        <div className={cn(styles.wrapper)}>
        <div className={cn(styles.right_part_mobile)}>
            <div>
                <p className={cn(styles.p_right_mobile)}>20+</p>
                <p className={cn(styles.p_right_comment_mobile)}>
                    партнеров по всей России
                </p>
            </div>
            <div>
                <p className={cn(styles.p_right_mobile)}>15+</p>
                <p className={cn(styles.p_right_comment_mobile)}>экспертов в команде</p>
            </div>
            <div>
                <p className={cn(styles.p_right_mobile)}>3000+</p>
                <p className={cn(styles.p_right_comment_mobile)}>производится ежемесячно</p>
            </div>
        </div>
        </div>
    )
}
