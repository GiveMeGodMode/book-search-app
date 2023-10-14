import { IBook } from './../../types/IBook';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SingleBookState = {
  error: string;
  isLoading: boolean;
  book: IBook;
};

const initialState: SingleBookState = {
  isLoading: false,
  error: "",
  book: {
    id: "",
    title: '',
    categories: [],
    authors: [],
    photoURL: '',
    description: '',
  },
};

export const singleBookSlice = createSlice({
  name: "SingleBook",
  initialState,
  reducers: {
    singleBookFetching(state) {
      state.book = {
        id: "",
        title: '',
        categories: [],
        authors: [],
        photoURL: '',
        description: '',
      };
      state.isLoading = true;
    },
    singleBookFetchingSuccess(state, action: PayloadAction<IBook>) {
      state.isLoading = false;
      state.error = "";
      state.book = action.payload;
    },
    singleBookFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default singleBookSlice.reducer;
export const {
  singleBookFetching,
  singleBookFetchingSuccess,
  singleBookFetchingError,
} = singleBookSlice.actions;
