import "./App.css";
import HomePage from "./components/user/HomePage";
import SigninPage from "./components/user/SigninPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SigninPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
