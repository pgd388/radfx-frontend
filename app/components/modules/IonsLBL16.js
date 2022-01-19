import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'Ion', width: 100 }, 
    {
      field: 'Cocktail',
      headerName: 'Cocktail',
      headerAlign: 'left',
      type: 'number',
      align: 'left',
      width: 150,
      editable: true,
    },
    {
      field: 'Energy',
      headerName: 'Energy',
      headerAlign: 'left',
      type: 'number',
      align: 'left',
      width: 120,
      editable: true,
    },
    {
      field: 'Z',
      headerName: 'Z',
      headerAlign: 'left',
      type: 'number',
      align: 'left',
      width: 150,
      editable: true,
    },

    {
      field: 'A',
      headerName: 'A',
      headerAlign: 'left',
      type: 'number',
      align: 'left',
      width: 150,
      editable: true,
    },

    {
      field: 'ChgState',
      headerName: 'ChgState',
      headerAlign: 'left',
      type: 'number',
      align: 'left',
      width: 150,
      editable: true,
    },

    {
      field: 'NatAbund',
      headerName: 'NatAbund',
      headerAlign: 'left',
      type: 'number',
      align: 'left',
      width: 150,
      editable: true,
    },

    {
      field: 'LET_Entrance',
      headerName: 'LET_Entrance',
      headerAlign: 'left',
      type: 'number',
      align: 'left',
      width: 150,
      editable: true,
    },

    {
      field: 'LET_Bragg',
      headerName: 'LET_Bragg',
      headerAlign: 'left',
      type: 'number',
      align: 'left',
      width: 150,
      editable: true,
    },

    {
      field: 'Range_Bragg_Vacuum',
      headerName: 'Range_Bragg_Vacuum',
      headerAlign: 'left',
      type: 'number',
      align: 'left',
      width: 150,
      editable: true,
    },

    {
      field: 'Range_Bragg_Air',
      headerName: 'Range_Bragg_Air',
      headerAlign: 'left',
      type: 'number',
      align: 'left',
      width: 150,
      editable: true,
    },

    {
      field: 'Range_Max',
      headerName: 'Range_Max',
      headerAlign: 'left',
      type: 'number',
      align: 'left',
      width: 150,
      editable: true,
    },


  ];
  
  const rows = [
    { id: 'He*', Cocktail: 16, Energy: 43.46, Z: 2, A: 3, ChgState: '+1', NatAbund: 0.000137, LET_Entrance: 0.11, LET_Bragg:1.45, Range_Bragg_Vacuum: 836.0, Range_Bragg_Air: 795.5, Range_Max: 1020.0 },
    { id: 'N', Cocktail: 16, Energy: 233.75, Z: 7, A: 14, ChgState: '+5', NatAbund: 99.63, LET_Entrance: 1.16, LET_Bragg:6.04, Range_Bragg_Vacuum: 503.0, Range_Bragg_Air: 464.0, Range_Max: 505.9 },
    { id: 'O', Cocktail: 16, Energy: 277.33, Z: 8, A: 17, ChgState: '+6', NatAbund: 0.04, LET_Entrance: 1.54, LET_Bragg:7.15, Range_Bragg_Vacuum: 478.5, Range_Bragg_Air: 439.3, Range_Max: 462.4},
    { id: 'Ne', Cocktail: 16, Energy: 321.00, Z: 10, A: 20, ChgState: '+7', NatAbund: 90.48, LET_Entrance: 2.39, LET_Bragg:8.95, Range_Bragg_Vacuum: 337.5, Range_Bragg_Air: 299.2, Range_Max: 347.9 },
    { id: 'Si', Cocktail: 16, Energy: 452.10, Z: 14, A: 29, ChgState: '+10', NatAbund: 4.67, LET_Entrance: 4.56, LET_Bragg:13.99, Range_Bragg_Vacuum: 269.5, Range_Bragg_Air: 230.7, Range_Max: 274.3 },
    { id: 'Cl', Cocktail: 16, Energy: 539.51, Z: 17, A: 35, ChgState: '+12', NatAbund: 75.77, LET_Entrance: 6.61, LET_Bragg:17.35, Range_Bragg_Vacuum: 219.6, Range_Bragg_Air: 180.1, Range_Max: 233.6 },
    { id: 'Ar', Cocktail: 16, Energy: 642.36, Z: 18, A: 40, ChgState: '+14', NatAbund: 99.600, LET_Entrance: 7.27, LET_Bragg:18.65, Range_Bragg_Vacuum: 242.2, Range_Bragg_Air: 203.1, Range_Max: 255.6 },
    { id: 'V', Cocktail: 16, Energy: 832.84, Z: 23, A: 51, ChgState: '+18', NatAbund: 99.750, LET_Entrance: 10.90, LET_Bragg:25.59, Range_Bragg_Vacuum: 206.3, Range_Bragg_Air: 167.6, Range_Max: 225.8 },
    { id: 'Cu', Cocktail: 16, Energy: 1007.34, Z: 29, A: 63, ChgState: '+22', NatAbund: 69.17, LET_Entrance: 16.53, LET_Bragg:33.95, Range_Bragg_Vacuum: 166.5, Range_Bragg_Air: 127.6, Range_Max: 190.3 },
    { id: 'Kr', Cocktail: 16, Energy: 1225.54, Z: 36, A: 75, ChgState: '+27', NatAbund: 0.35, LET_Entrance: 24.98, LET_Bragg:40.91, Range_Bragg_Vacuum: 136.1, Range_Bragg_Air: 97.1, Range_Max: 165.4},
    { id: 'Xe*', Cocktail: 16, Energy: 1954.71, Z: 54, A: 124, ChgState: '+43', NatAbund: 0.1, LET_Entrance: 49.29, LET_Bragg:69.24, Range_Bragg_Vacuum: 105.4, Range_Bragg_Air: 66.0, Range_Max: 147.9 }
  ];
  
  export default function DataTable() {
    return (
      <div style={{  width: '100%' }}>
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