import React from "react";

import styles from "./EducationCard.module.css";

export const EducationCard = ({
  project: { classes,board,college,percent },
}) => {
  return (
    <div className={styles.container}>

      <h3 className={styles.title}>{classes}</h3>
      <h3 className={styles.title}>{board}</h3>
      <p className={styles.description}>{college}</p>
      <p className={styles.description}>{percent}</p>
      
     
    </div>
  );
};
