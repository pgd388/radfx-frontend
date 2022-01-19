import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid } from '@mui/x-data-grid';


const columns = [
    {
      field: 'id', headerName: 'Ion', flex: 1,
      editable: false,
    },
    {
      field: 'Cocktail',
      headerName: 'Cocktail',
      headerAlign: 'left',
      type: 'number',
      align: 'left',
      flex: 1,
      editable: true,
    },
    {
      field: 'Energy',
      headerName: 'Energy',
      headerAlign: 'left',
      type: 'number',
      align: 'left',
      flex: 1,
      editable: true,
    },
    {
      field: 'Z',
      headerName: 'Z',
      headerAlign: 'left',
      type: 'number',
      align: 'left',
      flex: 1,
      editable: true,
    },

    {
      field: 'A',
      headerName: 'A',
      headerAlign: 'left',
      type: 'number',
      align: 'left',
      flex: 1,
      editable: true,
    },

    {
      field: 'ChgState',
      headerName: 'ChgState',
      headerAlign: 'left',
      type: 'number',
      align: 'left',
      flex: 1,
      editable: true,
    },

    {
      field: 'NatAbund',
      headerName: 'NatAbund',
      headerAlign: 'left',
      type: 'number',
      align: 'left',
      flex: 1,
      editable: true,
    },

    {
      field: 'LET_Entrance',
      headerName: 'LET_Entrance',
      headerAlign: 'left',
      type: 'number',
      align: 'left',
      flex: 1,
      editable: true,
    },

    {
      field: 'LET_Bragg',
      headerName: 'LET_Bragg',
      headerAlign: 'left',
      type: 'number',
      align: 'left',
      flex: 1,
      editable: true,
    },

    {
      field: 'Range_Bragg',
      headerName: 'Range_Bragg',
      headerAlign: 'left',
      type: 'number',
      align: 'left',
      flex: 1,
      editable: true,
    },

    {
      field: 'Range_Max',
      headerName: 'Range_Max',
      headerAlign: 'left',
      type: 'number',
      align: 'left',
      flex: 1,
      editable: true,
    },


  ];
  
  const rows = [
    { id: '¹⁵N₇', Cocktail: 30, Energy: 425.45, Z: 7, A: 15, ChgState: '+7', NatAbund: 0.370, LET_Entrance: 0.76, LET_Bragg:null, Range_Bragg: null, Range_Max: 1370.0 },
    { id: '¹⁷O₈', Cocktail: 30, Energy: 490.22, Z: 8, A: 17, ChgState: '+8', NatAbund: 0.04, LET_Entrance: 0.98, LET_Bragg:null, Range_Bragg: null, Range_Max: 1220.0 },
    { id: '²¹Ne₁₀', Cocktail: 30, Energy: 620.00, Z: 10, A: 21, ChgState: '+10', NatAbund: 0.27, LET_Entrance: 1.48, LET_Bragg:null, Range_Bragg: null, Range_Max: 1040.0},
    { id: '³⁶Ar₁₈', Cocktail: 30, Energy: 1046.11, Z: 18, A: 36, ChgState: '+17', NatAbund: 0.337, LET_Entrance: 4.87, LET_Bragg:null, Range_Bragg: null, Range_Max: 578.1},
  ];
  
  export default function DataTable() {
    return (
      <div style={{ height: 400, width: '100%' }}>
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
  