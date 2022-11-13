import PageHeader from "../../components/global/PageHeader";
import BarChart from "../../components/BarChart/BarChart";
import classes from "./bar.module.css";

const Bar = () => {
  return (
    <section className={classes.bar}>
      <PageHeader title={"Bar Chart"} subTitle={"Simple Bar Chart"} />
      <BarChart />
    </section>
  );
};

export default Bar;
