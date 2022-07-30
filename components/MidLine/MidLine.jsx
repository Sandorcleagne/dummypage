import React from "react";
import { midLineData } from "../../constants/MidLine.js";
import styles from "../../styles/MidLine.module.scss";
const MidLine = () => {
  return (
    <div className={styles.namecontainer}>
      <div className={styles.leftitemcontainer}>
        <div>{midLineData.bags}</div>
        <div>{midLineData.icon1}</div>
        <div>{midLineData.backpack}</div>
      </div>
      <div className={styles.rightitemcontainer}>
        <div>{midLineData.pro13}</div>
        <div className={styles.vector}>{midLineData.vector}</div>
      </div>
    </div>
  );
};

export default MidLine;
