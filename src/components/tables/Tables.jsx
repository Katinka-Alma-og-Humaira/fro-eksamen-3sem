"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { div } from "framer-motion/client";

const TableSwiper = () => {
  return (
    <div className="md:hidden">
      <p className="flex justify-center mb-10">Swipe for at booke bord!</p>

      <Swiper spaceBetween={20} slidesPerView={1.2} centeredSlides={true}>
        <SwiperSlide>
          <img src="/assets/table/table_1.png" alt="lille bord" className="w-40 mx-auto" />
          <p className="text-white text-center mt-4">Bord til 2-4 personer</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/table/table_2.png" alt="mellem bord" className="w-40 mx-auto" />
          <p className="text-white text-center mt-4">Bord til 3-6 personer</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/table/table_3.png" alt="stort bord" className="w-40 mx-auto" />
          <p className="text-white text-center mt-4">Bord til 5-8 personer</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TableSwiper;
