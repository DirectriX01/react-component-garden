import { useState } from 'react';
import Panel from '../components/panel';

function SearchPage() {
  //dummy array of birds of every alphabet and a color for each
  let birds = [
    { name: 'Albatross', color: 'bg-gray-100' },
    { name: 'Bald Eagle', color: 'bg-yellow-100' },
    { name: 'Cardinal', color: 'bg-red-100' },
    { name: 'Dove', color: 'bg-gray-300' },
    { name: 'Eagle', color: 'bg-yellow-100' },
    { name: 'Flamingo', color: 'bg-pink-100' },
    { name: 'Gull', color: 'bg-gray-100' },
    { name: 'Hawk', color: 'bg-orange-100' },
    { name: 'Ibis', color: 'bg-purple-100' },
    { name: 'Jay', color: 'bg-blue-100' },
    { name: 'Kingfisher', color: 'bg-teal-100' },
    { name: 'Lark', color: 'bg-yellow-300' },
    { name: 'Magpie', color: 'bg-gray-100' },
    { name: 'Nightingale', color: 'bg-pink-300' },
    { name: 'Owl', color: 'bg-indigo-100' },
    { name: 'Pelican', color: 'bg-gray-100' },
    { name: 'Quail', color: 'bg-red-100' },
    { name: 'Robin', color: 'bg-red-100' },
    { name: 'Sparrow', color: 'bg-green-100' },
    { name: 'Toucan', color: 'bg-yellow-100' },
    { name: 'Umbrellabird', color: 'bg-yellow-100' },
    { name: 'Vulture', color: 'bg-gray-100' },
    { name: 'Woodpecker', color: 'bg-red-100' },
    { name: 'Xenops', color: 'bg-green-300' },
    { name: 'Yellowhammer', color: 'bg-yellow-100' },
    { name: 'Zebra Finch', color: 'bg-gray-100' },
  ];

  let [searchTerm, setSearchTerm] = useState('');
  let [searchResults, setSearchResults] = useState([]);

  function handleChange(event) {
    let term = event.target.value;
    setSearchTerm(term);
    if (!term) {
      setSearchResults([]);
      return;
    }
    let results = birds.filter((e) => {
      let bird = e.name;
      return bird.toLowerCase().includes(term.toLowerCase());
    });
    setSearchResults(results);
  }

  const renderedResults = searchResults.map((result) => {
    let classes = `px-4 py-2 hover:bg-gray-100`;
    return (
      <li key={result.name} className={classes}>
        {result.name}
      </li>
    );
  });

  return (
    <Panel>
      <div className="relative">
        <input
          value={searchTerm}
          onChange={handleChange}
          type="text"
          className="w-full py-2 pl-4 pr-12 text-gray-900 placeholder-gray-100 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-100"
          placeholder="Search for a bird"
        ></input>
        {searchResults.length > 0 && (
          <ul className="absolute z-10 w-full mt-1 overflow-auto bg-white border border-gray-300 rounded-md shadow-lg max-h-48">
            {renderedResults}
          </ul>
        )}
      </div>
    </Panel>
  );
}

export default SearchPage;
