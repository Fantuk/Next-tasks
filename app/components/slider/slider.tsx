"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";

import useData from "@/app/hooks/useData";

import "swiper/css";
import 'swiper/css/navigation';


function Slider() {
  const { data } = useData();

  if (!data)
    return <div className="flex items-center justify-center">Loading...</div>;
  return (
    <Swiper modules={[Navigation]} navigation >
      {data.map((img) => (
        <SwiperSlide key={img.id}>
          <div className="flex items-center justify-center cursor-pointer">
            <Image
              src={img.urls.full}
              width={500}
              height={500}
              alt={img.alt_description}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;