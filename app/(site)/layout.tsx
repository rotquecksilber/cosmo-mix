
import { Mulish } from 'next/font/google';
import './globals.css';
import { HeaderMenu } from '@/app/components/Blocks/HeaderMenu/HeaderMenu';
import { NextFont } from 'next/dist/compiled/@next/font';
import cn from 'classnames';
import React from 'react';
import UpButton from '@/app/components/UpButton/UpButton';




const mulish:NextFont = Mulish({ subsets: [ 'cyrillic' ] });

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(mulish.className)}>
        <HeaderMenu/>
        {children}
        <UpButton/>
      </body>
    </html>
  );
}
