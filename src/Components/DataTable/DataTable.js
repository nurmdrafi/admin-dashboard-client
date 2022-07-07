import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { Link } from "react-router-dom";
import { userColumns, userRows } from "../../DataTableSource";
import "./DataTable.scss";

const DataTable = () => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div className="deleteButton">Delete</div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="dataTable">
      <div className="dataTableTitle">
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
      className="dataGrid"
        rows={userRows}
        // columns={userColumns.concat(actionColumn)}
        columns={[...userColumns, ...actionColumn]}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
