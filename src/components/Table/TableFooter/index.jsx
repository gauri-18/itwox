import React, { useEffect } from "react";

import styles from "./TableFooter.module.css";

const TableFooter = ({ range, setPage, page, currentRowData }) => {
  useEffect(() => {
    if (currentRowData.length < 1 && page !== 1) {
      setPage(page - 1);
    }
  }, [currentRowData, page, setPage]);
  return (
    <div className={styles.tableFooter}>
      {range.map((el, index) => (
        <button
          key={index}
          className={`${styles.button} ${
            page === el ? styles.activeButton : styles.inactiveButton
          }`}
          onClick={() => setPage(el)}
        >
          {el}
        </button>
      ))}
    </div>
  );
};

export default TableFooter;
