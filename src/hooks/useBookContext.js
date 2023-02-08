import BooksContext  from '../context/Books';
import {useContext} from 'react';

function useBookContext () {
  return useContext(BooksContext);
}

export default useBookContext;