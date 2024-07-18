import React from "react";
import Link from "next/link";
import styles from "./SubHeader.module.scss";

const SubHeader: React.FC = () => {
  return (
    <div className={styles.subHeader}>
      <nav>
        <ul>
          <li>
            <Link href="/The-Guild">
              <span>The Guild</span>
            </Link>
            <ul>
              <li>
                <Link href="/The-Guild/Members">Member Directory</Link>
              </li>
              <li>
                <Link href="/The-Guild/Leaders">Leaders</Link>
              </li>
              <li>
                <Link href="/The-Guild/DGA-Staff-List">DGA Staff</Link>
              </li>
              <li>
                <Link href="/The-Guild/Committees">Committees</Link>
              </li>
              <li>
                <Link href="/The-Guild/Councils">Councils</Link>
              </li>
              <li>
                <Link href="/The-Guild/Departments">Departments</Link>
              </li>
              <li>
                <Link href="/The-Guild/Diversity">Diversity & Inclusion</Link>
              </li>
              <li>
                <Link href="/The-Guild/Voting">Online Voting</Link>
              </li>
              <li>
                <Link href="/The-Guild/Theaters">Theaters</Link>
              </li>
              <li>
                <Link href="/The-Guild/History">History</Link>
              </li>
              <li>
                <Link href="/The-Guild/Sustainable-Future-Pro-Tips">
                  Sustainable Future Pro-Tips
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/Employers">
              <span>Employers</span>
            </Link>
            <ul>
              <li>
                <Link href="/Employers/BecomingSignatory">
                  Becoming Signatory
                </Link>
              </li>
              <li>
                <Link href="/Employers/DealMemos">
                  Deal Memos & Reports Compliance Forms
                </Link>
              </li>
              <li>
                <Link href="/Employers/EmployersSearch">
                  Employment Eligibility Search
                </Link>
              </li>
              <li>
                <Link href="/Employers/AvailAndProdLists">
                  Availability and Production Lists
                </Link>
              </li>
              <li>
                <Link href="/Employers/QualificationLists">
                  Qualification Lists
                </Link>
              </li>
              <li>
                <Link href="/Employers/SignatoryDatabase">
                  Signatory Confirmation Database
                </Link>
              </li>
              <li>
                <Link href="/Employers/First-Time-Episodic-Orientation-Program">
                  First-Time Episodic Director Orientation Program
                </Link>
              </li>
              <li>
                <Link href="/Employers/O1andO2VisaLetters">
                  O-1 and O-2 Visa Consultation Letters
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/Contracts">
              <span>Contracts</span>
            </Link>
            <ul>
              <li>
                <Link href="/Contracts/Agreements">Agreements</Link>
              </li>
              <li>
                <Link href="/Contracts/Rates-2024-to-2025">
                  DGA Rate Cards 2024 - 2025
                </Link>
              </li>
              <li>
                <Link href="/Contracts/Rates-2023-to-2024">
                  DGA Rate Cards 2023 - 2024
                </Link>
              </li>
              <li>
                <Link href="/Contracts/Creative-Rights">Creative Rights</Link>
              </li>
              <li>
                <Link href="/Contracts/Directors-Economic-Rights">
                  Television Director Economic Rights
                </Link>
              </li>
              <li>
                <Link href="/Contracts/Expanded-Post-Production">
                  Expanded Paid Post Production
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <span className={styles.menuEmployers}>News</span>
            <ul>
              <li>
                <Link href="/News/Guild-News">Guild News</Link>
              </li>
              <li>
                <Link href="/News/PressReleases">Press Releases</Link>
              </li>
              <li>
                <Link href="/News/DGAMonthly">DGA Monthly</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/Events">
              <span>Events</span>
            </Link>
          </li>
          <li>
            <span className={styles.menuEmployers}>Awards</span>
            <ul>
              <li>
                <Link href="/Awards/Annual">76th Annual DGA Awards</Link>
              </li>
              <li>
                <Link href="/Awards/Screeners">DGA Awards Screeners FAQ</Link>
              </li>
              <li>
                <Link href="/Awards/Explore">Winner and Nominee Search</Link>
              </li>
              <li>
                <Link href="/Awards/History">DGA Awards History</Link>
              </li>
              <li>
                <Link href="/Awards/Students">Student Film Awards</Link>
              </li>
              <li>
                <Link href="/Awards/Honors">DGA Honors</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/Initiatives">
              <span>Initiatives</span>
            </Link>
            <ul>
              <li>
                <Link href="/Initiatives/Production-Incentives">
                  Production Incentives
                </Link>
              </li>
              <li>
                <Link href="/Initiatives/Protecting-Creative-Content">
                  Protecting Creative Content
                </Link>
              </li>
              <li>
                <Link href="/Initiatives/Safety-Issues">Safety Issues</Link>
              </li>
              <li>
                <Link href="/Initiatives/Additional-Initiatives">
                  Additional Initiatives
                </Link>
              </li>
              <li>
                <Link href="/Initiatives/International">International</Link>
              </li>
              <li>
                <Link href="/Initiatives/PAC">DGA PAC</Link>
              </li>
            </ul>
          </li>
          <li>
            <span className={styles.menuEmployers}>Craft</span>
            <ul>
              <li>
                <Link href="/Craft/Director-QA">Director Q&A</Link>
              </li>
              <li>
                <Link href="/Craft/VisualHistory">Visual History</Link>
              </li>
              <li>
                <Link href="/Craft/80th_Anniversary">80th Anniversary</Link>
              </li>
              <li>
                <Link href="/Craft/75th-Anniversary">75th Anniversary</Link>
              </li>
              <li>
                <Link href="/Craft/Podcast">Podcast</Link>
              </li>
              <li>
                <Link href="/Craft/DGAQ">DGA Quarterly</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SubHeader;
