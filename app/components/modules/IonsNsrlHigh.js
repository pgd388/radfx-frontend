import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'Ion Species', flex: 1,
    minWidth: 140 }, 
    {
      field: 'Max_Energy',
      headerName: 'Max Energy',
      headerAlign: 'left',
      align: 'left',
      type: 'number',
      flex: 1,
      editable: false,
    },
    {
      field: 'LET',
      headerName: 'LET in Si at Max Energy',
      headerAlign: 'left',
      type: 'number',
      align: 'left',
      flex: 1,
      editable: false,
    },
    {
      field: 'Peak',
      headerName: 'Peak LET in S',
      headerAlign: 'left',
      type: 'number',
      align: 'left',
      flex: 1,
      editable: false,
    },

    {
      field: 'Range',
      headerName: 'Range in Si',
      headerAlign: 'left',
      type: 'number',
      align: 'left',
      flex: 1,
      editable: false,
    },

    {
      field: 'Max_Flux',
      headerName: 'Max Flux',
      headerAlign: 'left',
      type: 'text',
      align: 'left',
      flex: 1,
      editable: false,
    },
  ];
  
  const rows = [
    { id: 'Kr84', Max_Energy: '721', LET: 2.54, Peak: 41, Range: 	70.5, Max_Flux: '' },
    { id: 'Xe129', Max_Energy: '589', LET: 6.1, Peak: 69.3, Range: 35.8, Max_Flux: ''},
    { id: 'Ta181', Max_Energy: '475', LET: 11.7, Peak: 87.7, Range: 21.1, Max_Flux: ''},
    { id: 'Au197', Max_Energy: '400', LET: 15, Peak: 94.4, Range: 14.9, Max_Flux: ''},
];
  
  export default function DataTable() {
    return (
      <div style={{ width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={rows.length}
          autoHeight={true}
          checkboxSelection
          disableSelectionOnClick
          disableColumnMenu={true}
          hideFooter={true}
        />
      </div>
    );
  }
  