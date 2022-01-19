import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

function createData(Device, Program, Organization) {
  return {Device, Program, Organization};
}

const rows = [
  createData('Project 1', 'Program 1', 'Organization 1'),
  createData('Project 2', 'Program 2', 'Organization 2'),
  createData('Project 3', 'Program 3', 'Organization 3'),
  createData('Project 4', 'Program 4', 'Organization 4'),
  createData('Project 5', 'Program 5', 'Organization 5'),
];

export default function Projects(props) {
  return (

    <TableContainer style={{ padding: '1rem' }}>
    <Paper variant="outlined" style={{ padding: '2rem' }}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Devices under test</TableCell>
            <TableCell align="center">Program</TableCell>
            <TableCell align="center">Organization</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Device}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Device}
              </TableCell>
              <TableCell align="center">{row.Program}</TableCell>
              <TableCell align="center">{row.Organization}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </Paper>
        <Button justifycontent="center" variant="contained" id="tester-create-project" disableElevation href="/request/create">
            Create +
        </Button>
    </TableContainer>
  );
}
