import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>feel free to reach out to me!!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="EmailIcon"/>
                    <a href ="mailto:myemail@email.com">1821sharmaashi@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIcon"/>
                    <a href ="https://www.linkedin.com/in/ashi-sharma-124224221/">linkedin.com/Ashi</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="GithubIcon"/>
                    <a href ="https://github.com/Ashi-sharm">github.com/Ashi</a>
                </li>
            </ul>
        </footer>
  );
};

