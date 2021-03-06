import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Teams from "./teams";
import Blog from "./blog";
import Detail from "./blogDetail";
import Error from "./notFound";
import Login from "./login";
import Dashboard from "./dashboard";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/login">Login</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="about" element={<About />}>
          <Route path="teams" element={<Teams />}></Route>
        </Route>

        <Route path="blog" element={<Blog />}></Route>
        <Route path="blog/:artikelId" element={<Detail />}></Route>
        <Route path="*" element={<Error />}></Route>

        <Route path="login" element={<Login />}></Route>
        <Route path="dashboard" element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
}

export default App;
