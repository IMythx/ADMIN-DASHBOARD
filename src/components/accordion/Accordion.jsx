import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { ThemeContext } from "../../Theme";
import { useContext, useState } from "react";
import classes from "./Accordion.module.css";
const Accordion = ({ title, question }) => {
  const { darkTheme } = useContext(ThemeContext);
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <button
      className={`${classes.accordion} ${darkTheme && classes.dark} ${
        isCollapsed ? classes.collapsed : ""
      }`}
      onClick={() => setIsCollapsed((prev) => !prev)}
    >
      <div>
        {title}
        {isCollapsed ? (
          <KeyboardArrowDownOutlinedIcon />
        ) : (
          <KeyboardArrowUpOutlinedIcon />
        )}
      </div>
      <div>{question}</div>
    </button>
  );
};

export default Accordion;
