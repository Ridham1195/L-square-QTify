import React, { useEffect, useState } from "react";
import { useSwiper, useSwiperSlide } from "swiper/react";
import styles from "./LeftArrow.module.css";
import { ReactComponent as LeftNav } from "../../../assets/leftArrow.svg";

const LeftArrow = () => {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

  useEffect(() => {
    swiper.on("slideChange", function () {
      setIsBeginning(swiper.isBeginning);
    });
  }, []);
  return (
    <div className={styles.leftnav}>
      {!isBeginning && <LeftNav onClick={() => swiper.slidePrev()} />}
    </div>
  );
};

export default LeftArrow;