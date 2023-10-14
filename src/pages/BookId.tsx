import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchSingleBook } from "../store/actionCreators/SingleBookActionCreators";

const BookId = () => {
  const id = useParams().id || "";

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchSingleBook(id));
  }, []);

  const { book, error, isLoading } = useAppSelector(
    (state) => state.singleBookReducer
  );

  if(error) {
    <h1 className="text-center">{error}</h1>
  }

  return (
    <div className="bookId">
      <div className="container">
        <div className="bookId__wrapper  mb-5">
          <div className="bookId__photo">
            <img src={book.photoURL} alt="book photo" />
          </div>
          <div className="bookId__info">
            <div className="bookId__categories mb-4">
            <span className="bookId__evolved">Categories: </span> 
              {book.categories?.join(" ,") || '-'}
            </div>
            <div className="bookId__title fs-2 mb-4">{book.title}</div>
            <div className="bookId__author mb-4">
            <span className="bookId__evolved">Authors : </span>
              {book.authors?.join(", ") || '-'}
            </div>
            <div className="bookId__description"><span className="bookId__evolved">Desrciption :</span> {book.description?.replace(/<[^>]+>/g, '')}</div>
          </div>
        </div>
      </div>
      {isLoading && (
        <div className="app__loading">
          <Loading />
        </div>
      )}
    </div>
  );
};

export default BookId;
