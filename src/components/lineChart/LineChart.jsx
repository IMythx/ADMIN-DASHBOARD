import { ResponsiveLine } from "@nivo/line";
import { ThemeContext } from "../../Theme";
import { useContext } from "react";
import classes from "./LineChart.module.css";
import { mockLineData } from "../../data/mockData";

const LineChart = ({ isDashboard = false }) => {
  const { darkTheme } = useContext(ThemeContext);
  return (
    <div className={classes.LineChart}>
      <ResponsiveLine
        data={mockLineData}
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
          tooltip: {
            container: {
              color: "#141b2d",
            },
          },
        }}
        colors={isDashboard ? { datum: "color" } : { scheme: "nivo" }} // added
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        curve="catmullRom"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",
          tickSize: 0,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashboard ? undefined : "transportation", // added
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          orient: "left",
          tickValues: 5, // added
          tickSize: 3,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashboard ? undefined : "count", // added
          legendOffset: -40,
          legendPosition: "middle",
        }}
        enableGridX={false}
        enableGridY={false}
        pointSize={8}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default LineChart;
