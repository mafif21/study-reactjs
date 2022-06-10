import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Teams from "./teams";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}>
          <Route path="teams" element={<Teams />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
