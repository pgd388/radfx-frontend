import React from "react";
import { DataGrid } from '@mui/x-data-grid';
const columns = [
    {
        field: 'full_name', headerName: 'Name', flex: 1,
        editable: false,
      },
      {
        field: 'email', headerName: 'Email', flex: 1,
        editable: false,
      }]

    const agencies = [
        { id: 0,  full_name: 'Joe Bloe', email: 'email@email.com'},
      ];
export default function Integrators(props) {
    return (
        <>
        <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={agencies}
        columns={columns}
        pageSize={agencies.length}
        autoHeight={true}
        checkboxSelection
        disableSelectionOnClick
        disableColumnMenu={true}
        hideFooter={true}
      />
    </div>
        </>
    )
}