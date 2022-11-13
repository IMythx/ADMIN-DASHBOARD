import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { ThemeContext } from "../../Theme";
import { useContext } from "react";
import classes from "./downloadButton.module.css";

const DownloadButton = () => {
  const { darkTheme } = useContext(ThemeContext);
  return (
    <button className={`${classes.download} ${darkTheme ? classes.dark : ""}`}>
      <DownloadOutlinedIcon />
      <p>DOWNLOAD REPORTS</p>
    </button>
  );
};

export default DownloadButton;
