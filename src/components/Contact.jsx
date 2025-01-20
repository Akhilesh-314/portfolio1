import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          
          <a href="mailto:akmauryaa314@gmail.com" ><img src={getImageUrl("emailIcon.png")} alt="Email icon" /></a>
        </li>
        <li className={styles.link}>
          
          <a href="https://www.linkedin.com/in/coder-akhilesh-maurya/" target="_blank"><img
            src={getImageUrl("linkedinIcon.png")}
            alt="LinkedIn icon"
          /></a>
      </li>
      <li className={styles.link}>

        <a href="https://github.com/Akhilesh-314" target="_blank"><img src={getImageUrl("githubIcon.png")} alt="Github icon" /></a>
      </li>
    </ul>
    </footer >
  );
};
