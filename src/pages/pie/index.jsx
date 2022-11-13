import PageHeader from "../../components/global/PageHeader";
import PieChart from "../../components/PieChart/PieChart";
import classes from "./pie.module.css";

const Pie = () => {
  return (
    <section className={classes.pie}>
      <PageHeader title={"Pie Chart"} subTitle={"Simple Pie Chart"} />
      <PieChart />
    </section>
  );
};
export default Pie;
