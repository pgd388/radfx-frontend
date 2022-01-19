import React, { useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { useDataGridStyles } from "@/styles/useDataGridStyles";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
const columns = [
  {
    field: 'full_name', headerName: 'Name', flex: 1,
    editable: false,
  },
  {
    field: 'email', headerName: 'Email', flex: 1,
    editable: false,
  },
  {
    field: 'agency.name',
    headerName: 'Agency',

    flex: 1,
    editable: false,
  }]



export default function Integrators(props) {
  const classes = useDataGridStyles();
  const [integrators, setIntegrators] = useState({
    "page": 1,
    "per_page": 20,
    "total_page": 1,
    "total_count": 1,
    "data": [
      {
        "created_at": "2021-10-16T14:24:34.875Z",
        "updated_at": "2021-10-16T14:24:34.875Z",
        "first_name": "Rhea",
        "last_name": "Pontus",
        "agency": { name: 'mda', description: 'missles' },
        "phone": "1234567890",
        "name": "Rhea",
        "id": 0,
        "full_name": "Rhea Pontus",
        "email": "Rhea@radfx.com",
        "verified_at": "2021-10-16T14:24:34.875Z",
        "disabled_at": "2021-10-16T14:24:34.875Z",
        "deleted_at": "2021-10-16T14:24:34.875Z"
      },
      {
        "created_at": "2021-10-16T14:24:34.875Z",
        "updated_at": "2021-10-16T14:24:34.875Z",
        "first_name": "Enid",
        "last_name": "Xanthos",
        "agency": { name: 'mda', description: 'missles' },
        "phone": "1234567890",
        "name": "Enid",
        "id": 1,
        "full_name": "Enid Xanthos",
        "email": "Enid@radfx.com",
        "verified_at": "2021-10-16T14:24:34.875Z",
        "disabled_at": "2021-10-16T14:24:34.875Z",
        "deleted_at": "2021-10-16T14:24:34.875Z"
      }
    ]
  })
  function flattenObject(ob) {
    const toReturn = {};

    Object.keys(ob).map(i => {
      if (typeof ob[i] === 'object' && ob[i] !== null) {
        const flatObject = flattenObject(ob[i]);
        Object.keys(flatObject).map(x => {
          toReturn[`${i}.${x}`] = flatObject[x];
          return x;
        });
      } else {
        toReturn[i] = ob[i];
      }
      return i;
    });
    return toReturn;
  }

  var data = integrators.data.map((_data) => { return flattenObject(_data) });

  return (
    <>
      <Container maxWidth="lg" style={{ paddingTop: '1rem' }}>
        <Grid container rowSpacing={4} columnSpacing={{ xs: 2, sm: 3, md: 4 }}>
          <Grid item xs={12}>
            <Paper
              component="form"
              variant="outlined"
              sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%', marginBottom: '10px' }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search facilities"
                inputProps={{ 'aria-label': 'search google maps' }}
              />
              <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
              </IconButton>

            </Paper>
          </Grid>
          <Grid item xs={12}>
            <DataGrid
              className={classes.root}
              rows={data}
              columns={columns}
              pageSize={data.length}
              autoHeight={true}
              checkboxSelection
              disableSelectionOnClick
              disableColumnMenu={true}
              hideFooter={true}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}