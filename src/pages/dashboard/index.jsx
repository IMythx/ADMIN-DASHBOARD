import classes from "./dashboard.module.css";
import PageHeader from "../../components/global/PageHeader";
import DownloadButton from "../../components/dashboard/DownloadButton";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import StateBox from "../../components/dashboard/stateBox";
import ProgressCircle from "../../components/dashboard/ProgressCircle";
import GeographyChart from "../../components/GeographyChart/GeographyChart";
import LineChart from "../../components/lineChart/LineChart";
import LineChartHeader from "../../components/lineChart/LineChartHeader";
import BarChart from "../../components/BarChart/BarChart";
import TransactionItem from "../../components/transactions/TransactionItem";
import { mockTransactions } from "../../data/mockData";
import { useContext } from "react";
import { ThemeContext } from "../../Theme";
const DashBoard = () => {
  const { darkTheme } = useContext(ThemeContext);
  return (
    <section
      className={`${classes.dashboard} ${darkTheme ? classes.dark : ""}`}
    >
      {/* HEADER */}
      <div>
        <PageHeader
          title={"DASHBOARD"}
          subTitle={"Welcome to your dashboard"}
        />
        <DownloadButton />
      </div>
      {/* CONTENT */}
      <div>
        {/* FIRST ROW */}
        <StateBox
          icon={<EmailIcon />}
          title={"12,361"}
          subTitle={"Emails Sent"}
          increase={"+14%"}
        />
        <StateBox
          icon={<PointOfSaleIcon />}
          title={"431,225"}
          subTitle={"Sales Obtained"}
          increase={"+21%"}
          progress={"0.50"}
        />
        <StateBox
          icon={<PersonAddIcon />}
          title={"32,441"}
          subTitle={"New Clients"}
          increase={"+5%"}
          progress={"0.30"}
        />
        <StateBox
          icon={<TrafficIcon />}
          title={"1,325,134"}
          subTitle={"Traffic Received"}
          increase={"+43%"}
          progress={"0.80"}
        />
        {/* SECOND ROW */}
        <div className={classes["line-chart"]}>
          <LineChartHeader />
          <LineChart isDashboard={true} />
        </div>
        <div className={classes.transactions}>
          <p>Recent Transactions</p>
          {mockTransactions.map((transaction, index) => (
            <TransactionItem
              key={`${transaction.txId}-${index}`}
              txId={transaction.txId}
              user={transaction.user}
              cost={transaction.cost}
              date={transaction.date}
            />
          ))}
        </div>
        {/* THIRD ROW */}
        <div className={classes.campaign}>
          <p>Campaign</p>
          <div>
            <ProgressCircle size="125" />
            <p>$48,352 revenue generated</p>
            <p>Includes extra misc expenditures and costs</p>
          </div>
        </div>
        <div className={classes.sales}>
          <p>Sales Quantity</p>
          <BarChart isDashboard={true} />
        </div>
        <div className={classes.geoChart}>
          <p>Geography Based Traffic</p>
          <GeographyChart isDashboard={true} />
        </div>
      </div>
    </section>
  );
};

export default DashBoard;
