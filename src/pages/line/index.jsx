import PageHeader from "../../components/global/PageHeader";
import LineChart from "../../components/lineChart/LineChart";
import classes from "./line.module.css";
const Line = () => {
  return (
    <section className={classes.line}>
      <PageHeader title={"Line Chart"} subTitle={"Simple Line Chart"} />
      <LineChart />
    </section>
  );
};

export default Line;
