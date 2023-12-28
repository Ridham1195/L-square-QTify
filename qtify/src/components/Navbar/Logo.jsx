import React from "react";
import styles from "./Logo.module.css";
import { ReactComponent as Headphoneicon } from "../../assets/logo.svg";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Headphoneicon />
    </div>
  );
};

export default Logo;
