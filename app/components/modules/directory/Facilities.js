import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { DataGrid } from '@mui/x-data-grid';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FormControlLabel from '@mui/material/FormControlLabel';
import { createTheme } from '@mui/material/styles';
import { useDataGridStyles } from '@/styles/useDataGridStyles';

const columns = [
  {
    field: 'facility', headerName: 'facility', flex: 1,
    editable: false,
  },
  {
    field: 'website', headerName: 'website', flex: 1,
    editable: false,
  },
]

const facilities = [
    {
        "created_at": "2021-10-16T14:24:34.875Z",
        "updated_at": "2021-10-16T14:24:34.875Z",
        "first_name": "Korrine",
        "last_name": "Diggory",
        "phone": "1234567890",
        "name": "lbnl",
        "id": 0,
        "facility": "Lawrence Berkeley National Laboratory",
        "email": "lbl@radfx.com",
        "verified_at": "2021-10-16T14:24:34.875Z",
        "disabled_at": "2021-10-16T14:24:34.875Z",
        "deleted_at": "2021-10-16T14:24:34.875Z",
        website: 'email@email.com'
    },
    {
        "created_at": "2021-10-16T14:24:34.875Z",
        "updated_at": "2021-10-16T14:24:34.875Z",
        "first_name": "Odetta",
        "last_name": "Ryder",
        "phone": "1234567890",
        "name": "tamu",
        "id": 1,
        "facility": "Texas A&M University",
        "email": "tamu@radfx.com",
        "verified_at": "2021-10-16T14:24:34.875Z",
        "disabled_at": "2021-10-16T14:24:34.875Z",
        "deleted_at": "2021-10-16T14:24:34.875Z",
        website: 'email@email.com'
    },
    {
        "created_at": "2021-10-16T14:24:34.875Z",
        "updated_at": "2021-10-16T14:24:34.875Z",
        "first_name": "Corinna",
        "last_name": "Riny",
        "phone": "1234567890",
        "name": "nsrl",
        "id": 2,
        "facility": "NASA Space Radiation Laboraty",
        "email": "nsrl@radfx.com",
        "verified_at": "2021-10-16T14:24:34.875Z",
        "disabled_at": "2021-10-16T14:24:34.875Z",
        "deleted_at": "2021-10-16T14:24:34.875Z",
        website: 'email@email.com'
    },
];
export default function Facilities(props) {
  const classes = useDataGridStyles();
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
              rows={facilities}
              columns={columns}
              pageSize={20}
              autoHeight={true}
              // checkboxSelection
              disableSelectionOnClick
              disableColumnMenu={true}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}