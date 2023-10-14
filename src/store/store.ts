import { combineReducers } from "@reduxjs/toolkit";
import  bookReducer from './reducers/BookSlice'
import  singleBookReducer from './reducers/SingleBookSlice'
import { configureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
    bookReducer,
    singleBookReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
