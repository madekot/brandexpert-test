import { Navigation, Grid } from "swiper";

// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/navigation";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const SwiperList = ({sliderList}) => {
  const slides = sliderList.map((slide, index) => (
    <SwiperSlide key={`slide-1-${index}`}>
      <div className="history__slide-item">
        <div className='history__slide-header'>
          <h3 className="history__slide-title">{slide.title}</h3> 
          <p className="history__slide-desc">{slide.desc}</p>
        </div> 
      </div>
    </SwiperSlide>
  ))

  return (
    <>
      <Swiper 
        navigation={{
          nextEl: '.history__swiper-button-next',
          prevEl: '.history__swiper-button-prev',       
        }} 
        grid={{
          rows: 2
        }}
        slidesPerView={"auto"}
        modules={[Navigation, Grid]}
        className="history__swiper-top"
      >
        {slides}
      </Swiper> 
    </>
  )
}

export {SwiperList}