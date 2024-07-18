import React from "react";
import Link from "next/link";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.pageFooter}>
      <div className={styles.pageFooterContainer}>
        <div className={styles.pageFooterLinks}>
          <Link href="/Resources">
            <span>Resources</span>
          </Link>
          <Link href="/Utility/Contact">
            <span>Contact</span>
          </Link>
          <Link href="/Utility/Terms-and-Conditions">
            <span>Terms & Conditions</span>
          </Link>
          <Link href="/Utility/Privacy-Policy">
            <span>Privacy Policy</span>
          </Link>
          <Link href="/Utility/General-Welcome">
            <span>About this Site</span>
          </Link>
        </div>
        <div className={styles.pageFooterCopy}>
          Copyright © 2011-2024 DGA. All Rights Reserved. Your use of this site
          is bound by the terms and conditions set forth by the Directors Guild
          of America.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
