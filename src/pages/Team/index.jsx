import PageHeader from "../../components/global/PageHeader/index";
import classes from "./dataGrid.module.css";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataTeam } from "../../data/mockData";
import { Fragment, useContext } from "react";
import { ThemeContext } from "../../Theme";

const columns = [
  { field: "id", headerName: "ID" },
  {
    field: "name",
    headerName: "Name",
    flex: 1,
    cellClassName: "name-column--cell",
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    headerAlign: "left",
    align: "left",
  },
  {
    field: "phone",
    headerName: "Phone Number",
    flex: 1,
  },
  {
    field: "email",
    headerName: "Email",
    flex: 1,
  },
  {
    field: "access",
    headerName: "Access Level",
    flex: 1,
    renderCell: ({ row: { access } }) => {
      return (
        <Fragment>
          {access === "admin" && (
            <div className={`${classes.access} ${classes.admin}`}>
              <AdminPanelSettingsOutlinedIcon />
              <p>{access}</p>
            </div>
          )}
          {access === "manager" && (
            <div className={`${classes.access} ${classes.manager}`}>
              <SecurityOutlinedIcon />
              <p>{access}</p>
            </div>
          )}
          {access === "user" && (
            <div className={`${classes.access} ${classes.user}`}>
              <LockOpenOutlinedIcon />
              <p>{access}</p>
            </div>
          )}
        </Fragment>
      );
    },
  },
];
const Team = () => {
  const { darkTheme } = useContext(ThemeContext);
  return (
    <section className={`${classes["data-grid"]} ${darkTheme && classes.dark}`}>
      <PageHeader title={"TEAM"} subTitle={"Managing the Team Members"} />
      <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} />
    </section>
  );
};

export default Team;
