import Buttons from '../components/Button';
import { useState } from 'react';
import Panel from '../components/panel';

const useCounter = ({ initialValue }) => {
  const [counter, setCounter] = useState(initialValue);
  const [valueToAdd, setValueToAdd] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  const handleChange = (e) => {
    setValueToAdd(e.target.value);
  };
  return (
    <Panel className="m-3">
      <h1 className="text-lg">Counter is : {counter}</h1>
      <div className="flex flex-row">
        <Buttons onClick={incrementCounter}>Increment</Buttons>
        <Buttons onClick={decrementCounter}>Decrement</Buttons>
      </div>

      <form>
        <label> Enter a number to increment or decrement by: </label>
        <input
          type="number"
          value={valueToAdd}
          onChange={handleChange}
          className="border-2 border-black rounded-md p-1 m-1"
        />
        <Buttons>Submit</Buttons>
      </form>
    </Panel>
  );
};

export default useCounter;
