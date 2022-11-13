import { ResponsivePie } from "@nivo/pie";
import { ThemeContext } from "../../Theme";
import { useContext } from "react";
import classes from "./PieChart.module.css";
import { mockPieData } from "../../data/mockData";

const PieChart = ({ isDashboard = false }) => {
  const { darkTheme } = useContext(ThemeContext);
  return (
    <div className={classes.PieChart}>
      <ResponsivePie
        data={mockPieData}
        theme={{
          axis: {
            domain: {
              line: {
                stroke: darkTheme ? "#e0e0e0" : "#141414",
              },
            },
            legend: {
              text: {
                fill: darkTheme ? "#e0e0e0" : "#141414",
              },
            },
            ticks: {
              line: {
                stroke: darkTheme ? "#e0e0e0" : "#141414",
                strokeWidth: 1,
              },
              text: {
                fill: darkTheme ? "#e0e0e0" : "#141414",
              },
            },
          },
          legends: {
            text: {
              fill: darkTheme ? "#e0e0e0" : "#141414",
            },
          },
        }}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={darkTheme ? "#e0e0e0" : "#141414"}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        enableArcLabels={false}
        arcLabelsRadiusOffset={0.4}
        arcLabelsSkipAngle={7}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: "#999",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default PieChart;
