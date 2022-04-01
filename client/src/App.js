import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomeDisplay from "./Displays/HomeDisplay";
import CartDisplay from "./Displays/CartDisplay";
import RegisterDisplay from "./Displays/RegisterDisplay";
import LogInDisplay from "./Displays/LogInDisplay";




function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeDisplay />} />
          <Route path="/cart" element={<CartDisplay />} />
          <Route path="/register" element={<RegisterDisplay />} />
          <Route path="/login" element={<LogInDisplay />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
