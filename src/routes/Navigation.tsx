import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { ShoppingPage } from "../02-component-patterns/pages/ShoppingPage";
import logo from "../logo.svg";

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React logo" />
          <ul>
            <li>
              <NavLink end to="/shopping">
                ShoppingPage
              </NavLink>
            </li>
            <li>
              <NavLink end to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink end to="/users">
                Users
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/users" element={<h1>Users</h1>} />
          <Route path="/shopping" element={<ShoppingPage />} />
        </Routes>
      </div>
    </Router>
  );
};
