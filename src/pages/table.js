import SortableTable from '../components/sortableTable';

function TablePage() {
  const data = [
    { name: 'Orange', color: 'bg-orange-500', score: 5 },
    { name: 'Apple', color: 'bg-red-500', score: 3 },
    { name: 'Banana', color: 'bg-yellow-500', score: 1 },
    { name: 'Lime', color: 'bg-green-500', score: 4 },
  ];

  const config = [
    {
      label: 'Fruit',
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name,
    },
    {
      label: 'Color',
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>,
    },
    {
      label: 'Score',
      render: (fruit) => fruit.score,
      header: (fruit) => <th className="p-3 m-2 bg-gray-500">Score</th>,
      sortValue: (fruit) => fruit.score,
    },
  ];

  const keyFn = (fruit) => fruit.name;

  return (
    <div>
      <SortableTable keyFn={keyFn} config={config} data={data} />
    </div>
  );
}

export default TablePage;
