import { useState } from "react";
import SideBarHead from "./sideBarHead";
import Profile from "./Profile";
import MenuItem from "./MenuItem";
import classes from "./SideBar.module.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { useContext } from "react";
import { ThemeContext } from "../../../Theme";

const SideBar = () => {
  const { darkTheme } = useContext(ThemeContext);
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div
      className={`${classes.sidebar} ${darkTheme && classes.dark} ${
        isCollapsed ? classes.collapsed : ""
      }`}
    >
      <aside>
        <SideBarHead
          isCollapsed={isCollapsed}
          onclick={() => setIsCollapsed((prev) => !prev)}
        />
        {!isCollapsed && <Profile />}
        <ul>
          <MenuItem
            to={"/"}
            name={"Dashboard"}
            isCollapsed={isCollapsed}
            icon={<HomeOutlinedIcon />}
          />
          <p>Data</p>
          <MenuItem
            to={"/team"}
            name={"Manage Team"}
            isCollapsed={isCollapsed}
            icon={<PeopleOutlinedIcon />}
          />
          <MenuItem
            to={"/contacts"}
            name={"Contacts Information"}
            isCollapsed={isCollapsed}
            icon={<ContactsOutlinedIcon />}
          />
          <MenuItem
            to={"/invoices"}
            name={"Invoices Balances"}
            isCollapsed={isCollapsed}
            icon={<ReceiptOutlinedIcon />}
          />
          <p>Pages</p>
          <MenuItem
            to={"/form"}
            name={"Profile Form"}
            isCollapsed={isCollapsed}
            icon={<PersonOutlinedIcon />}
          />
          <MenuItem
            to={"/calendar"}
            name={"Calendar"}
            isCollapsed={isCollapsed}
            icon={<CalendarTodayOutlinedIcon />}
          />
          <MenuItem
            to={"/faq"}
            name={"FAQ Page"}
            isCollapsed={isCollapsed}
            icon={<HelpOutlineOutlinedIcon />}
          />
          <p>Charts</p>
          <MenuItem
            to={"/bar"}
            name={"Bar Chart"}
            isCollapsed={isCollapsed}
            icon={<BarChartOutlinedIcon />}
          />
          <MenuItem
            to={"/pie"}
            name={"Pie Chart"}
            isCollapsed={isCollapsed}
            icon={<PieChartOutlineOutlinedIcon />}
          />
          <MenuItem
            to={"/line"}
            name={"Line Chart"}
            isCollapsed={isCollapsed}
            icon={<TimelineOutlinedIcon />}
          />
          <MenuItem
            to={"/geography"}
            name={"Geography Chart"}
            isCollapsed={isCollapsed}
            icon={<MapOutlinedIcon />}
          />
        </ul>
      </aside>
    </div>
  );
};

export default SideBar;
