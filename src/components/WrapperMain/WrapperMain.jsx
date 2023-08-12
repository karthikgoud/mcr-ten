import React from "react";
import styles from "./WrapperMain.module.css";
import SideNav from "../SideNav/SideNav";

const WrapperMain = ({ children }) => {
  return (
    <div className={styles.ContWrapper}>
      <div className={styles.sideCont}>
        <SideNav />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default WrapperMain;
