import React from "react";
import Link from "next/link";
import styles from "./HeaderLinks.module.scss";

const HeaderLinks: React.FC = () => {
  return (
    <div className={styles.headerLinks}>
      <div className={styles.headerLinksContainer}>
        <Link href="/" className={styles.emblemLogo}>
          Directors Guild of America
        </Link>

        <div className={styles.btnRight}>
          <button
            id="header_0_LoginStatus1"
            className={styles.btnAutoBttn}
            // onClick={() => {
            //   // Implement sign out functionality here
            //   console.log("Sign Out clicked");
            // }}
          >
            Sign Out
          </button>
        </div>

        <div className={styles.welcomeLinks}>
          <Link href="/Account/Dues">Report Earnings & Pay Dues</Link>
          <Link href="/Account/Income">Review Residuals & Earnings</Link>
          <Link href="/Account/Availability">Availability</Link>
          <Link href="/Account/ReportWork">Report Work</Link>
          <Link href="/Account/Settings">Account Settings</Link>
        </div>
      </div>

      <div
        id="header_0_SuspendedMemberAlert"
        className={styles.memberAlertContainer}
      >
        <div className={styles.memberAlertText}>
          Your membership is Suspended. Click on the Dues link, above, or
          contact your Dues Representative to resolve this issue.
        </div>
      </div>
    </div>
  );
};

export default HeaderLinks;
