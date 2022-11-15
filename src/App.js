import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav className=" my-10 ">
          <ul className="flex ">
            <li>
              <Link
                to="/"
                className=" font-bold text-blue-500 hover:underline "
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className=" font-bold text-blue-500 hover:underline "
              >
                Login
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
