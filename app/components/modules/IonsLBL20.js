import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'Ion Species', flex: 1,
    minWidth: 140 }, 
    {
      field: 'Cocktail',
      headerName: 'Cocktail',
      headerAlign: 'left',
      type: 'number',
      align: 'left',
      flex: 1,
      editable: false,
    },
    {
      field: 'Energy',
      headerName: 'Energy',
      headerAlign: 'left',
      type: 'number',
      align: 'left',
      flex: 1,
      editable: false,
    },
    {
      field: 'Z',
      headerName: 'Z',
      headerAlign: 'left',
      type: 'number',
      align: 'left',
      flex: 1,
      editable: false,
    },

    {
      field: 'A',
      headerName: 'A',
      headerAlign: 'left',
      type: 'number',
      align: 'left',
      flex: 1,
      editable: false,
    },

    {
      field: 'ChgState',
      headerName: 'ChgState',
      headerAlign: 'left',
      type: 'number',
      align: 'left',
      flex: 1,
      editable: false,
    },

    {
      field: 'NatAbund',
      headerName: 'NatAbund',
      headerAlign: 'left',
      type: 'number',
      align: 'left',
      flex: 1,
      editable: false,
    },

    {
      field: 'LET_Entrance',
      headerName: 'LET_Entrance',
      headerAlign: 'left',
      type: 'number',
      align: 'left',
      flex: 1,
      editable: false,
    },

    {
      field: 'LET_Bragg',
      headerName: 'LET_Bragg',
      headerAlign: 'left',
      type: 'number',
      align: 'left',
      flex: 1,
      editable: false,
    },

    {
      field: 'Range_Bragg_Vacuum',
      headerName: 'Range_Bragg_Vacuum',
      headerAlign: 'left',
      type: 'number',
      align: 'left',
      flex: 1,
      editable: false,
    },

    {
      field: 'Range_Bragg_Window',
      headerName: 'Range_Bragg_Window',
      headerAlign: 'left',
      type: 'number',
      align: 'left',
      flex: 1,
      editable: false,
    },

    {
      field: 'Range_Max',
      headerName: 'Range_Max',
      headerAlign: 'left',
      type: 'number',
      align: 'left',
      flex: 1,
      editable: false,
    },


  ];
  
  const rows = [
    { id: 'C', Cocktail: 20, Energy: 240.00, Z: 6, A: 12, ChgState: '+5', NatAbund: 98.900, LET_Entrance: 0.72, LET_Bragg:5.13, Range_Bragg_Vacuum: 812.0, Range_Bragg_Window: 773.5, Range_Max: 813.1 },
    { id: 'Ne', Cocktail: 20, Energy: 400.00, Z: 10, A: 20, ChgState: '+8', NatAbund: 90.480, LET_Entrance: 2.00, LET_Bragg:8.95, Range_Bragg_Vacuum: 493.3, Range_Bragg_Window: 454.3, Range_Max: 504.5 },
    { id: 'Al', Cocktail: 20, Energy: 540.00, Z: 13, A: 27, ChgState: '+11', NatAbund: 100.000, LET_Entrance: 3.36, LET_Bragg:12.49, Range_Bragg_Vacuum: 419.3, Range_Bragg_Window: 380.3, Range_Max: 428.7},
    { id: 'Ar', Cocktail: 20, Energy: 800.00, Z: 18, A: 40, ChgState: '+16', NatAbund: 99.600, LET_Entrance: 6.27, LET_Bragg:18.65, Range_Bragg_Vacuum: 343.2, Range_Bragg_Window: 304.2, Range_Max: 356.5 },
    { id: 'Cu', Cocktail: 20, Energy: 1260.00, Z: 29, A: 65, ChgState: '+25', NatAbund: 30.830, LET_Entrance: 14.12, LET_Bragg:33.95, Range_Bragg_Vacuum: 236.7, Range_Bragg_Window: 198.1, Range_Max: 288.4 },
    { id: 'Kr', Cocktail: 20, Energy: 1560.00, Z: 36, A: 78, ChgState: '+32', NatAbund: 0.350, LET_Entrance: 22.62, LET_Bragg:40.87, Range_Bragg_Vacuum: 195.6, Range_Bragg_Window: 157.1, Range_Max: 221.7 },
    { id: 'Y', Cocktail: 20, Energy: 1780.00, Z: 39, A: 89, ChgState: '+36', NatAbund: 100.000, LET_Entrance: 24.82, LET_Bragg:47.42, Range_Bragg_Vacuum: 196.1, Range_Bragg_Window: 157.1, Range_Max: 229.2 },
    { id: 'Ag', Cocktail: 20, Energy: 2180.00, Z: 47, A: 109, ChgState: '+44', NatAbund: 48.161, LET_Entrance: 34.24, LET_Bragg:59.27, Range_Bragg_Vacuum: 176.6, Range_Bragg_Window: 137.6, Range_Max: 212.9 },
    { id: 'Xe', Cocktail: 20, Energy: 2480.00, Z: 54, A: 124, ChgState: '+47', NatAbund: 0.100, LET_Entrance: 45.40, LET_Bragg:69.23, Range_Bragg_Vacuum: 153.1, Range_Bragg_Window: 114.1, Range_Max: 193.8 },
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
  