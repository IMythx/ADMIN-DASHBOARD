import { ThemeContext } from "../../Theme";
import { useContext } from "react";

const ProgressCircle = ({ progress = "0.75", size = "40" }) => {
  const { darkTheme } = useContext(ThemeContext);
  const angle = progress * 360;
  return (
    <div
      style={{
        background: `radial-gradient(${
          darkTheme ? "#1F2A40" : "#f2f0f0"
        } 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, ${"#6870fa"} ${angle}deg 360deg),
            ${"#4cceac"}`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    ></div>
  );
};

export default ProgressCircle;
