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

export default function Agencies(props) {
  const classes = useDataGridStyles();
  const columns = [
    {
      field: 'name', headerName: 'Agency', flex: 1,
      editable: false,
    },
    {
      field: 'description', headerName: 'Description', flex: 1,
      editable: false,
    },
  ]
  
  const agencies = [
    { id: 0, name: 'MDA', description: 'missiles!!!'},
  ];
  
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
              rows={agencies}
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