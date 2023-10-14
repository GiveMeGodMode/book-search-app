import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import { Routes, Route, Navigate } from "react-router-dom";
import Books from "./pages/Books";
import BookId from "./pages/BookId";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path="book-search-service">
            <Route index element={<Books />} />
            <Route path="book/:id" element={<BookId />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route >
      </Routes>
    </div>
  );
}

export default App;
