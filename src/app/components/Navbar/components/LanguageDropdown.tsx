"use client";
import React, { useState } from "react";
import styles from "../styles/languagedropdown.module.css";
import { ChevronDownOutline } from "react-ionicons";

const LanguageDropdown = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles["dropdown"]}>
      <button onClick={() => setOpen(!open)} className="form-btn m-auto" type="submit" data-form-btn>
        <span className="fi fi-us"></span>{" "}
        <ChevronDownOutline
          color={"#00000"}
          //   title={}
          height="18px"
          width="18px"
        />
      </button>
      <div
        className={`${styles["dropdown-content"]}`}
        style={{ display: open ? "block" : "none" }}
      >
        <a className={`${styles["selected"]}`} style={{color: "black"}} href="#">
          <span className="fi fi-us"></span>
          <span>EN-English</span>
        </a>
        <a  href="#">
          <span className="fi fi-fr"></span>
          <span>(Bientôt!)</span>
        </a>
      </div>
    </div>
  );
};

export default LanguageDropdown;
