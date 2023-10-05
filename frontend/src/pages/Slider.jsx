import React from 'react'
import {Swiper,SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Box, Stack, Typography } from '@mui/material';


const StyledSwipper={
    width: "100%",
    height:"100%",
}
const SwipperSlide={
    textAlign: "center",
    fontSize: "18px",
    background:" #fff",
    /* Center slide text vertically */
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}
const StyleSliderImage={
    display: "block",
    width: "100%",
    height: "100%",
    objectFit: "cover"
}

const Slider = () => {
  return (
    <Swiper
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    modules={[Autoplay, Pagination, Navigation]}
    // className="mySwiper"
    style={StyledSwipper}
  >
    <SwiperSlide style={SwipperSlide} >
    <img 
        style={StyleSliderImage}
        src={require("../assets/tracking.jpg")} alt="tracking app" 
        />
    </SwiperSlide>
    <SwiperSlide style={SwipperSlide} >
    <img 
            style={StyleSliderImage}
            src={require("../assets/software.webp")} alt="tracking app" 
            />
    </SwiperSlide>
    <SwiperSlide style={SwipperSlide}>
        <img 
            style={StyleSliderImage}
            src={require("../assets/lib.jfif")} alt="tracking app" 
            />
    </SwiperSlide>
  </Swiper>
  )
}

export default Slider
