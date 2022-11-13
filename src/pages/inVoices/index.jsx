import { useContext } from "react";
import { ThemeContext } from "../../Theme";
import { mockDataInvoices } from "../../data/mockData";
import { DataGrid } from "@mui/x-data-grid";
import classes from "../Team/dataGrid.module.css";
import PageHeader from "../../components/global/PageHeader";

const columns = [
  { field: "id", headerName: "ID" },
  {
    field: "name",
    headerName: "Name",
    flex: 1,
    cellClassName: "name-column--cell",
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
    field: "cost",
    headerName: "Cost",
    flex: 1,
    renderCell: ({ row: { cost } }) => <p className={classes.cost}>${cost}</p>,
  },
  {
    field: "date",
    headerName: "Date",
    flex: 1,
  },
];
const InVoices = () => {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <section className={`${classes["data-grid"]} ${darkTheme && classes.dark}`}>
      <PageHeader title={"INVOICES"} subTitle={"List of Invoice Balances"} />
      <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} />
    </section>
  );
};

export default InVoices;
