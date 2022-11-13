import ProgressCircle from "./ProgressCircle";
import classes from "./stateBox.module.css";
import { ThemeContext } from "../../Theme";
import { useContext } from "react";

const StateBox = ({ title, subTitle, progress, increase, icon }) => {
  const { darkTheme } = useContext(ThemeContext);
  return (
    <div className={`${classes["state-box"]} ${darkTheme ? classes.dark : ""}`}>
      <div>
        <div>
          <span>{icon}</span>
          <p>{title}</p>
          <p>{subTitle}</p>
        </div>
        <div>
          <ProgressCircle progress={progress} />
          <p>{increase}</p>
        </div>
      </div>
    </div>
  );
};

export default StateBox;
