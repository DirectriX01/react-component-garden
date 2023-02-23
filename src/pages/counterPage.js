import Buttons from '../components/Button';
import { useReducer } from 'react';
import Panel from '../components/panel';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 };
    case 'DECREMENT':
      return { ...state, counter: state.counter - 1 };
    case 'CHANGE':
      return { ...state, valueToAdd: action.value };
    case 'SUBMIT':
      return {
        ...state,
        counter: state.counter + state.valueToAdd,
        valueToAdd: 0,
      };
    default:
      return state;
  }
};

const useCounter = ({ initialValue }) => {
  // const [counter, setCounter] = useState(initialValue);
  // const [valueToAdd, setValueToAdd] = useState(0);
  const [state, dispatch] = useReducer(reducer, {
    counter: initialValue,
    valueToAdd: 0,
  });

  const incrementCounter = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrementCounter = () => {
    dispatch({ type: 'DECREMENT' });
  };

  const handleChange = (e) => {
    // setValueToAdd(e.target.value);
    let value = parseInt(e.target.value) || 0;
    dispatch({ type: 'CHANGE', value: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'SUBMIT' });
  };
  return (
    <Panel className="m-3">
      <h1 className="text-lg">Counter is : {state.counter}</h1>
      <div className="flex flex-row">
        <Buttons
          onClick={incrementCounter}
          className="hover:bg-blue-100 transition-colors duration-500 ease-in-out"
        >
          Increment
        </Buttons>
        <Buttons
          onClick={decrementCounter}
          className="hover:bg-blue-100 transition-colors duration-500 ease-in-out"
        >
          Decrement
        </Buttons>
      </div>

      <form onSubmit={handleSubmit}>
        <label> Enter a number to increment or decrement by: </label>
        <input
          type="number"
          value={state.valueToAdd || ''}
          onChange={handleChange}
          className="border-2 border-black rounded-md p-1 m-1"
        />
        <Buttons className="inline-block relative bg-gray-300 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded">
          Submit
        </Buttons>
      </form>
    </Panel>
  );
};

export default useCounter;
