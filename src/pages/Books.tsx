import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { bookIncrementPage, bookResetBooks } from "../store/reducers/BookSlice";
import Loading from "../components/Loading";
import { useEffect } from "react";
import { fetchBooks } from "../store/actionCreators/bookActionCreators";
import BooksList from "../components/forBooksPage/BooksList";
import CountBooks from "../components/forBooksPage/CountBooks";
import BooksBtn from "../components/forBooksPage/BooksBtn";

const Books = () => {
  const {
    books,
    error,
    isLoading,
    totalCount,
    page,
    limit,
    query,
    orderBy,
    category,   
  } = useAppSelector((state) => state.bookReducer);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(bookIncrementPage());
  };
  useEffect(() => {
    return () => {
        dispatch(bookResetBooks())
    }
  },[])
  useEffect(() => {
    if (query) dispatch(fetchBooks(query, page, limit, orderBy, category));
  }, [query, page, orderBy, category]);

  if (!query) {
    return <h1 className="text-center">start looking for some book!</h1>;
  }

  if (error) {
    return <h1 className="text-center">{error}</h1>;
  }

  return (
    <div className="books mb-4">
      <div className="container">
        <div className="books__wrapper">
            <CountBooks totalCount={totalCount} />
            <BooksList books={books} />
            <BooksBtn
              booksLength={books.length}
              handleClick={handleClick}
              isLoading={isLoading}
              limit={limit}
              page={page}
              totalCount={totalCount}
            />
            {isLoading && (
              <div className="app__loading">
                <Loading />
              </div>
            )}
        </div >
      </div>
    </div>
  );
};

export default Books;
