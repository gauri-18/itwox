import { useState, useEffect } from "react";

const calculateRange = (data, rowsPerPage) => {
  const range = [];
  const num = Math.ceil(data.length / rowsPerPage);
  for (let i = 1; i <= num; i++) {
    range.push(i);
  }
  return range;
};

const getCurrentRowData = (data, page, rowsPerPage) => {
  return data.slice((page - 1) * rowsPerPage, page * rowsPerPage);
};

const useTable = (data, page, rowsPerPage) => {
  const [tableRange, setTableRange] = useState([]);
  const [currentRowData, setCurrentRowData] = useState([]);

  useEffect(() => {
    const range = calculateRange(data, rowsPerPage);
    setTableRange([...range]);

    const currentRowData = getCurrentRowData(data, page, rowsPerPage);
    setCurrentRowData([...currentRowData]);
  }, [data, setTableRange, page, setCurrentRowData, rowsPerPage]);

  return { currentRowData, range: tableRange };
};

export default useTable;
