import type { Metadata } from "next";
import {Inter, Montserrat, Mulish} from "next/font/google";
import "./globals.css";
import {HeaderMenu} from "@/app/components/Blocks/HeaderMenu/HeaderMenu";
import {NextFont} from "next/dist/compiled/@next/font";
import cn from "classnames";
import React from "react";
import {montserrat} from "@/app/(site)/fonts/fonts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Контрактное производство косметики на заказ под собственным брендом - COSMOMIX",
  description: "Контрактное производство косметики на заказ под собственным брендом СТМ, готовая продукция через 3 дня, используем современное оборудование, производим косметику по проверенным рецептам.",
};


const mulish:NextFont = Mulish({subsets: ["cyrillic"]})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(mulish.className, montserrat.className)}>
      <HeaderMenu/>
      {children}
      </body>
    </html>
  );
}
