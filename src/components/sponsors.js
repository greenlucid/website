import React from "react";
import ThomsonReuters from "../assets/images/thomson-reuters.png";

import styles from "./styles/sponsors.module.css";

export default ({ extraClass }) => {
  return (
    <div className={`${extraClass} ${styles.sponsors}`}>
      <div className={styles.reutersContainer}>
        <img className={styles.reuters} src={ThomsonReuters} alt="Hosted by Thomson Reuters Incubator" />
      </div>
      <div className={styles.bpiContainer}>
        <svg viewBox="0 0 568 163" version="1.1" className={styles.bpi}>
          <title>logo-footer</title>
          <desc>Created with Sketch.</desc>
          <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="logo-footer" fillRule="nonzero">
              <path
                d="M464.88,53.13 C457.35,53.13 453.78,66.49 456.06,86.23 C458.82,110.26 480.26,110.18 494.78,104.1 L494.76,115.96 C485.84,118.39 478.56,119 472.26,119 C435.66,119 431.93,88.9 431.93,79.9 C431.93,64.62 437.35,43.5 466.36,43.5 C485.6,43.5 496.58,56.02 496.76,72.8 L473.6,72.8 C473.56,62.33 471.36,53.16 464.88,53.16 L464.88,53.13 Z M542.58,70.35 L542.58,68.85 C542.28,61.51 540.78,53.12 534.48,53.12 C528.4,53.12 526.34,60.15 525.48,69.88 L525.43,70.34 L542.57,70.34 L542.58,70.35 Z M567.04,80.85 L525.17,80.85 L525.19,81.29 C526.69,110.89 548.71,110.26 564.25,104.09 L564.24,115.97 C555.34,118.4 549.14,119.01 542.26,119.01 C506.66,119.01 501.36,92.58 501.36,79.06 C501.36,63.43 508.16,43.46 535.36,43.49 C555.43,43.5 567.04,56.16 567.04,73.73 L567.04,80.83 L567.04,80.85 Z M316.68,106.77 L316.6,78.87 L316.14,78.91 C310.14,79.44 301.34,82.14 301.34,94.24 C301.33,105.56 306.84,106.54 312.09,106.76 L316.69,106.77 L316.68,106.77 Z M340.85,116.77 L301.72,116.76 C287.3,116.74 276.92,110.88 276.94,94.9 C276.96,81.9 284.48,75.64 293.16,72.6 C297.51,71.08 302.14,70.38 306.26,70.05 C310.38,69.72 313.96,69.78 316.18,69.77 L316.6,69.77 L316.6,67.51 C316.62,50.79 299.93,52.58 290.5,55.33 C288.7,55.88 287.07,56.46 285.7,57.03 L285.7,46.1 C294.03,44.14 299.7,43.47 308.55,43.47 C329.48,43.47 340.85,53.29 340.85,69.7 L340.85,116.76 L340.85,116.77 Z M276.5,53.94 C270.78,54.2 262,56.24 262,69.6 L261.96,116.77 L237.7,116.77 L237.73,68.83 C237.75,54.43 250.93,43.48 271.56,43.48 L276.48,43.48 L276.49,53.94 L276.5,53.94 Z M237.35,16.04 L237.34,26.31 L230.27,26.49 C227.84,26.69 225.53,27.09 223.53,27.91 C219.45,29.61 216.73,33.06 216.73,39.88 L216.73,45.93 L233.83,45.93 L233.82,56.33 L216.68,56.33 L216.7,116.77 L192.47,116.77 L192.47,45.47 C192.47,19.12 210.54,16.03 232.44,16.03 L237.34,16.03 L237.35,16.04 Z M421.15,116.78 L396.77,116.78 L396.72,74.1 C396.72,57.28 390.34,56.4 381.46,56.35 L379.74,56.35 L379.76,116.78 L355.46,116.78 L355.44,45.6 C357.41,45.73 363.98,45.94 385.89,45.94 C421.02,45.94 421.12,62.24 421.13,75.49 L421.14,116.79 L421.15,116.78 Z M164.83,162.76 C156.21,162.76 149.23,155.76 149.23,147.13 C149.23,138.5 156.23,131.5 164.83,131.5 C173.43,131.5 180.43,138.5 180.43,147.13 C180.43,155.76 173.43,162.76 164.83,162.76 Z"
                id="Shape"
                fill="yellow"
              ></path>
              <path
                d="M176.97,45.92 L176.93,116.77 L152.68,116.77 L152.7,45.92 L176.97,45.92 Z M164.83,31.28 C156.21,31.28 149.23,24.28 149.23,15.66 C149.23,7.04 156.23,0.03 164.83,0.03 C173.43,0.03 180.43,7.03 180.43,15.66 C180.43,24.29 173.43,31.28 164.83,31.28 Z M41.2,80.5 C41.2,65.04 37.6,55.52 26.48,55.52 L24.48,55.52 L24.48,107 L26.83,107 C37.63,107 41.19,96.7 41.19,80.5 L41.2,80.5 Z M0.1,116.76 L0.1,16.03 L24.48,16.03 L24.47,45.93 L32.19,45.93 C49.09,45.93 57.44,52.53 61.59,60.1 C65.79,67.72 65.79,76.4 65.79,80.68 C65.79,91.92 62.24,116.78 34.39,116.78 L0.09,116.76 L0.1,116.76 Z M100.8,55.5 L100.8,107 L102.8,107 C113.93,107 117.5,97.48 117.5,82 C117.5,65.82 113.93,55.5 103.14,55.5 L100.8,55.5 L100.8,55.5 Z M142.12,82.02 C142.12,86.29 142.12,94.98 137.92,102.6 C133.75,110.17 125.4,116.77 108.52,116.77 L100.8,116.77 L100.8,146.67 L76.43,146.67 L76.43,45.929997 L110.73,45.93 C138.59,45.92 142.13,70.78 142.13,82.03 L142.12,82.02 Z"
                id="Shape"
                fill="yellow"
              ></path>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};
