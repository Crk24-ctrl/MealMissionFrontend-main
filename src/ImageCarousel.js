import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './ImageCarousel.css';

const ImageCarousel = () => {
  const images = [
    '/images/lynnbasma.jpeg',
    '/images/nourcooking.jpeg',
    '/images/ruba.jpeg',
    '/images/nouraatkiosk.jpeg',
    '/images/caleensupermarket.jpeg',
    '/images/lynnfoodblessed.jpeg',
    '/images/nour.jpeg',
    '/images/nouracake.jpeg',
    './images/caleencheckingitems.jpeg'
    
  ];

  return (
    <div className="image-carousel">
      <Swiper
        modules={[Navigation, Pagination]} // Include Navigation module here
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        navigation
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;