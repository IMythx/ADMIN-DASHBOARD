import GeographyChart from "../../components/GeographyChart/GeographyChart";
import PageHeader from "../../components/global/PageHeader";
import classes from "./geo.module.css";

const Geography = () => {
  return (
    <section className={classes.geo}>
      <PageHeader title={"Geography"} subTitle={"Simple Geography Chart"} />
      <GeographyChart />
    </section>
  );
};

export default Geography;
