import React from "react";
import styles from "../styles/languagedropdown.module.css";

const LanguageDropdown = () => {
  return (
    <div className={styles["dropdown"]}>
      <button className={styles["dropbtn"]}>Dropdown</button>
      <div className={styles["dropdown-content"]}>
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
  );
};

export default LanguageDropdown;
