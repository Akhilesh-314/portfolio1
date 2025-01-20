import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        <img className={styles.img} src={getImageUrl("logo.png")} width={200} alt="Akhilesh" />
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("closeIcon.png")
              : getImageUrl("menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#Education">Education</a>
          </li>
          <li>
            <a href="#skill">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href={getImageUrl("Akhilesh_Resume.pdf")} download>
              Resume
            </a>          </li>
        </ul>
      </div>
    </nav>
  );
};
