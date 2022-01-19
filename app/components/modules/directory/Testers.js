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

function customCheckbox(theme) {
  return {
    '& .MuiCheckbox-root svg': {
      width: 16,
      height: 16,
      backgroundColor: 'transparent',
      border: `1px solid ${theme.palette.mode === 'light' ? '#d9d9d9' : 'rgb(67, 67, 67)'
        }`,
      borderRadius: 2,
    },
    '& .MuiCheckbox-root svg path': {
      display: 'none',
    },
    '& .MuiCheckbox-root.Mui-checked:not(.MuiCheckbox-indeterminate) svg': {
      backgroundColor: '#1890ff',
      borderColor: '#1890ff',
    },
    '& .MuiCheckbox-root.Mui-checked .MuiIconButton-label:after': {
      position: 'absolute',
      display: 'table',
      border: '2px solid #fff',
      borderTop: 0,
      borderLeft: 0,
      transform: 'rotate(45deg) translate(-50%,-50%)',
      opacity: 1,
      transition: 'all .2s cubic-bezier(.12,.4,.29,1.46) .1s',
      content: '""',
      top: '50%',
      left: '39%',
      width: 5.71428571,
      height: 9.14285714,
    },
    '& .MuiCheckbox-root.MuiCheckbox-indeterminate .MuiIconButton-label:after': {
      width: 8,
      height: 8,
      backgroundColor: '#1890ff',
      transform: 'none',
      top: '39%',
      border: 0,
    },
  };
}

const defaultTheme = createTheme();
const useStyles = makeStyles(
  (theme) =>
    createStyles({
      root: {
        border: 0,
        backgroundColor: '#fff',
        color:
          theme.palette.mode === 'light'
            ? 'rgba(0,0,0,.85)'
            : 'rgba(255,255,255,0.85)',
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
        WebkitFontSmoothing: 'auto',
        letterSpacing: 'normal',
        '& .MuiDataGrid-columnsContainer': {
          backgroundColor: theme.palette.mode === 'light' ? '#f0f0f0' : '#1d1d1d',
        },
        '& .MuiDataGrid-iconSeparator': {
          display: 'none',
        },
        '& .MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
          borderRight: `1px solid ${theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'
            }`,
        },
        '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
          borderBottom: `1px solid ${theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'
            }`,
        },
        '& .MuiDataGrid-cell': {
          color:
            theme.palette.mode === 'light'
              ? 'rgba(0,0,0,.85)'
              : 'rgba(255,255,255,0.65)',
        },
        '& .MuiPaginationItem-root': {
          borderRadius: 0,
        },
        '& .MuiDataGrid-footerContainer': {
          backgroundColor: theme.palette.mode === 'light' ? '#fafafa' : '#1d1d1d',
        },
        ...customCheckbox(theme),
      },
    }),
  { defaultTheme },
);

const columns = [
  {
    field: 'full_name', headerName: 'Name', flex: 1,
    editable: false,
  },
  {
    field: 'email', headerName: 'email', flex: 1,
    editable: false,
  },
]

export default function Testers(props) {
    const [testers, setTesters] = useState({
        "page": 1,
        "per_page": 20,
        "total_page": 1,
        "total_count": 2,
        "data": [
          {
            "created_at": "2021-10-16T14:24:34.875Z",
            "updated_at": "2021-10-16T14:24:34.875Z",
            "first_name": "Viraja",
            "last_name": "Jagadisha",
            "affiliation": "",
            "phone": "1234567890",
            "name": "tester_0",
            "id": 0,
            "full_name": "Viraja Jagadisha",
            "email": "Viraja@radfx.com",
            "verified_at": "2021-10-16T14:24:34.875Z",
            "disabled_at": "2021-10-16T14:24:34.875Z",
            "deleted_at": "2021-10-16T14:24:34.875Z"
          },
          {
            "created_at": "2021-10-16T14:24:34.875Z",
            "updated_at": "2021-10-16T14:24:34.875Z",
            "first_name": "Hildr",
            "last_name": "Sigrún",
            "affiliation": "",
            "phone": "1234567890",
            "name": "tester_1",
            "id": 1,
            "full_name": "Hildr Sigrún",
            "email": "Hildr@radfx.com",
            "verified_at": "2021-10-16T14:24:34.875Z",
            "disabled_at": "2021-10-16T14:24:34.875Z",
            "deleted_at": "2021-10-16T14:24:34.875Z"
          }
        ]
      })
  const classes = useStyles();
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
              rows={testers.data}
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