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
    { id: 'H1', Max_Energy: '2500', LET: 	0.00171, Peak: 0.51, Range: 5470, Max_Flux: '2.2x1011' },
    { id: 'He4', Max_Energy: '1500', LET: 0.006919, Peak: 1.5, Range: 2960, Max_Flux: '0.3 x 1010'},
    { id: 'C12', Max_Energy: '1500', LET: 0.06227, Peak: 5.2, Range: 972, Max_Flux: '1.2x1010'},
    { id: 'O16', Max_Energy: '1500', LET: 0.1107, Peak: 7.3, Range: 351, Max_Flux: '0.4x1010'},
    { id: 'Ne20', Max_Energy: '1000', LET: 0.178, Peak: 9, Range: 583, Max_Flux: '1.2x1010'},
    { id: 'Si28', Max_Energy: '1000', LET: 0.351, Peak: 14, Range: 248, Max_Flux: '0.3x1010'},
    { id: 'Ar40', Max_Energy: '1000', LET: 0.600, Peak: 18.7, Range: 207, Max_Flux: '0.02x1010'},
    { id: 'Ti48', Max_Energy: '1000', LET: 0.854, Peak: 24.2, Range: 175, Max_Flux: '0.08x1010'},
    { id: 'Fe56', Max_Energy: '1000', LET: 1.189, Peak: 29.3, Range: 146, Max_Flux: '0.2x1010'},
    { id: 'Kr84', Max_Energy: '383*', LET: 3.3, Peak: 41, Range: 26.9, Max_Flux: '2.0x107'},
    { id: 'Nb93', Max_Energy: '520', LET: 3.6, Peak: 47.4, Range: 37.5, Max_Flux: '1 x 107'},
    { id: 'Ag107', Max_Energy: '575', LET: 4.65, Peak: 59.4, Range: 17.9, Max_Flux: '6 x 106'},
    { id: 'Xe129', Max_Energy: '350*', LET: 7.67, Peak: 69.3, Range: 16.1, Max_Flux: '5.0x107'},
    { id: 'Tb159', Max_Energy: '446', LET: 9.32, Peak: 78.2, Range: 21.4, Max_Flux: '4.0x107'},
    { id: 'Ta181', Max_Energy: '342*', LET: 13.5, Peak: 87.7, Range: 12.8, Max_Flux: '4.5x107'},
    { id: 'Au197', Max_Energy: '242*', LET: 19.2, Peak: 94.4, Range: 6.9, Max_Flux: '1.0x108'},
    { id: 'Bi209', Max_Energy: '359', LET: 17.6, Peak: 100.0, Range: 12.2, Max_Flux: '7.0x107'},
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
  