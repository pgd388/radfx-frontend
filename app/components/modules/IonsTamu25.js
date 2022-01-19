import React from 'react';
import { DataGrid } from '@mui/x-data-grid';


const columns = [
    { field: 'id', headerName: 'Ion', width: 100 }, 
    {
      field: 'Mass',
      headerName: 'Mass (amu)',
      headerAlign: 'left',
      type: 'number',
      align: 'left',
      flex: 1,
      editable: false,
    },
    {
      field: 'AMev',
      headerName: 'A Mev',
      headerAlign: 'left',
      type: 'number',
      align: 'left',
      flex: 1,
      editable: false,
    },
    {
      field: 'Total_Energy',
      headerName: 'Total Energy (Mev)',
      headerAlign: 'left',
      type: 'number',
      align: 'left',
      flex: 1,
      editable: false,
    },

    {
      field: 'Range_in_Si',
      headerName: 'Range in Si (μm)',
      headerAlign: 'left',
      type: 'number',
      align: 'left',
      flex: 1,
      editable: false,
    },

    {
      field: 'Range_To_Bragg_Peak',
      headerName: 'Range to Bragg Peak (μm)',
      headerAlign: 'left',
      type: 'number',
      align: 'left',
      flex: 1,
      editable: false,
    },

    {
      field: 'Initial_Let_Vac',
      headerName: 'Initial LET (vac)',
      headerAlign: 'left',
      type: 'number',
      align: 'left',
      flex: 1,
      editable: false,
    },

    {
      field: 'Initial_Let_Air',
      headerName: 'Initial LET (air)',
      headerAlign: 'left',
      type: 'number',
      align: 'left',
      flex: 1,
      editable: false,
    },

    {
      field: 'Let_At_Bragg_Peak',
      headerName: 'LET at Bragg Peak',
      headerAlign: 'left',
      type: 'number',
      align: 'left',
      flex: 1,
      editable: false,
    },
  ];
  
  const rows = [
    { id: '⁴He', Mass: 4.003, AMev: 24.8, Total_Energy: 99,  Range_in_Si: 3523, Range_To_Bragg_Peak: 3519,Initial_Let_Vac: 0.07, Initial_Let_Air: 0.07, Let_At_Bragg_Peak:1.4},
    { id: '¹⁴N', Mass: 14.003, AMev: 24.8, Total_Energy: 347, Range_in_Si: 1009, Range_To_Bragg_Peak: 1002, Initial_Let_Vac: 0.9, Initial_Let_Air: 0.9, Let_At_Bragg_Peak:6.0},
    { id: '²²Ne', Mass: 21.991, AMev: 24.8, Total_Energy: 545, Range_in_Si: 799, Range_To_Bragg_Peak: 791, Initial_Let_Vac: 1.7, Initial_Let_Air: 1.7, Let_At_Bragg_Peak:9.0},
    { id: '⁴⁰Ar', Mass: 39.962, AMev: 24.8, Total_Energy: 991, Range_in_Si: 493, Range_To_Bragg_Peak: 484, Initial_Let_Vac: 5.4, Initial_Let_Air: 5.5, Let_At_Bragg_Peak:18.7},
    { id: '⁶³Cu', Mass: 62.930, AMev: 24.8, Total_Energy: 1561, Range_in_Si: 357, Range_To_Bragg_Peak: 334, Initial_Let_Vac: 12.7, Initial_Let_Air: 13.3, Let_At_Bragg_Peak:34.0},
    { id: '⁸⁴Kr', Mass: 83.912, AMev: 24.8, Total_Energy: 2081, Range_in_Si: 332, Range_To_Bragg_Peak: 311, Initial_Let_Vac: 19.3, Initial_Let_Air: 19.3, Let_At_Bragg_Peak:41.0},
    { id: '¹⁰⁷Ag', Mass: 106.905, AMev: 24.8, Total_Energy: 2651, Range_in_Si: 287, Range_To_Bragg_Peak: 260, Initial_Let_Vac: 30.3, Initial_Let_Air: 31.6, Let_At_Bragg_Peak:59.4},
    { id: '¹²⁹Xe', Mass: 128.905, AMev: 24.8, Total_Energy: 3197, Range_in_Si: 286, Range_To_Bragg_Peak: 255, Initial_Let_Vac: 37.9, Initial_Let_Air: 40.5, Let_At_Bragg_Peak:69.3},
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
  