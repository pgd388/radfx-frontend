import React from 'react';
import { DataGrid } from '@mui/x-data-grid';


const columns = [
  { field: 'id', headerName: 'Ion', width: 100 },
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
    field: 'Range_Bragg',
    headerName: 'Range_Bragg',
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
  { id: 'B', Cocktail: 10, Energy: 108.01, Z: 5, A: 11, ChgState: '+3', NatAbund: 80.1, LET_Entrance: 0.89, LET_Bragg: 4.19, Range_Bragg: 307.0, Range_Max: 305.7 },
  { id: 'O', Cocktail: 10, Energy: 183.47, Z: 8, A: 18, ChgState: '+5', NatAbund: 0.2, LET_Entrance: 2.19, LET_Bragg: 7.16, Range_Bragg: 239.2, Range_Max: 226.4 },
  { id: 'Ne', Cocktail: 10, Energy: 216.28, Z: 10, A: 22, ChgState: '+6', NatAbund: 9.25, LET_Entrance: 3.49, LET_Bragg: 8.95, Range_Bragg: 174.1, Range_Max: 174.6 },
  { id: 'Si', Cocktail: 10, Energy: 291.77, Z: 14, A: 29, ChgState: '+8', NatAbund: 4.67, LET_Entrance: 6.09, LET_Bragg: 13.99, Range_Bragg: 134.2, Range_Max: 141.7 },
  { id: 'Ar', Cocktail: 10, Energy: 400.00, Z: 18, A: 40, ChgState: '+11', NatAbund: 99.6, LET_Entrance: 9.74, LET_Bragg: 18.65, Range_Bragg: 116.6, Range_Max: 130.1 },
  { id: 'V', Cocktail: 10, Energy: 508.27, Z: 23, A: 51, ChgState: '+14', NatAbund: 99.75, LET_Entrance: 14.59, LET_Bragg: 25.59, Range_Bragg: 93.9, Range_Max: 113.4 },
  { id: 'Cu', Cocktail: 10, Energy: 659.19, Z: 29, A: 65, ChgState: '+18', NatAbund: 30.83, LET_Entrance: 21.17, LET_Bragg: 33.95, Range_Bragg: 85.4, Range_Max: 108.0 },
  { id: 'Kr', Cocktail: 10, Energy: 885.59, Z: 36, A: 86, ChgState: '+24', NatAbund: 17.3, LET_Entrance: 30.86, LET_Bragg: 40.91, Range_Bragg: 84.3, Range_Max: 109.9 },
  { id: 'Y', Cocktail: 10, Energy: 928.49, Z: 39, A: 89, ChgState: '+25', NatAbund: 100, LET_Entrance: 34.73, LET_Bragg: 47.42, Range_Bragg: 68.9, Range_Max: 102.2 },
  { id: 'Ag', Cocktail: 10, Energy: 1039.42, Z: 47, A: 107, ChgState: '+29', NatAbund: 51.839, LET_Entrance: 48.15, LET_Bragg: 59.27, Range_Bragg: 53.9, Range_Max: 90.0 },
  { id: 'Xe', Cocktail: 10, Energy: 1232.55, Z: 54, A: 124, ChgState: '+34', NatAbund: 0.1, LET_Entrance: 58.78, LET_Bragg: 69.24, Range_Bragg: 48.6, Range_Max: 90.0 },
  { id: 'Au*', Cocktail: 10, Energy: 1955.87, Z: 79, A: 197, ChgState: '+54', NatAbund: 100, LET_Entrance: 85.76, LET_Bragg: 94.18, Range_Bragg: 55.0, Range_Max: 105.9 },
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
