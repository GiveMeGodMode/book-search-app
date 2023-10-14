import { IBook } from "./../../types/IBook";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BookState {
  query: string;
  page: number;
  totalCount: number;
  limit: number;
  orderBy: string;
  category: string;
  books: IBook[];
  isLoading: boolean;
  error: string;
}

const initialState: BookState = {
  query: "",
  category: "",
  page: 1,
  orderBy: "relevance",
  totalCount: 0,
  limit: 30,
  books: [],
  isLoading: false,
  error: "",
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    bookFetching(state) {
      state.isLoading = true;
    },
    bookFetchingSuccess(state, action: PayloadAction<IBook[]>) {
      state.isLoading = false;
      state.error = "";
      state.books.push(...action.payload);
    },
    bookFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    bookChangeQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
      state.books = [];
      state.page = 1;
    },
    bookIncrementPage(state) {
      state.page++;
      state.isLoading = true
    },
    bookSetTotalCount(state, action: PayloadAction<number>) {
      state.totalCount = action.payload;
    },
    bookChangeSort(state, action: PayloadAction<string>) {
      state.orderBy = action.payload;
      state.books = [];
      state.page = 1;
    },
    bookChangeCategory(state, action: PayloadAction<string>) {
      state.category = action.payload;
      state.books = [];
      state.page = 1;
    },
    bookResetBooks(state) {
      state.books = []
    }
  },
});

export default bookSlice.reducer;
export const {
  bookFetching,
  bookFetchingSuccess,
  bookFetchingError,
  bookChangeQuery,
  bookSetTotalCount,
  bookIncrementPage,
  bookChangeSort,
  bookChangeCategory,
  bookResetBooks
} = bookSlice.actions;
