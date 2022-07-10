import React, { useState } from "react";

import useTable from "../../hooks/useTable";
import styles from "./Table.module.css";
import TableFooter from "./TableFooter";

const Table = ({ data, rowsPerPage }) => {
  const [page, setPage] = useState(1);
  const { currentRowData, range } = useTable(data, page, rowsPerPage);
  return (
    <>
      <table className={styles.table}>
        <thead className={styles.tableRowHeader}>
          <tr>
            <th className={styles.tableHeader}>User Id</th>
            <th className={styles.tableHeader}>Id</th>
            <th className={styles.tableHeader}>Title</th>
            <th className={styles.tableHeader}>Body</th>
            <th className={styles.tableHeader}>Comment Count</th>
          </tr>
        </thead>
        <tbody>
          {currentRowData.map((el) => (
            <tr className={styles.tableRowItems} key={el.id}>
              <td className={styles.tableCell}>{el.userId}</td>
              <td className={styles.tableCell}>{el.id}</td>
              <td className={styles.tableCell}>{el.title}</td>
              <td className={styles.tableCell}>{el.body}</td>
              <td className={styles.tableCell}>{el.commentCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <TableFooter range={range} currentRowData={currentRowData} setPage={setPage} page={page} />
    </>
  );
};

export default Table;
