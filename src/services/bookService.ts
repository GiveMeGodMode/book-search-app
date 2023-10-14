import axios, { AxiosRequestConfig } from "axios";

const baseURL = "https://www.googleapis.com/books/v1/volumes";

export default class BookService {
  static async getBooks(
    query: string,
    page = 1,
    limit = 30,
    orderBy: string,
    category: string
  ) {
    return await axios(baseURL, {
      params: {
        q: "+intitle:" + query + (category && "+subject:" + category),
        projection: "lite",
        maxResults: limit,
        startIndex: limit * (page - 1),
        orderBy,
        key: process.env.KEY,
      },
    } as AxiosRequestConfig<any>);
  }
  static async getBookForId(id: string) {
    return await axios(baseURL + `/${id}`);
  }
}
