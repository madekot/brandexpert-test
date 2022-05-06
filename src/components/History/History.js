// import required modules
import { Navigation} from "swiper";

// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';

import './history.css';
import "swiper/css";
import "swiper/css/navigation";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const SwiperList = ({sliderList}) => {
  const slides = [];
  for (let i = 0; i < sliderList.length; i++) {
    let classList = 'history__slide-header';
    if (i % 2) {
      classList = 'history__slide-header history__slide-header--bottom';
    }
  
    slides.push(
      <SwiperSlide key={`slide-1-${i}`}>
        <div className="history__slide-item">
          <div className={classList}>
            <h3 className="history__slide-title">{sliderList[i].title}</h3> 
            <p className="history__slide-desc">{sliderList[i].desc}</p>
          </div> 
        </div>
      </SwiperSlide>
    );
  }

  return (
    <>
      <Swiper 
        navigation={{
          nextEl: '.history__swiper-button-next',
          prevEl: '.history__swiper-button-prev',       
        }} 
        slidesPerView={"auto"}
        modules={[Navigation]}
        className="history__swiper-top"
      >
        {slides}
      </Swiper> 
    </>
  )
}

const HistoryTop = (props) => {
  return (
    <div className="history__container">
      <div className="history__header">
        <h2 className="history__title">{props.info.title}</h2>
        <p className="history__desc">{props.info.desc}</p>
      </div> 
    </div>    
  )
}

const HistorySliderControls = () => {
  return (
    <div className="history__slider-list-controls history__container">
      <div className="history__swiper-button-prev swiper-button-prev"></div>  
      <div className="history__swiper-button-next swiper-button-next"></div>  
    </div>     
  )
}

const History = (props) => {
  const {title, desc} = props.historyData;

  return (
    <div className="history">
      <HistoryTop info={{title, desc}}/>
      <div className="history__slider-list">
        <SwiperList sliderList={props.historyData.sliderList}/>
      </div> 
      <HistorySliderControls/>
    </div>    
  )
}

export {History}