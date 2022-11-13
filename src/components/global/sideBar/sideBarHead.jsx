import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import classes from "./SideBar.module.css";
import { useContext } from "react";
import { ThemeContext } from "../../../Theme";

const SideBarHead = ({ isCollapsed, onclick }) => {
  const { darkTheme } = useContext(ThemeContext);
  return (
    <div
      className={`${classes.head} ${darkTheme && classes.dark} ${
        isCollapsed ? classes.collapsed : ""
      }`}
      onClick={onclick}
    >
      {!isCollapsed && <h1>ADMINS</h1>}
      <button>
        <MenuOutlinedIcon />
      </button>
    </div>
  );
};

export default SideBarHead;
