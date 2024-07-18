import Link from "next/link";
import styles from "./SubHeader.module.scss";

const SubHeader = () => {
  return (
    <div className={styles.subHeaderInnerContainer}>
      <ul className={styles.mainMenu}>
        <li>
          <div>
            <Link href="/The-Guild" className={styles.link}>
              The Guild
            </Link>
          </div>
          <ul>
            <li>
              <Link href="/The-Guild/Members" className={styles.subLink}>
                Member Directory
              </Link>
            </li>
            <li>
              <Link href="/The-Guild/Leaders" className={styles.subLink}>
                Leaders
              </Link>
            </li>
            <li>
              <Link href="/The-Guild/DGA-Staff-List" className={styles.subLink}>
                DGA Staff
              </Link>
            </li>
            <li>
              <Link href="/The-Guild/Committees" className={styles.subLink}>
                Committees
              </Link>
            </li>
            <li>
              <Link href="/The-Guild/Councils" className={styles.subLink}>
                Councils
              </Link>
            </li>
            <li>
              <Link href="/The-Guild/Departments" className={styles.subLink}>
                Departments
              </Link>
            </li>
            <li>
              <Link href="/The-Guild/Diversity" className={styles.subLink}>
                Diversity & Inclusion
              </Link>
            </li>
            <li>
              <Link href="/The-Guild/Voting" className={styles.subLink}>
                Online Voting
              </Link>
            </li>
            <li>
              <Link href="/The-Guild/Theaters" className={styles.subLink}>
                Theaters
              </Link>
            </li>
            <li>
              <Link href="/The-Guild/History" className={styles.subLink}>
                History
              </Link>
            </li>
            <li>
              <Link
                href="/The-Guild/Sustainable-Future-Pro-Tips"
                className={styles.subLink}
              >
                Sustainable Future Pro-Tips
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <div>
            <Link href="/Employers" className={styles.link}>
              Employers
            </Link>
          </div>
          <ul>
            <li>
              <Link
                href="/Employers/BecomingSignatory"
                className={styles.subLink}
              >
                Becoming Signatory
              </Link>
            </li>
            <li>
              <Link href="/Employers/DealMemos" className={styles.subLink}>
                Deal Memos & Reports Compliance Forms
              </Link>
            </li>
            <li>
              <Link
                href="/Employers/EmployersSearch"
                className={styles.subLink}
              >
                Employment Eligibility Search
              </Link>
            </li>
            <li>
              <Link
                href="/Employers/AvailAndProdLists"
                className={styles.subLink}
              >
                Availability and Production Lists
              </Link>
            </li>
            <li>
              <Link
                href="/Employers/QualificationLists"
                className={styles.subLink}
              >
                Qualification Lists
              </Link>
            </li>
            <li>
              <Link
                href="/Employers/SignatoryDatabase"
                className={styles.subLink}
              >
                Signatory Confirmation Database
              </Link>
            </li>
            <li>
              <Link
                href="/Employers/First-Time-Episodic-Orientation-Program"
                className={styles.subLink}
              >
                First-Time Episodic Director Orientation Program
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <div>
            <span className={styles.menuEmployers}>Awards</span>
          </div>
          <ul>
            <li>
              <Link href="/Awards/Annual" className={styles.subLink}>
                76th Annual DGA Awards
              </Link>
            </li>
            <li>
              <Link href="/Awards/Screeners" className={styles.subLink}>
                DGA Awards Screeners FAQ
              </Link>
            </li>
            <li>
              <Link href="/Awards/Explore" className={styles.subLink}>
                Winner and Nominee Search
              </Link>
            </li>
            <li>
              <Link href="/Awards/History" className={styles.subLink}>
                DGA Awards History
              </Link>
            </li>
            <li>
              <Link href="/Awards/Students" className={styles.subLink}>
                Student Film Awards
              </Link>
            </li>
            <li>
              <Link href="/Awards/Honors" className={styles.subLink}>
                DGA Honors
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <div>
            <Link href="/Initiatives" className={styles.link}>
              Initiatives
            </Link>
          </div>
          <ul>
            <li>
              <Link
                href="/Initiatives/Production-Incentives"
                className={styles.subLink}
              >
                Production Incentives
              </Link>
            </li>
            <li>
              <Link
                href="/Initiatives/Protecting-Creative-Content"
                className={styles.subLink}
              >
                Protecting Creative Content
              </Link>
            </li>
            <li>
              <Link
                href="/Initiatives/Safety-Issues"
                className={styles.subLink}
              >
                Safety Issues
              </Link>
            </li>
            <li>
              <Link
                href="/Initiatives/Additional-Initiatives"
                className={styles.subLink}
              >
                Additional Initiatives
              </Link>
            </li>
            <li>
              <Link
                href="/Initiatives/International"
                className={styles.subLink}
              >
                International
              </Link>
            </li>
            <li>
              <Link href="/Initiatives/PAC" className={styles.subLink}>
                DGA PAC
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <div>
            <span className={styles.menuEmployers}>Craft</span>
          </div>
          <ul>
            <li>
              <Link href="/Craft/Director-QA" className={styles.subLink}>
                Director Q&A
              </Link>
            </li>
            <li>
              <Link href="/Craft/VisualHistory" className={styles.subLink}>
                Visual History
              </Link>
            </li>
            <li>
              <Link href="/Craft/80th_Anniversary" className={styles.subLink}>
                80th Anniversary
              </Link>
            </li>
            <li>
              <Link href="/Craft/75th-Anniversary" className={styles.subLink}>
                75th Anniversary
              </Link>
            </li>
            <li>
              <Link href="/Craft/Podcast" className={styles.subLink}>
                Podcast
              </Link>
            </li>
            <li>
              <Link href="/Craft/DGAQ" className={styles.subLink}>
                DGA Quarterly
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default SubHeader;
