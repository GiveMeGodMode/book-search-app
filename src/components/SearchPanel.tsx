import { useState } from "react";
import { Button } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { bookChangeCategory, bookChangeQuery, bookChangeSort } from "../store/reducers/BookSlice";
import MySelect from "./MySelect";
import SearchInput from "./SearchInput";
import {useNavigate} from 'react-router-dom';

const SearchPanel = () => {
  const [text, setText] = useState("");
  const {orderBy, query, category} = useAppSelector(state => state.bookReducer)
  const dispatch = useAppDispatch();
  const navigate = useNavigate()

  const onHandleQuery = () => {
    if (query !== text) {
      navigate('book-search-service/')
    dispatch(bookChangeQuery(text));
    }
  };
  const onChangeOrderBy = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(bookChangeSort(e.target.value))
  }
  const onChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(bookChangeCategory(e.target.value))
  }
  return (
    <>
      <div className="search-block">
        <SearchInput
          onChangeQuery={onHandleQuery}
          value={text}
          setValue={setText}
          placeholder="enter name of the book"
        />
        <Button onClick={onHandleQuery} variant="primary">
          Search
        </Button>
      </div>
      <div className="search-filters">
        <MySelect
          onChange={onChangeOrderBy}
          name="Sorting by"
          value={orderBy}
          options={[
            { value: "relevance", name: "relevance" },
            { value: "newest", name: "newest" },
          ]}
        />
        <MySelect
        onChange={onChangeCategory}
          name="Categories"
          value={category}
          options={[
            { value: "", name: "all" },
            { value: "art", name: "art" },
            { value: "biography", name: "biography" },
            { value: "computers", name: "computers" },
            { value: "history", name: "history" },
            { value: "medical", name: "medical" },
            { value: "poetry", name: "poetry" },
          ]}
        />
      </div>
    </>
  );
};

export default SearchPanel;
