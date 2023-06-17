import React, { useState } from 'react';
import Slider from 'react-slick';
import styles from './banner.module.css';
import { Container, Image } from 'semantic-ui-react';

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

type listBannersTs = {
  id?: number;
  type?: string;
  listBanner?: Array<string>;
};

const listBanners = [
  'https://cf.shopee.vn/file/ca756c2d4fe5033b3788af1b52f91263_xxhdpi',
  'https://cf.shopee.vn/file/ca756c2d4fe5033b3788af1b52f91263_xxhdpi',
  'https://cf.shopee.vn/file/048d1d95d67d17b27cd92d818eaddfa8_xxhdpi',
  'https://cf.shopee.vn/file/f815d4f8883a411aac64214d43bf7b8d_xxhdpi',
  'https://cf.shopee.vn/file/f815d4f8883a411aac64214d43bf7b8d_xxhdpi',
];

export const Banner = () => {
  const [showButtonPrevNext, setShowButtonPrevNext] = useState<boolean>(false);
  const [showButtonSubPrevNext, setShowSubButtonPrevNext] = useState<boolean>(false);
  const [bannerHoverId, setBannerHoverId] = useState<number>();

  return (
    <Container
      onMouseLeave={() => setShowButtonPrevNext(false)}
      onMouseEnter={() => setShowButtonPrevNext(true)}
    >
      <Slider {...settings}>
        {listBanners.map((x) => (
         <img className="d-block w-100" src={x} alt={x} />
        ))}
      </Slider>
    </Container>
  );
};
