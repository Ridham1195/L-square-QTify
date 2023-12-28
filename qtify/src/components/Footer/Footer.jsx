import React from "react";
import styles from "./Footer.module.css";
import FooterAccordion from "./FooterAccordion/FooterAccordion";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.base}>
        <div className={styles.typo}>
          <h1>FAQs</h1>
        </div>
        <FooterAccordion />
      </div>
    </div>
  );
};

export default Footer;