import Book from "./Book";
import { IBook } from "../../types/IBook";

type Props = {
  books: Array<IBook>
}

const BooksList = ({books}: Props) => {

  return (
    <div className="book-list row justify-content-center gap-3 mb-4">
          {books.map((book) => (
            <Book
              key={book.id}
              photoURL={book.photoURL}
              title={book.title}
              authors={book.authors}
              id={book.id}
              categories={book.categories}
            />
          ))}
        </div>
  );
};

export default BooksList;
