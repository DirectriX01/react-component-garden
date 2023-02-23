import { Fragment } from 'react';

const Table = ({ data, config, keyFn }) => {
  const renderedRows = data.map((fruit) => {
    const renderedCells = config.map((header) => {
      return (
        <td className="px-6 py-4 whitespace-nowrap" key={header.label}>
          {header.render(fruit)}
        </td>
      );
    });

    return (
      <tr className="border-b" key={keyFn(fruit)}>
        {renderedCells}
      </tr>
    );
  });

  const rendereredHeaders = config.map((header) => {
    if (header.header)
      return <Fragment key={header.label}>{header.header()}</Fragment>;
    return (
      <th
        className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"
        key={header.label}
      >
        {header.label}
      </th>
    );
  });

  return (
    <div class="flex flex-col">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200 ">
              <thead class="bg-gray-100">
                <tr className="border-b-2">{rendereredHeaders}</tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                {renderedRows}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
