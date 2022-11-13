import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import classes from "./TopBar.module.css";
import { useContext, useState, useCallback, useEffect } from "react";
import { ThemeContext } from "../../../Theme";

let tooltipTimer;
const TopBar = () => {
  const { darkTheme, toggleTheme } = useContext(ThemeContext);
  const [tried, setTried] = useState(true);
  const onClickHandler = useCallback(() => {
    toggleTheme();
    tried && tooltipTimer && clearTimeout(tooltipTimer);
    !tried && setTried(true);
  }, [tried]);
  useEffect(() => {
    tooltipTimer = setTimeout(() => {
      setTried(false);
    }, 6000);
  }, []);
  return (
    <div className={`${classes.navbar} ${darkTheme && classes.dark}`}>
      <div className="search">
        <input type="text" placeholder="Search" />
        <button>
          <SearchIcon />
        </button>
      </div>
      <div>
        <button onClick={onClickHandler}>
          {darkTheme ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
          {!tried && <div className={classes.tooltip}>Try Light Mode</div>}
        </button>
        <button>
          <NotificationsOutlinedIcon />
        </button>
        <button>
          <SettingsOutlinedIcon />
        </button>
        <button>
          <PersonOutlinedIcon />
        </button>
      </div>
    </div>
  );
};

export default TopBar;
