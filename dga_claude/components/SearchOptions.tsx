import React from "react";
import styles from "./SearchOptions.module.scss";

const SearchOptions: React.FC = () => {
  return (
    <div className={styles.innerContentSide}>
      <div className={styles.greyBox}>
        <div className={styles.boxContentSection}>
          <div className={styles.rightContentSection}>
            <div className={styles.sectionHeader}>Search</div>
            <div className={styles.sectionBody}>
              <div className={styles.filterOptions}>
                <div className={styles.formLegend}>
                  Select from the Categories below to help refine your search.
                </div>
              </div>
              <div className={styles.coveoHierarchicalFacet}>
                <div className={styles.coveoFacetHeader}>
                  <div className={styles.coveoFacetHeaderTitleSection}>
                    <div className={styles.coveoIconCustom}></div>
                    <div className={styles.coveoFacetHeaderTitle}>
                      CATEGORY FILTERS
                    </div>
                  </div>
                  <div className={styles.coveoFacetHeaderSettingsSection}>
                    <div className={styles.coveoFacetHeaderEraser}>
                      <span className={styles.coveoIcon}></span>
                    </div>
                  </div>
                </div>
                <ul className={styles.facetList}>
                  {[
                    { caption: "Guild News", count: 624 },
                    { caption: "Press Releases", count: 918 },
                    { caption: "Membership News", count: 380 },
                    { caption: "DGA Quarterly", count: 547 },
                    { caption: "Recent Events", count: 1978 },
                    { caption: "Upcoming Screenings", count: 13 },
                    { caption: "Upcoming Events", count: 5 },
                    { caption: "Meetings", count: 14 },
                    { caption: "Councils", count: 92 },
                    { caption: "Committees", count: 44 },
                    { caption: "Deal Memos & Agreements", count: 22 },
                    { caption: "Rates", count: 10 },
                    { caption: "Employers", count: 10 },
                    { caption: "Resources", count: 18 },
                    { caption: "Creative Rights", count: 10 },
                    { caption: "Initiatives", count: 25 },
                    { caption: "Awards", count: 1204 },
                    { caption: "Others", count: 66 },
                    { caption: "Foreign Levies", count: 7 },
                    { caption: "Theaters", count: 9 },
                    { caption: "Departments", count: 25 },
                    { caption: "Visual History", count: 237 },
                    { caption: "Leaders", count: 1 },
                    { caption: "Photos - Events", count: 12041 },
                    { caption: "Photos - News", count: 3974 },
                  ].map((item, index) => (
                    <li key={index} className={styles.coveoFacetValue}>
                      <div className={styles.coveoFacetValueLabelWrapper}>
                        <span className={styles.coveoFacetValueCount}>
                          {item.count}
                        </span>
                        <span className={styles.coveoFacetValueCaption}>
                          {item.caption}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={styles.advancedSearchOptions}>
              Advanced Search Options
            </div>
            <div className={styles.infoLink}>
              <a href="/The-Guild/Members.aspx" className={styles.searchLinks}>
                Search Members by Name/Member Directory
              </a>
              <a
                href="/Employers/EmployersSearch.aspx"
                className={styles.searchLinks}
              >
                Search Members by Category, Region, Eligibility & More
              </a>
              <a href="/Awards/Explore.aspx" className={styles.searchLinks}>
                Search DGA Award Winners and Nominees
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchOptions;
