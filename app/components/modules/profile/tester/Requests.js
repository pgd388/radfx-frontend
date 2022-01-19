import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function createData(device, organization) {
  return {
    device,
    organization,
    history: [
      {
        request_date: '2020-01-02',
        approve_date: '2020-01-03',
        schedule_date: '2020-02-04',
        facility: 'A&M',
        energy_level: '60',
        status: ContainedButtons(),
        view: TextButtons()
      },
      {
        request_date: '2020-02-02',
        approve_date: '2020-02-03',
        schedule_date: '2020-03-04',
        facility: 'Berkeley',
        energy_level: '108.01',
        status: ContainedButtons(), 
        view: TextButtons(),
      },
    ],
  };
}

function TextButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button href="#text-buttons">View</Button>
    </Stack>
  );
}

function ContainedButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained">Approve</Button>
      <Button variant="contained">Deny</Button>
      <Button variant="contained">Modify</Button>
    </Stack>
  );
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.device}
        </TableCell>
        <TableCell>{row.organization}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date Requested</TableCell>
                    <TableCell>Date Approved</TableCell>
                    <TableCell align="right">Date Scheduled</TableCell>
                    <TableCell align="right">Facility</TableCell>
                    <TableCell align="right">Energy Level</TableCell>
                    <TableCell align="center">Status</TableCell>
                    <TableCell>View</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.request_date}>
                      <TableCell component="th" scope="row">
                        {historyRow.request_date}
                      </TableCell>
                      <TableCell>{historyRow.approve_date}</TableCell>
                      <TableCell align="right">{historyRow.schedule_date}</TableCell>
                      <TableCell align="right">{historyRow.facility}</TableCell>
                      <TableCell align="right">{historyRow.energy_level}</TableCell>
                      <TableCell align="right">{historyRow.status}</TableCell>
                      <TableCell align="right">{historyRow.view}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    facility: PropTypes.string.isRequired,
    organization: PropTypes.string.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        request_date: PropTypes.string.isRequired,
        approve_date: PropTypes.string.isRequired,
        schedule_date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    device: PropTypes.string.isRequired,
  }).isRequired,
};

const rows = [
  createData('UV Sensor', "Program #1", "Org #1", "Berkerely"),
  createData('Da Bomb', "Program #2", "Org #2", "Texas A&M"),,
  createData('Illuminati', "Program #3", "Org #3", "NASA"),
  createData('Rocket', "Program #4", "Org #4", "Berkerely"),
  createData('Satellite', "Program #5", "Org #5", "Texas A&M"),
];

export default function Requests() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell/>
            <TableCell>Devices Under Test</TableCell>
            <TableCell>Organization</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.device} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
