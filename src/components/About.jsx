import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img  src={getImageUrl("cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              
              <p>
              Hi, I'm Akhilesh Maurya, a passionate and dedicated professional with a knack for problem-solving and innovation. With a strong foundation in database management, front-end technologies, and software development, I thrive on creating efficient and impactful solutions.

I’ve had the privilege of being part of prestigious programs like Super 20 and working as a WWD intern, which have enriched my technical expertise and collaborative skills.

Let’s connect and create something meaningful together!







              </p>
            </div>
          </li>
          
        </ul>
      </div>
    </section>
  );
};
