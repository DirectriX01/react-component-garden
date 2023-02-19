import React from 'react';
import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';
function Accordion({ items }) {
  // create a state for activeIndex with items.length zeros
  const [activeIndex, setActiveIndex] = useState(
    Array(items.length).fill(false)
  );
  // for outLine declaration of onClick we have to use arrow function
  const onTitleClick = (index) => {
    if (index === activeIndex[index]) {
      // if activeIndex is clicked again, set it to false
      let temp = [...activeIndex];
      temp[index] = !temp[index];
      setActiveIndex(temp);
    } else {
      let temp = [...activeIndex];
      temp[index] = !temp[index];
      setActiveIndex(temp);
    }
  };
  // div onClick={() => onTitleClick(index)}

  const renderedItems = items.map((item, index) => {
    const active = activeIndex[index];
    let icon = active ? <GoChevronDown /> : <GoChevronLeft />;
    // span the icon
    icon = <span className="text-2xl">{icon}</span>;
    return (
      <div key={item.id}>
        <div
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => onTitleClick(index)}
        >
          {item.title}
          {icon}
        </div>
        {active && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderedItems}</div>;
}

export default Accordion;
