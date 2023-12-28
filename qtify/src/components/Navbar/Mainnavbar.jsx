import React from "react";
import SearchBar from "./SearchBar";
import FeedbackButton from "./FeedbackButton";
import styles from "./Mainnavbar.module.css";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const Mainnavbar = () => {
  return (
    <nav className={styles.mainnav}>
      <Link to="/">
      <Logo />
      </Link>     
      <SearchBar />
      <FeedbackButton />
    </nav>
  );
};

export default Mainnavbar;