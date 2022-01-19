import React, {useState} from 'react';
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
    field: 'name', headerName: 'Project', flex: 1,
    editable: false,
  },
  {
    field: 'status', headerName: 'status', flex: 1,
    editable: false,
  },
]

export default function Projects(props) {
  const classes = useDataGridStyles();
    const [projects, setProjects] = useState({
        "page": 1,
        "per_page": 20,
        "total_page": 1,
        "total_count": 3,
        "data": [
          {
            "creator": {
              "name": "tester_1",
              "id": 1,
              "full_name": "Hildr Sigrún",
              "phone": "1234567890",
              "email": "Hildr@radfx.com",
            },
            "created_at": "2021-10-16T14:24:34.875Z",
            "updated_at": "2021-10-16T14:24:34.875Z",
            "name": "space corn",
            "id": 0,
            "description": "mars vegitation",
            "verified_at": "2021-10-16T14:24:34.875Z",
            "disabled_at": "2021-10-16T14:24:34.875Z",
            "deleted_at": "2021-10-16T14:24:34.875Z",
            facility: {
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
                "deleted_at": "2021-10-16T14:24:34.875Z"
              },
            status: 'scheduled'
          },
          {
            "creator": {
              "name": "tester_1",
              "id": 1,
              "full_name": "Hildr Sigrún",
              "phone": "1234567890",
              "email": "Hildr@radfx.com",
            },
            "created_at": "2021-10-16T14:24:34.875Z",
            "updated_at": "2021-10-16T14:24:34.875Z",
            "name": "space rats",
            "id": 1,
            "description": "mars fauna",
            "verified_at": "2021-10-16T14:24:34.875Z",
            "disabled_at": "2021-10-16T14:24:34.875Z",
            "deleted_at": "2021-10-16T14:24:34.875Z",
            status: 'requested',
            facility: {
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
                "deleted_at": "2021-10-16T14:24:34.875Z"
              },
              request: {
                  id: 0,

              }
          },
          {
            "creator": {
              "name": "tester_1",
              "id": 1,
              "full_name": "Hildr Sigrún",
              "phone": "1234567890",
              "email": "Hildr@radfx.com",
            },
            "created_at": "2021-10-16T14:24:34.875Z",
            "updated_at": "2021-10-16T14:24:34.875Z",
            "name": "space chocolate",
            "id": 2,
            "description": "mars bars",
            "verified_at": "2021-10-16T14:24:34.875Z",
            "disabled_at": "2021-10-16T14:24:34.875Z",
            "deleted_at": "2021-10-16T14:24:34.875Z",
            status: 'cancelled'
          },
        ]
      })
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
                placeholder="Search agencies"
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
              rows={projects.data}
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