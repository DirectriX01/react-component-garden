import { useState } from 'react';
function useSort(data, config) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortColumn, setSortColumn] = useState(null);

  const handleClick = (label) => {
    if (sortOrder && sortColumn !== label) {
      setSortOrder('asc');
      setSortColumn(label);
      return;
    }
    if (sortOrder == null) {
      setSortOrder('asc');
      setSortColumn(label);
    } else if (sortOrder === 'asc') {
      setSortOrder('desc');
      setSortColumn(label);
    } else {
      setSortOrder(null);
      setSortColumn(null);
    }
  };

  let sortedData = data;
  if (sortOrder && sortColumn) {
    const { sortValue } = config.find((header) => header.label === sortColumn);
    sortedData = [...data].sort((a, b) => {
      let aValue = sortValue(a);
      let bValue = sortValue(b);
      let orderofSort = sortOrder === 'asc' ? 1 : -1;

      if (typeof aValue === 'string') {
        return aValue.localeCompare(bValue) * orderofSort;
      } else {
        return (aValue - bValue) * orderofSort;
      }
    });
  }

  return {
    sortedData,
    sortOrder,
    sortColumn,
    setSortCol: handleClick,
  };
}

export default useSort;
