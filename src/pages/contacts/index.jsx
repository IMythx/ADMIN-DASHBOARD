import classes from "../Team/dataGrid.module.css";
import PageHeader from "../../components/global/PageHeader";
import { mockDataContacts } from "../../data/mockData";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useContext } from "react";
import { ThemeContext } from "../../Theme";

const columns = [
  { field: "id", headerName: "ID", flex: 0.5 },
  { field: "registrarId", headerName: "Registrar ID" },
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
    field: "address",
    headerName: "Address",
    flex: 1,
  },
  {
    field: "city",
    headerName: "City",
    flex: 1,
  },
  {
    field: "zipCode",
    headerName: "Zip Code",
    flex: 1,
  },
];

const Contacts = () => {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <section className={`${classes["data-grid"]} ${darkTheme && classes.dark}`}>
      <PageHeader
        title={"CONTACTS"}
        subTitle={"List of Contacts for Future Reference"}
      />
      <DataGrid
        rows={mockDataContacts}
        columns={columns}
        components={{ Toolbar: GridToolbar }}
        checkboxSelection={false}
      />
    </section>
  );
};

export default Contacts;
