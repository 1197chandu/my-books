import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GenrePage from "./components/GenrePage";
import BooksPage from "./components/BooksPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GenrePage />} />
        <Route path="/genre/:genre" element={<BooksPage />} />
      </Routes>
    </Router>
  );
}

export default App;
