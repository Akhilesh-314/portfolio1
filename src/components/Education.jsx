import React from "react";

import styles from "./Projects.module.css";

import education from "../data/education.json";
import { EducationCard } from "./EducationCard";

export const Education = () => {
  return (
    <section className={styles.container} id="Education">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.projects}>
        {education.map((classes, id) => {
          return <EducationCard key={id} project={classes} />;
        })}
      </div>
    </section>
  );
};
