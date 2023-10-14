import BookService from "../../services/bookService";
import { AppDispatch } from "../store";
import {
  singleBookFetching,
  singleBookFetchingError,
  singleBookFetchingSuccess,
} from "../reducers/SingleBookSlice";

export const fetchSingleBook =
  (id: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(singleBookFetching());
      const {
        data: {
          id: string,
          volumeInfo: {
            title,
            authors = [],
            description,
            categories = [],
            imageLinks = {thumbnail: 'http://books.google.com/books/publisher/content?id=Z_9PCgAAQBAJ&printsec=frontcover&img=1&zoom=6&edge=curl&imgtk=AFLRE72q1LiyimoWzwsxM3wSpxdEtafrvL8TvP_E6s7vsHMfJb0VXqHeocseynLOMGGcNv8Ae6Jon0s0bdqL75BxOD13S9HFddm7bSDAVUKwDATrnkMjt3rFn3_WqkxxrCoHAtJv0_Wc&source=gbs_api'},
          },
        },
      } = await BookService.getBookForId(id);
      dispatch(
        singleBookFetchingSuccess({
          id,
          title,
          authors,
          description,
          categories,
          photoURL: imageLinks.thumbnail,
        })
      );
    } catch (error) {
      let errorMessage =
        error instanceof Error
          ? error.message
          : "Произошла ошибка при загрузке данных";
      dispatch(singleBookFetchingError(errorMessage));
    }
  };
