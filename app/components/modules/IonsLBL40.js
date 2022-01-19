import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid } from '@mui/x-data-grid';


const columns = [
    { field: 'id', headerName: 'Ion', width: 100 }, 
    {
      field: 'Mass',
      headerName: 'Mass (amu)',
      headerAlign: 'left',
      type: 'number',
      align: 'left',
      width: 150,
      editable: true,
    },
    {
      field: 'AMev',
      headerName: 'A Mev',
      headerAlign: 'left',
      type: 'number',
      align: 'left',
      width: 120,
      editable: true,
    },
    {
      field: 'Total_Enery',
      headerName: 'Total Energy(Mev)',
      headerAlign: 'left',
      type: 'number',
      align: 'left',
      width: 150,
      editable: true,
    },

    {
      field: 'Range_in_Si',
      headerName: 'Range in Si (μm)',
      headerAlign: 'left',
      type: 'number',
      align: 'left',
      width: 150,
      editable: true,
    },

    {
      field: 'Range_To_Bragg_Peak',
      headerName: 'Range to Bragg Peak (μm)',
      headerAlign: 'left',
      type: 'number',
      align: 'left',
      width: 150,
      editable: true,
    },
       {
      field: 'Initial_Let_Vac',
      headerName: 'Initial LET (vac)',
      headerAlign: 'left',
      type: 'number',
      align: 'left',
      width: 150,
      editable: true,
    },

    {
      field: 'Initial_Let_Air',
      headerName: 'Initial LET (air)',
      headerAlign: 'left',
      type: 'number',
      align: 'left',
      width: 150,
      editable: true,
    },

    {
      field: 'Let_At_Bragg_Peak',
      headerName: 'LET at Bragg Peak',
      headerAlign: 'left',
      type: 'number',
      align: 'left',
      width: 150,
      editable: true,
    },



  ];
  
  const rows = [
    { id: 'N', Mass: 14.003, AMev: 40, Total_Enery: 560,  Range_in_Si: 2334, Range_To_Bragg_Peak: 2327,Initial_Let_Vac: 0.6, Initial_Let_Air: 0.6, Let_At_Bragg_Peak:6.7 },
    { id: 'Ne', Mass: 19.992, AMev: 40, Total_Enery: 800,  Range_in_Si: 1655, Range_To_Bragg_Peak: 1647, Initial_Let_Vac: 1.2,Initial_Let_Air: 1.2, Let_At_Bragg_Peak:9.7 },
    { id: 'Ar', Mass: 39.962, AMev: 40, Total_Enery: 1598,  Range_in_Si: 1079, Range_To_Bragg_Peak: 1070, Initial_Let_Vac: 3.8,Initial_Let_Air: 3.9, Let_At_Bragg_Peak:18.7},
    { id: 'Kr', Mass: 77.920, AMev: 40, Total_Enery: 3117,  Range_in_Si: 622, Range_To_Bragg_Peak: 602, Initial_Let_Vac:14.2, Initial_Let_Air: 14.1, Let_At_Bragg_Peak:41.0 },
  ];
  
  export default function DataTable() {
    return (
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSiTotal_Enerye={10}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    );
  }
  