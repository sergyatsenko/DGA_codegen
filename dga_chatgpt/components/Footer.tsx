// components/Footer.tsx
import Link from "next/link";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.pageFooter}>
      <div className={styles.pageFooterContainer}>
        <div className={styles.pageFooterLinks}>
          <Link href="/Resources">Resources</Link>
          <Link href="/Utility/Contact">Contact</Link>
          <Link href="/Utility/Terms-and-Conditions">Terms & Conditions</Link>
          <Link href="/Utility/Privacy-Policy">Privacy Policy</Link>
          <Link href="/Utility/General-Welcome">About this Site</Link>
        </div>
        <div id="bottom_0_CopyDiv" className={styles.pageFooterCopy}>
          Copyright &#169; 2011-2024 DGA. All Rights Reserved. Your use of this
          site is bound by the terms and conditions set forth by the Directors
          Guild of America.
        </div>
      </div>
    </div>
  );
};

export default Footer;
