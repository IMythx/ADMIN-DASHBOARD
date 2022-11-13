import classes from "./SideBar.module.css";
import { useContext } from "react";
import { ThemeContext } from "../../../Theme";
import { NavLink } from "react-router-dom";
const MenuItem = ({ isCollapsed, name, icon, to }) => {
  const { darkTheme } = useContext(ThemeContext);
  return (
    <li className={`${classes["menu-item"]} ${darkTheme && classes.dark}`}>
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? classes.active : "")}
      >
        {icon}
        {!isCollapsed && <p>{name}</p>}
      </NavLink>
    </li>
  );
};

export default MenuItem;
