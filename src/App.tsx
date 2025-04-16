import { Outlet, NavLink } from "react-router";
import { routes } from "./routes";
import "./App.css";

export const App = () => {
  const menuItems = Object.entries(routes).map(([key, menuItem]) => (
    <NavLink key={key} to={menuItem.path} className="menu-item">
      {menuItem.description}
    </NavLink>
  ));

  return (
    <>
      <nav className="menu"> {menuItems} </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};
