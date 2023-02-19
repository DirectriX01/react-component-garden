import Table from './table';
import { GoArrowSmallDown, GoArrowSmallUp } from 'react-icons/go';
import useSort from '../hooks/use-sort';

const SortableTable = (props) => {
  const { data, config } = props;
  const { sortedData, sortOrder, sortColumn, setSortCol } = useSort(
    data,
    config
  );

  const updatedConfig = config.map((header) => {
    if (header.sortValue) {
      return {
        ...header,
        header: () => (
          <th
            className="cursor-pointer hover:bg-gray-100"
            onClick={() => setSortCol(header.label)}
          >
            <div className="flex items-center">
              {header.label}
              {getIcons(header.label, sortColumn, sortOrder)}
            </div>
          </th>
        ),
      };
    } else {
      return header;
    }
  });

  return <Table {...props} data={sortedData} config={updatedConfig} />;
};

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return (
      <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    );
  }

  if (sortOrder === null) {
    return (
      <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    );
  } else if (sortOrder === 'asc') {
    return (
      <div>
        <GoArrowSmallUp />
      </div>
    );
  } else if (sortOrder === 'desc') {
    return (
      <div>
        <GoArrowSmallDown />
      </div>
    );
  }
}

export default SortableTable;
