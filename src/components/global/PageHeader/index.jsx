import classes from "./Header.module.css";
import { useContext } from "react";
import { ThemeContext } from "../../../Theme";
const PageHeader = ({ title, subTitle }) => {
  const { darkTheme } = useContext(ThemeContext);
  return (
    <div className={`${classes.header} ${darkTheme && classes.dark}`}>
      <h1>{title}</h1>
      <h4>{subTitle}</h4>
    </div>
  );
};

export default PageHeader;
