import BookShow from './BookShow';
import useBookContext from '../hooks/useBookContext';

function BookList() {
  const {books} = useBookContext();

  const renderedBooks = books.map((e) => {
    return (
        <BookShow key={e.id} book={e} />
    );
  });

  return <div className="book-list" >{renderedBooks}</div>;
}

export default BookList;
