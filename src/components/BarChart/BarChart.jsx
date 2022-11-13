import { ResponsiveBar } from "@nivo/bar";
import { ThemeContext } from "../../Theme";
import { useContext } from "react";
import { mockBarData } from "../../data/mockData";
import classes from "./BarChart.module.css";

const BarChart = ({ isDashboard = false }) => {
  const { darkTheme } = useContext(ThemeContext);
  return (
    <div className={classes.BarChart}>
      <ResponsiveBar
        data={mockBarData}
        theme={{
          // added
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
        keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={{ scheme: "nivo" }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "#38bcb2",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "#eed312",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        borderColor={{
          from: "color",
          modifiers: [["darker", "1.6"]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashboard ? undefined : "country", // changed
          legendPosition: "middle",
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashboard ? undefined : "food", // changed
          legendPosition: "middle",
          legendOffset: -40,
        }}
        enableLabel={false}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        role="application"
        barAriaLabel={function (e) {
          return (
            e.id + ": " + e.formattedValue + " in country: " + e.indexValue
          );
        }}
      />
    </div>
  );
};

export default BarChart;
