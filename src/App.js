import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GenrePage from "./components/GenrePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GenrePage />} />
      </Routes>
    </Router>
  );
}

export default App;
