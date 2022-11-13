import { ResponsiveChoropleth } from "@nivo/geo";
import { ThemeContext } from "../../Theme";
import { useContext } from "react";
import classes from "./GeoChart.module.css";
import { geoFeatures } from "../../data/mockGeoFeatures";
import { mockGeographyData } from "../../data/mockData";

const GeographyChart = ({ isDashboard = false }) => {
  const { darkTheme } = useContext(ThemeContext);
  return (
    <div className={`${classes.GeoChart} ${darkTheme ? classes.dark : ""}`}>
      <ResponsiveChoropleth
        data={mockGeographyData}
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
        features={geoFeatures.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        domain={[0, 1000000]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionScale={isDashboard ? 40 : 150}
        projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5, 0.5]}
        projectionRotation={[0, 0, 0]}
        borderWidth={1.5}
        borderColor="#ffffff"
        legends={
          !isDashboard
            ? [
                {
                  anchor: "bottom-left",
                  direction: "column",
                  justify: true,
                  translateX: 20,
                  translateY: -100,
                  itemsSpacing: 0,
                  itemWidth: 94,
                  itemHeight: 18,
                  itemDirection: "left-to-right",
                  itemTextColor: darkTheme ? "#e0e0e0" : "#141414",
                  itemOpacity: 0.85,
                  symbolSize: 18,
                  effects: [
                    {
                      on: "hover",
                      style: {
                        itemTextColor: "#ffffff",
                        itemOpacity: 1,
                      },
                    },
                  ],
                },
              ]
            : undefined
        }
      />
    </div>
  );
};

export default GeographyChart;
