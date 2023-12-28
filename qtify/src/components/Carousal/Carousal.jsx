import React, { useEffect } from 'react'
import styles from "./Carousal.module.css"

// import Swiper core and required modules
import { Navigation} from 'swiper';

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import RightArrow from './RightArrow/RightArrow';
import LeftArrow from "./LeftArrow/LeftArrow"

const Controls = ({data})=>{
    const swiper = useSwiper();
    useEffect(()=>{
        swiper.slideTo(0)
    }, [data])
}

const Carousal = ({data , renderComponent}) => {
  return (
    <div className={styles.wrapper}>
         <Swiper
         style={{padding:"0px 20px"}}
         initialSlide={0}
      // install Swiper modules
      modules={[Navigation]}
      spaceBetween={40}
      slidesPerView={"auto"}
      allowTouchMove
    >
        <Controls data={data}/>
        <LeftArrow/>
        <RightArrow/>
      {data.map((ele)=>(<SwiperSlide key={ele.id}>{renderComponent(ele)}</SwiperSlide>))}
    </Swiper>
    </div>
  )
}

export default Carousal