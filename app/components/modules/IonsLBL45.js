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
      field: 'Range_Bragg',
      headerName: 'Range_Bragg',
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
    { id: 'B', Cocktail: 4.5, Energy: 44.90, Z: 5, A: 10, ChgState: '+2', NatAbund: 19.9, LET_Entrance: 1.65, LET_Bragg:null, Range_Bragg: null, Range_Max: 78.5 },
    { id: 'N', Cocktail: 4.5, Energy: 67.44, Z: 7, A: 15, ChgState: '+3', NatAbund: 0.37, LET_Entrance: 3.08, LET_Bragg:null, Range_Bragg: null, Range_Max: 67.8 },
    { id: 'Ne', Cocktail: 4.5, Energy: 89.95, Z: 10, A: 20, ChgState: '+4', NatAbund: 90.48, LET_Entrance: 5.77, LET_Bragg:null, Range_Bragg: null, Range_Max: 53.1},
    { id: 'Si', Cocktail: 4.5, Energy: 139.61, Z: 14, A: 29, ChgState: '+6', NatAbund: 4.67, LET_Entrance: 9.28, LET_Bragg:null, Range_Bragg: null, Range_Max: 52.4 },
    { id: 'Ar', Cocktail: 4.5, Energy: 180.00, Z: 18, A: 40, ChgState: '+8', NatAbund: 99.6, LET_Entrance: 14.32, LET_Bragg:null, Range_Bragg: null, Range_Max: 48.3 },
    { id: 'V', Cocktail: 4.5, Energy: 221.00, Z: 23, A: 51, ChgState: '+10', NatAbund: 99.75, LET_Entrance: 21.68, LET_Bragg:null, Range_Bragg: null, Range_Max: 42.5 },
    { id: 'Cu', Cocktail: 4.5, Energy: 301.79, Z: 29, A: 63, ChgState: '+13', NatAbund: 69.17, LET_Entrance: 29.33, LET_Bragg:null, Range_Bragg: null, Range_Max: 45.6 },
    { id: 'Kr', Cocktail: 4.5, Energy: 378.11, Z: 36, A: 86, ChgState: '+17', NatAbund: 17.3, LET_Entrance: 39.25, LET_Bragg:null, Range_Bragg: null, Range_Max: 42.4 },
    { id: 'Y', Cocktail: 4.5, Energy: 409.58, Z: 39, A: 89, ChgState: '+18', NatAbund: 100, LET_Entrance: 45.58, LET_Bragg:null, Range_Bragg: null, Range_Max: 45.8 },
    { id: 'Ag', Cocktail: 4.5, Energy: 499.50, Z: 47, A: 109, ChgState: '+22', NatAbund: 48.161, LET_Entrance: 58.18, LET_Bragg:null, Range_Bragg: null, Range_Max: 46.3},
    { id: 'Xe', Cocktail: 4.5, Energy: 602.90, Z: 54, A: 136, ChgState: '+27', NatAbund: 8.9, LET_Entrance: 68.84, LET_Bragg:null, Range_Bragg: null, Range_Max: 48.3 },
    { id: 'Tb', Cocktail: 4.5, Energy: 724.17, Z: 65, A: 159, ChgState: '+32', NatAbund: 100, LET_Entrance: 77.52, LET_Bragg:null, Range_Bragg: null, Range_Max: 52.4 },
    { id: 'Ta', Cocktail: 4.5, Energy: 805.02, Z: 73, A: 181, ChgState: '+36', NatAbund: 99.988, LET_Entrance: 87.15, LET_Bragg:null, Range_Bragg: null, Range_Max: 53.0 },
    { id: 'Bi*', Cocktail: 4.5, Energy: 904.16, Z: 83, A: 209, ChgState: '+41', NatAbund: 100, LET_Entrance: 99.74, LET_Bragg:null, Range_Bragg: null, Range_Max: 52.9 },
  ];
  
  export default function DataTable() {
    return (
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    );
  }
  