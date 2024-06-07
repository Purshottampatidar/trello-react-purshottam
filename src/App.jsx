
import BoardDetails from "./Components/BoardComponents/BoardDetails";
import HomePage from "./Components/HomePage";
import Header from "./Components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/boards/:boardId" element={<BoardDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
