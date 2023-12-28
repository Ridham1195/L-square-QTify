import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.main}>
      <div className={styles.inside}>
        <div>
          <h1>100 Thousand Songs, ad-free</h1>
          <h1>Over thousands podcast episodes</h1>
        </div>
        <div>
          <img
            src={require("../../assets/vibrating-headphone 1.png")}
            width={212}
            alt="headphone"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;