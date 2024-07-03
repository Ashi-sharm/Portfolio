import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

const path_to_file="/RESUME (4).pdf"
export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}> Hi, I'm Ashi</h1>
        <p className={styles.description}>
          Searching for favorable career opportunities that would assist me in
          gaining greater practical excellence in the IT and software industry.
          </p>
          <div>
          <a href="mailto:1821sharmaashi@gmail.com" className={styles.contactBtn}>
          Contact Me </a>
          <span style={{ marginRight: '29px' }} />
          <a href={path_to_file} download="Ashi's Resume" className={styles.DownloadCV}>
          Download CV </a>
          </div>
         
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}/>

        <div className={styles.toBlur}/>
        <div className={styles.bottomBlur} />
    </section>
  );
};
