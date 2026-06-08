'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type Slide = {
  src: string;
  title?: string;
  subTitle?: string;
  buttonLeft?: string;
  buttonRight?: string;
  buttonLeftTextColor?: string;
};

export default function MySwiper({
  imageList,
  slidesPerView = 1,
  spaceBetween = 20,
  loop = true,
  zoom = false
}: {
  imageList: Slide[];
  slidesPerView?: number;
  spaceBetween?: number;
  loop?: boolean;
  zoom?: boolean;
}) {
  return (
    <div className="relative z-0">
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      loop={loop}
      zoom={zoom}
      navigation
       pagination={{ clickable: true , renderBullet(index ,className){
        return `<span class="${className} w-4! bg-white! h-4!"></span>`;
      },bulletActiveClass: "w-8! bg-white! opacity-100! rounded-lg!" }}
    >
      {imageList.map((slide, i) => (
        <SwiperSlide key={i}>
          <div className="relative w-full h-100 ">

            {/* image */}
            <img
              src={slide.src}
              alt={slide.title}
              className="w-full h-full object-cover"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/90 to-green-400/50 flex items-center ">
<div  className="container mx-auto px-4">
              <div className="px-6 text-white max-w-md">
                <h2 className="text-3xl font-bold mb-3">
                  {slide.title}
                </h2>

                <p className="mb-4">{slide.subTitle}</p>

                {/* buttons */}
                <div className="flex gap-2">
                  {slide.buttonLeft && (
                    <a href='/allProduct' 
                    style={{color: slide.buttonLeftTextColor,}}
                    className="bg-white px-5 py-2 rounded-lg font-semibold hover:scale-105 transition">
                      {slide.buttonLeft}
                    </a>
                  )}

                  {slide.buttonRight && (
                    <a href='/error' className="border border-white px-5 py-2 rounded-lg hover:scale-105 transition">
                      {slide.buttonRight}
                    </a>
                  )}
                </div>

              </div>
</div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
}