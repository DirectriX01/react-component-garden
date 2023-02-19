import { Fragment } from 'react';

const Table = ({ data, config, keyFn }) => {
  const renderedRows = data.map((fruit) => {
    const renderedCells = config.map((header) => {
      return (
        <td className="p-3" key={header.label}>
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
      <th className="p-3" key={header.label}>
        {header.label}
      </th>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{rendereredHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
};

export default Table;
