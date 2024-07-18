// SearchResults.tsx
import React from "react";
import Link from "next/link";
import styles from "./SearchResults.module.scss";

const SearchResults: React.FC = () => {
  return (
    <div className={styles.innerContentMain}>
      <div className={styles.searchBox}>{/* Search box content */}</div>
      <div className={styles.greyBox}>{/* Search display content */}</div>
      <div className={styles.resultsSummary}>
        {/* Results summary content */}
      </div>
      <div className={styles.searchResults}>
        <div className={styles.tickerResults}>
          {/* Generate 10 result items */}
          {[...Array(10)].map((_, index) => (
            <div key={index} className={styles.resultFrame}>
              <div className={styles.resultRow}>
                <div className={styles.resultCellImage}>
                  <Link href="/" className={styles.itemHeader}>
                    <img src="/placeholder-image.jpg" alt="Result image" />
                  </Link>
                </div>
                <div className={styles.resultCellContent}>
                  <div className={styles.resultRow}>
                    <div className={styles.itemCategory}>Category</div>
                  </div>
                  <div className={styles.resultRow}>
                    <div className={styles.itemTitle}>
                      <Link href="/" className={styles.itemHeader}>
                        Result Title
                      </Link>
                    </div>
                  </div>
                  <div className={styles.resultRow}>
                    <div className={styles.itemQuote}>
                      Result quote or description...
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.searchPaging}>{/* Pagination content */}</div>
    </div>
  );
};

export default SearchResults;
