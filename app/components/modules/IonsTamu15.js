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
      flex: 1,
      editable: false,
    },
    {
      field: 'A_MeV',
      headerName: 'A MeV',
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
      field: 'Bragg_Peak_Range',
      headerName: 'Range to Bragg Peak (μm)',
      headerAlign: 'left',
      type: 'number',
      align: 'left',
      flex: 1,
      editable: false,
    },

    {
      field: 'Initial_LET_vac',
      headerName: 'Initial LET (vac)',
      headerAlign: 'left',
      type: 'number',
      align: 'left',
      flex: 1,
      editable: false,
    },

    {
      field: 'Initial_LET_air',
      headerName: 'Initial LET (air)',
      headerAlign: 'left',
      type: 'number',
      align: 'left',
      flex: 1,
      editable: false,
    },

    {
      field: 'LET_Bragg_Peak',
      headerName: 'LET at Bragg Peak',
      headerAlign: 'left',
      type: 'number',
      align: 'left',
      flex: 1,
      editable: false,
    },
  ];
  
  const rows = [
    { id: '⁴He', Mass : 4.003, A_MeV: 15, Total_Energy: 60, Range_in_Si: 1449, Bragg_Peak_Range: 1446, Initial_LET_vac: 0.10, Initial_LET_air: 0.10, LET_Bragg_Peak: 1.4 },
    { id: '¹⁴N', Mass : 14.003, A_MeV: 15, Total_Energy: 210, Range_in_Si: 422, Bragg_Peak_Range: 418, Initial_LET_vac: 1.3, Initial_LET_air: 1.3, LET_Bragg_Peak: 6.1 },
    { id: '²⁰Ne', Mass : 19.992, A_MeV: 15, Total_Energy: 300, Range_in_Si: 311, Bragg_Peak_Range: 302, Initial_LET_vac: 2.5, Initial_LET_air: 2.6, LET_Bragg_Peak: 9.0 },
    { id: '⁴⁰Ar', Mass : 39.962, A_MeV: 15, Total_Energy: 599, Range_in_Si: 231, Bragg_Peak_Range: 217, Initial_LET_vac: 7.6, Initial_LET_air: 7.9, LET_Bragg_Peak: 18.7 },
    { id: '⁶³Cu', Mass : 62.930, A_MeV: 15, Total_Energy: 944, Range_in_Si: 174, Bragg_Peak_Range: 151, Initial_LET_vac: 17.1, Initial_LET_air: 18.0, LET_Bragg_Peak: 34.0 },
    { id: '⁸⁴Kr', Mass : 83.912, A_MeV: 15, Total_Energy: 1259, Range_in_Si: 170, Bragg_Peak_Range: 149, Initial_LET_vac: 25.4, Initial_LET_air: 26.6, LET_Bragg_Peak: 41.4 },
    { id: '¹⁰⁹Ag', Mass : 108.905, A_MeV: 15, Total_Energy: 1634, Range_in_Si: 149, Bragg_Peak_Range: 113, Initial_LET_vac: 40.0, Initial_LET_air: 42.3, LET_Bragg_Peak: 59.4 },
    { id: '¹²⁹Xe', Mass : 128.905, A_MeV: 15, Total_Energy: 1934, Range_in_Si: 146, Bragg_Peak_Range: 107, Initial_LET_vac: 50.4, Initial_LET_air: 53.1, LET_Bragg_Peak: 69.3 },
    { id: '¹⁴¹Pr', Mass : 140.908, A_MeV: 15, Total_Energy: 2114, Range_in_Si: 154, Bragg_Peak_Range: 99, Initial_LET_vac: 55.8, Initial_LET_air: 58.4, LET_Bragg_Peak: 70.8 },
    { id: '¹⁶⁵Ho', Mass : 164.930, A_MeV: 15, Total_Energy: 2474, Range_in_Si: 151, Bragg_Peak_Range: 102, Initial_LET_vac: 67.0, Initial_LET_air: 69.6, LET_Bragg_Peak: 82.3 },
    { id: '¹⁸¹Ta', Mass : 180.948, A_MeV: 15, Total_Energy: 2714, Range_in_Si: 159, Bragg_Peak_Range: 111, Initial_LET_vac: 72.3, Initial_LET_air: 72.3, LET_Bragg_Peak: 87.7 },
    { id: '¹⁹⁷Au', Mass : 196.967, A_MeV: 15, Total_Energy: 2954, Range_in_Si: 159, Bragg_Peak_Range: 108, Initial_LET_vac: 78.0, Initial_LET_air: 80.5, LET_Bragg_Peak: 94.4 }
  ];
  
  export default function DataTable() {
    return (
      <div style={{width: '100%' }}>
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
  