import { createContext, useState } from "react";

const BooksContext = createContext();

let Provider = ({ children }) => {

    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        console.log('fetching books')
      const newBooks = await fetch('http://localhost:3001/books').then((response) =>
        response.json()
      );
      setBooks(newBooks);
    };


    const createBook = async (title) => {
        const updatedBooks = await fetch('http://localhost:3001/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title }),
        }).then((response) => response.json());
        // setBooks(updatedBooks);
        setBooks([...books, updatedBooks]);
    };
      
      
    const editBookById = (id, newTitle) => {
        // PUT request to update the book
        const items = fetch(`http://localhost:3001/books/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title: newTitle }),
        });

        // const updatedBooks = { ...books, items };
        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return { ...book, title: newTitle };
            }
            return book;
        });
        console.log(updatedBooks);
        setBooks(updatedBooks);
    };
    
    const deleteBookById = (id) => {
        // DELETE request to delete the book
        fetch(`http://localhost:3001/books/${id}`, {
            method: 'DELETE',
        });
        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        });

        setBooks(updatedBooks);
    };

    const valueToShare = {
        books,
        fetchBooks,
        createBook,
        editBookById,
        deleteBookById,
    };
    

    return (
        <BooksContext.Provider value={valueToShare}>
            {children}
        </BooksContext.Provider>
    );
};

export default BooksContext;
export { Provider };
