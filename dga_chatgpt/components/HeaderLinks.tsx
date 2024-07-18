import Link from "next/link";
import styles from "./HeaderLinks.module.scss";

const HeaderLinks = () => {
  return (
    <div className={styles.headerLinksContainer}>
      <Link href="/" className={styles.emblemLogo}>
        Directors Guild of America
      </Link>
      <div className={styles.btnRight}>
        <Link
          href="/signout"
          className={`${styles.btn} ${styles.autoBttn}`}
          id="header_0_LoginStatus1"
        >
          Sign Out
        </Link>
      </div>
      <div className={styles.welcomeLinks}>
        <Link href="/Account/Dues" className={styles.link}>
          Report Earnings & Pay Dues
        </Link>
        <Link href="/Account/Income" className={styles.link}>
          Review Residuals & Earnings
        </Link>
        <Link href="/Account/Availability" className={styles.link}>
          Availability
        </Link>
        <Link href="/Account/ReportWork" className={styles.link}>
          Report Work
        </Link>
        <Link href="/Account/Settings" className={styles.link}>
          Account Settings
        </Link>
      </div>
    </div>
  );
};

export default HeaderLinks;
