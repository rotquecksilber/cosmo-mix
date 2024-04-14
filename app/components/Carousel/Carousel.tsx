'use client';
import React, { ReactNode } from 'react';
import Slider from 'react-slick';
import './slick.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Carousel.module.css';

interface Props {
  children: ReactNode;
}
export const Carousel = ({ children }: Props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '10%',
    arrows: false,
    responsive: [
      {
        breakpoint: 945, // Примерный размер экрана, на котором хотите показывать 2 слайда
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerMode: false, // Отключаем центрирование для разрешений, на которых показываем 2 слайда
          centerPadding: '0px' // Устанавливаем отступы между слайдами в 0
        }
      },
      {
        breakpoint: 600, // Примерный размер экрана, на котором хотите показывать 2 слайда
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true, // Отключаем центрирование для разрешений, на которых показываем 2 слайда
          centerPadding: '10%' // Устанавливаем отступы между слайдами в 0
        }
      }
    ]
  };


  return (
    <div className={styles.slider}>
      <Slider {...settings}>

        {children}

      </Slider>
    </div>
  );
};
