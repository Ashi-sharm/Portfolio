// import React from "react";

// import styles from "./about.module.css";
// import { getImageUrl } from "../../utils";

// export const About = () => {
//   return (
//     <section className={styles.container} id="about">
//       <h2 className={styles.title}>About Me</h2>
//       <div className={styles.content}>
//         {/* <img
//           src={getImageUrl("about/aboutImage.png")}
//           alt="Me sitting with a laptop"
//           className={styles.aboutImage}
//         /> */}
//         <ul className={styles.aboutItems}>
//           <li className={styles.aboutItem}>
//             <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
//             <div className={styles.aboutItemText}>
//               <h3>Education</h3>
//               <p>
//               Banasthali University, Rajasthan                                     2020 – 2024
//               Bachelors of Technology in Information Technology                    CGPA : 8.13
//               </p>
//             </div>
//           </li>
//           <li className={styles.aboutItem}>
//             <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
//             <div className={styles.aboutItemText}>
//               <h3>Backend Developer</h3>
//               <p>
//                 I have experience developing fast and optimized back-end systems
//                 and APIs
//               </p>
//             </div>
//           </li>
//           <li className={styles.aboutItem}>
//             <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
//             <div className={styles.aboutItemText}>
//               <h3>UI Designer</h3>
//               <p>
//                 I have designed multiple landing pages and have created design
//                 systems as well
//               </p>
//             </div>
//           </li>
//         </ul>
//       </div>
//     </section>
//   );
// };
import React from "react";
import styles from "./about.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        {/* <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        /> */}
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={`${styles.aboutItemText} ${styles.borderTop}`}>
              <h3>Education</h3>
              <p className={styles.institution}>Banasthali University, Rajasthan</p>
              <p>Bachelors of Technology in Information Technology</p>

              <div className={styles.details}>
                <p>2020 – 2024</p>
                <p>CGPA : 8.13</p>
              </div>
              <p className={styles.institution}>Queen Victoria Girls Inter College, Agra</p>
              <p>Class XII (PCM)</p>

              <div className={styles.details}>
                <p>2019</p>
                <p>Percentage : 63.2</p>
              </div>
              <p className={styles.institution}>Queen Victoria Girls Inter College, Agra</p>
              <p>Class X</p>

              <div className={styles.details}>
                <p>2017</p>
                <p>Percentage : 78.2</p>
              </div>
              {/* <p>Bachelors of Technology in Information Technology</p> */}
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Technical Skills</h3>
              <p className={styles.institution}>Relevant Coursework</p>

              <p>
              Object-Oriented Programming (OOPs), Database Management System (DBMS),
              MySQL, Operating System (OS), Data Structures & Algorithms (C++).
              </p>
              <p className={styles.institution}>Programming Languages</p>

              <p>
              JavaScript, C++
              </p>
              <p className={styles.institution}>Web Development :</p>

              <p>
              HTML, CSS, JavaScript, ReactJS, NodeJS, ExpressJs, MongoDB.
              </p>
              <p className={styles.institution}>Developer Tools/IDE</p>

              <p>
              Git, VS Code
              </p>
            </div>
          </li>
          {/* <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li> */}
        </ul>
      </div>
    </section>
  );
};
