import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import classes from "./LineChart.module.css";
import { useContext } from "react";
import { ThemeContext } from "../../Theme";
const LineChartHeader = () => {
  const { darkTheme } = useContext(ThemeContext);
  return (
    <div className={`${classes.head} ${darkTheme ? classes.dark : ""}`}>
      <div>
        <p>Revenue Generated</p>
        <p>$59,342,.32</p>
      </div>
      <button>
        <DownloadOutlinedIcon />
      </button>
    </div>
  );
};

export default LineChartHeader;
