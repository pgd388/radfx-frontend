import React, { useState } from 'react';
import Head from 'next/head'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import TextField from '@mui/material/TextField';
import Typography from '@material-ui/core/Typography';
import Footer from '@/elements/Footer';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import IonsLBL10 from '@/modules/IonsLBL10';
import IonsLBL16 from '@/modules/IonsLBL16';
import IonsLBL20 from '@/modules/IonsLBL20';
import IonsLBL30 from '@/modules/IonsLBL30';
import IonsLBL40 from '@/modules/IonsLBL40';
import IonsLBL45 from '@/modules/IonsLBL45';
import IonsNsrl from '@/modules/IonsNsrl';
import IonsNsrlHigh from '@/modules/IonsNsrlHigh';
import IonsTamu15 from '@/modules/IonsTamu15';
import IonsTamu25 from '@/modules/IonsTamu25';
import IonsTamu40 from '@/modules/IonsTamu40';
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },

    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 600,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    margin: {
        margin: theme.spacing(1),
    },
    menuItem: {
        minWidth: 600
    }
}));

const marks_lbnl = [
    {
        value: 4.5,
        label: '4.5',
    },
    {
        value: 10,
        label: '10',
    },
    {
        value: 16,
        label: '16',
    },
    {
        value: 20,
        label: '20',
    },
    {
        value: 30,
        label: '30',
    },
];

const marks_tamu = [
    {
        value: 15,
        label: '15',
    },
    {
        value: 25,
        label: '25',
    },
    {
        value: 40,
        label: '40',
    }
];

function valuetext(value) {
    return `${value}`;
}

function valueLabelFormat(value) {
    return `${value}(AMeV)`;
}

export default function Create(props) {
    const { title, children } = props;
    const [is_training_complete, setIsTrainingComplete] = useState('');
    const [is_export_control_restricted, setIsExportControlRetricted] = useState('');
    const [is_electronically_safe, setIsElectronicallySafe] = useState('');
    const [is_vacuum, setIsVacuum] = useState('');
    const [facility, setFacility] = useState('');
    const [is_visible_lbl_10, setIsVisibleLBL10] = useState(false);
    const [is_visible_lbl_16, setIsVisibleLBL16] = useState(false)
    const [is_visible_lbl_20, setIsVisibleLBL20] = useState(false);
    const [is_visible_lbl_30, setIsVisibleLBL30] = useState(false);
    const [is_visible_lbl_40, setIsVisibleLBL40] = useState(false);
    const [is_visible_lbl_45, setIsVisibleLBL45] = useState(false);
    const [is_visible_tamu_15, setIsVisibleTAMU15] = useState(false);
    const [is_visible_tamu_25, setIsVisibleTAMU25] = useState(false);
    const [is_visible_tamu_40, setIsVisibleTAMU40] = useState(false);
    const [is_visible_nslb, setIsVisibleNSLB] = useState(false);
    const [nasa_test_type, setNasaTestType] = useState('');

    const [request, setRequest] = useState({
        "creator": {
          "first_name": "tester",
          "last_name": "1",
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
      })
    const classes = useStyles();

    const handleVacuumChange = (event) => {
        setIsVacuum(event.target.value);
    };

    const handleTrainingChange = (event) => {
        setIsTrainingComplete(event.target.value);
    };

    const handleExportControlRestrictedChange = (event) => {
        setIsExportControlRetricted(event.target.value);
    };

    const handleElectronicallySafeChange = (event) => {
        setIsElectronicallySafe(event.target.value);
    };

    const handleSetFacility = (event) => {
        setFacility(event.target.value);
    };

    const handleSetNasaTestType = (event) => {
        setNasaTestType(event.target.value)
    }

    const handleLblEnergy = (event) => {
        // console.log(event)
        if (event.target.value === 10) {
            if (is_visible_lbl_10 === false) {
                setIsVisibleLBL10(true)
            }
        } else {
            if (is_visible_lbl_10 === true) {
                setIsVisibleLBL10(false)
            }
        }
        if (event.target.value === 16) {
            if (is_visible_lbl_16 === false) {
                setIsVisibleLBL16(true)
            }
        } else {
            if (is_visible_lbl_16 === true) {
                setIsVisibleLBL16(false)
            }
        }
        if (event.target.value === 20) {
            if (is_visible_lbl_20 === false) {
                setIsVisibleLBL20(true)
            }
        } else {
            if (is_visible_lbl_20 === true) {
                setIsVisibleLBL20(false)
            }
        }
        if (event.target.value === 30) {
            if (is_visible_lbl_30 === false) {
                setIsVisibleLBL30(true)
            }
        } else {
            if (is_visible_lbl_30 === true) {
                setIsVisibleLBL30(false)
            }
        }
        if (event.target.value === 40) {
            if (is_visible_lbl_40 === false) {
                setIsVisibleLBL40(true)
            }
        } else {
            if (is_visible_lbl_40 === true) {
                setIsVisibleLBL40(false)
            }
        }
        if (event.target.value === 4.5) {
            if (is_visible_lbl_45 === false) {
                setIsVisibleLBL45(true)
            }
        } else {
            if (is_visible_lbl_45 === true) {
                setIsVisibleLBL45(false)
            }
        }
    }

    const handleTamuEnergy = (event) => {
        if (event.target.value === 15) {
            if (is_visible_tamu_15 === false) {
                setIsVisibleTAMU15(true)
            }
        } else {
            if (is_visible_tamu_15 === true) {
                setIsVisibleTAMU15(false)
            }
        }
        if (event.target.value === 25) {
            if (is_visible_tamu_25 === false) {
                setIsVisibleTAMU25(true)
            }
        } else {
            if (is_visible_tamu_25 === true) {
                setIsVisibleTAMU25(false)
            }
        }
        if (event.target.value === 40) {
            if (is_visible_tamu_40 === false) {
                setIsVisibleTAMU40(true)
            }
        } else {
            if (is_visible_tamu_40 === true) {
                setIsVisibleTAMU40(false)
            }
        }
    }
    return (
        <>
            <CssBaseline />
            <Head>
                <title>Create Request</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container maxWidth="lg">
                <main>
                    <form className={classes.root} noValidate autoComplete="off">
                        <Box sx={{ flexGrow: 1 }} style={{ backgroundColor: 'gray', padding: '1rem' }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}  >
                                    <Typography variant="h4" component="h3">
                                        Beam time request
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                        <br />
                        <Box sx={{ flexGrow: 1 }} style={{ padding: '1rem' }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} >
                                    <Typography variant="h5" component="h4">
                                        Contact information
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField disabled id="standard-required" label="First name" value={request.creator.first_name} variant="standard" />
                                    <TextField disabled id="standard-required" label="Last name" value={request.creator.last_name} variant="standard" />
                                    <TextField id="standard-required" label="Phone" defaultValue="" variant="standard" />
                                    <TextField id="standard-required" label="Email" defaultValue="" variant="standard" />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField id="standard-required" label="Organization" defaultValue="" variant="standard" />
                                    <TextField id="standard-required" label="Program" defaultValue="" variant="standard" />
                                </Grid>
                            </Grid>
                        </Box>
                        <br />
                        <hr style={{ height: '1px', backgroundColor: '#ccc', border: 'none' }} />
                        <br />
                        <Box sx={{ flexGrow: 1 }} style={{ padding: '1rem' }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant="h5" component="h4">
                                        Personel Participating in test
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField disabled id="standard-required" label="Name" value={request.name} variant="standard" />
                                    <TextField id="standard-required" label="Email" defaultValue="" variant="standard" />
                                    <TextField id="standard-required" label="Phone" defaultValue="" variant="standard" />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl variant="standard" className={classes.formControl} >
                                        <InputLabel id="is_training_complete-simple-select-label">Radiation worker 1 training completed?</InputLabel>
                                        <Select
                                            labelId="is_training_complete-simple-select-label"
                                            id="is_training_complete-simple-select"
                                            value={is_training_complete}
                                            onChange={handleTrainingChange}
                                            autoWidth
                                        >
                                            <MenuItem value={10} className={classes.menuItem}>yes</MenuItem>
                                            <br />
                                            <MenuItem value={20} className={classes.menuItem}>no</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </Box>
                        <br />
                        <hr style={{ height: '1px', backgroundColor: '#ccc', border: 'none' }} />
                        <br />
                        <Box sx={{ flexGrow: 1 }} style={{ padding: '1rem' }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant="h5" component="h4">
                                        Test information
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField id="standard-required" label="Devices under test" defaultValue="" variant="standard" />
                                    <TextField id="standard-required" label="Purpose of test" defaultValue="" variant="standard" />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField id="standard-required" label="Preferred Start Date" defaultValue="" variant="standard" />

                                    <TextField id="standard-required" label="Total # Hours" defaultValue="" variant="standard" />
                                    <TextField id="standard-required" label="Preferred Shifts" defaultValue="" variant="standard" />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl variant="standard" className={classes.formControl}>
                                        <InputLabel id="is_vacuum-simple-select-label">Will the run be conducted in air or vacuum?</InputLabel>
                                        <Select
                                            labelId="is_vacuum-simple-select-label"
                                            id="is_vacuum-simple-select"
                                            value={is_vacuum}
                                            onChange={handleVacuumChange}
                                            autoWidth
                                        >
                                            <MenuItem value={10} className={classes.menuItem}>yes</MenuItem>
                                            <br />
                                            <MenuItem value={20} className={classes.menuItem}>no</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl variant="standard" className={classes.formControl}>
                                        <InputLabel id="is_export_control_restricted-simple-select-label">Does this work have export control restrictions?</InputLabel>
                                        <Select
                                            labelId="is_export_control_restricted-simple-select-label"
                                            id="is_export_control_restricted-simple-select"
                                            value={is_export_control_restricted}
                                            onChange={handleExportControlRestrictedChange}
                                            autoWidth
                                        >
                                            <MenuItem value={10} className={classes.menuItem}>yes</MenuItem>
                                            <br />
                                            <MenuItem value={20} className={classes.menuItem}>no</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl variant="standard" className={classes.formControl}>
                                        <InputLabel id="is_electronically_safe-simple-select-label">Are all electrical/electronic equipment that will be used onsite electrically safe?</InputLabel>
                                        <Select
                                            labelId="is_electronically_safe-simple-select-label"
                                            id="is_electronically_safe-simple-select"
                                            value={is_electronically_safe}
                                            onChange={handleElectronicallySafeChange}
                                            autoWidth
                                        >
                                            <MenuItem value={10} className={classes.menuItem}>yes</MenuItem>
                                            <br />
                                            <MenuItem value={20} className={classes.menuItem}>no</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </Box>
                        <br />
                        <hr style={{ height: '1px', backgroundColor: '#ccc', border: 'none' }} />
                        <br />
                        <Box sx={{ flexGrow: 1 }} style={{ padding: '1rem' }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant="h5" component="h4">
                                        Requested ions
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl variant="standard" className={classes.formControl}>
                                        <InputLabel id="facility-simple-select-label">Testing facility</InputLabel>
                                        <Select
                                            labelId="facility-simple-select-label"
                                            id="facility-simple-select"
                                            value={facility}
                                            onChange={handleSetFacility}
                                            autoWidth
                                        >
                                            <MenuItem value={'lbnl'} className={classes.menuItem}>Lawrence Berkeley National Laboratory </MenuItem>
                                            <br />
                                            <MenuItem value={'nsbl'} className={classes.menuItem}>NASA Space Radiation Laboratory</MenuItem>
                                            <br />
                                            <MenuItem value={'tamu'} className={classes.menuItem}>Texas A&M University</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                    <Box style={facility === 'lbnl' ? { display: '', margin: '10px' } : { display: 'none' }}>
                                        <Typography variant="subtitle1" gutterBottom component="div">
                                            Cocktail (AMeV)
                                        </Typography>
                                        <Slider
                                            aria-label="Restricted values"
                                            valueLabelFormat={valueLabelFormat}
                                            getAriaValueText={valuetext}
                                            step={null}
                                            valueLabelDisplay="auto"
                                            marks={marks_lbnl}
                                            max={30}
                                            onChange={(e) => handleLblEnergy(e)}
                                        />
                                    </Box>
                                    <Box style={facility === 'tamu' ? { display: '', margin: '10px' } : { display: 'none' }}>
                                        <Typography variant="subtitle1" gutterBottom component="div">
                                            Energy
                                        </Typography>
                                        <Slider
                                            aria-label="Restricted values"
                                            valueLabelFormat={valueLabelFormat}
                                            getAriaValueText={valuetext}
                                            step={null}
                                            valueLabelDisplay="auto"
                                            marks={marks_tamu}
                                            max={40}
                                            onChange={(e) => handleTamuEnergy(e)}
                                        />
                                    </Box>
                                    <Box style={facility === 'nsbl' ? { display: '', margin: '10px' } : { display: 'none' }}>
                                        <Typography variant="subtitle1" gutterBottom component="div">
                                            Cocktail (AMeV)
                                        </Typography>
                                        <Slider
                                            aria-label="Restricted values"
                                            valueLabelFormat={valueLabelFormat}
                                            getAriaValueText={valuetext}
                                            step={null}
                                            valueLabelDisplay="auto"
                                            marks={marks_tamu}
                                            max={40}
                                            onChange={(e) => handleTamuEnergy(e)}
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={6}>
                                    <Box style={facility === 'nsbl' ? { display: '', margin: '10px' } : { display: 'none' }}>
                                        <FormControl variant="standard" className={classes.formControl}>
                                            <InputLabel id="nasa_test_type-simple-select-label">Test type</InputLabel>
                                            <Select
                                                labelId="nasa_test_type-simple-select-label"
                                                id="nasa_test_type-simple-select"
                                                value={nasa_test_type}
                                                onChange={handleSetNasaTestType}
                                                autoWidth
                                            >
                                                <MenuItem value={'electronics'} className={classes.menuItem}>electronics testing</MenuItem>
                                                <br />
                                                <MenuItem value={'radiobiology'} className={classes.menuItem}>radiobiology</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    {/* <TextField id="standard-required" label="Ion" defaultValue="" variant="standard" />
                                    <TextField id="standard-required" label="Cocktail (AMeV)" defaultValue="" variant="standard" />
                                    <TextField id="standard-required" label="Energy (MeV/nucleon)" defaultValue="" variant="standard" />
                                    <TextField id="standard-required" label="LET (MeV/mg/cm2)" defaultValue="" variant="standard" />
                                    <TextField id="standard-required" label="Max Fluence (J / cm2 )" defaultValue="" variant="standard" />
                                    <TextField id="standard-required" label="Desired Flux (ions/cm2/sec)" defaultValue="" variant="standard" /> */}
                                    <Box style={facility === 'lbnl' ? { display: '' } : { display: 'none' }}>
                                        <Box style={is_visible_lbl_10 ? { display: '' } : { display: 'none' }}>
                                            <IonsLBL10 />
                                        </Box>
                                        <Box style={is_visible_lbl_16 ? { display: '' } : { display: 'none' }}>
                                            <IonsLBL16 />
                                        </Box>
                                        <Box style={is_visible_lbl_20 ? { display: '' } : { display: 'none' }}>
                                            <IonsLBL20 />
                                        </Box>
                                        <Box style={is_visible_lbl_30 ? { display: '' } : { display: 'none' }}>
                                            <IonsLBL30 />
                                        </Box>
                                        <Box style={is_visible_lbl_40 ? { display: '' } : { display: 'none' }}>
                                            <IonsLBL40 />
                                        </Box>
                                        <Box style={is_visible_lbl_45 ? { display: '' } : { display: 'none' }}>
                                            <IonsLBL45 />
                                        </Box>
                                    </Box>
                                    <Box style={facility === 'tamu' ? { display: '' } : { display: 'none' }}>
                                        <Box style={is_visible_tamu_15 ? { display: '' } : { display: 'none' }}>
                                            <IonsTamu15 />
                                        </Box>
                                        <Box style={is_visible_tamu_25 ? { display: '' } : { display: 'none' }}>
                                            <IonsTamu25 />
                                        </Box>
                                        <Box style={is_visible_tamu_40 ? { display: '' } : { display: 'none' }}>
                                            <IonsTamu40 />
                                        </Box>
                                    </Box>
                                    <Box style={facility === 'nsbl' ? { display: '' } : { display: 'none' }}>
                                        <IonsNsrl />
                                        <span>high energy</span>
                                        <IonsNsrlHigh />
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </form>
                    <br />
                    <Button variant="contained" size="large" color="primary" className={classes.margin}>
                        Submit
                    </Button>
                </main>
            </Container>
            <Footer title="Site Name" description="Something here to give the footer a purpose!" />
        </>
    )
}