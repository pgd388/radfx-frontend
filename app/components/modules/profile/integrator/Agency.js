import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import BusinessIcon from '@mui/icons-material/Business';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import DescriptionIcon from '@mui/icons-material/Description';

export default function Agency(props) {
    return (
        <>
            <Container maxWidth="sm" style={{ padding: '1rem' }}>
                <Paper variant="outlined" style={{ padding: '2rem' }}>
                    <Grid container rowSpacing={4} columnSpacing={{ xs: 2, sm: 3, md: 4 }}>
                        <Grid item xs={12}>
                            <Typography variant="h6" >
                                Agency information
                            </Typography>
                        </Grid>
                        <Grid item xs={2} sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <BusinessIcon fontSize="small" style={{
                                color: 'gray'
                            }} />
                        </Grid>
                        <Grid item xs={10}>
                            <TextField
                                fullWidth
                                id="agency-name"
                                label="name"
                                defaultValue=""
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={2} sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <DescriptionIcon fontSize="small" style={{
                                color: 'gray'
                            }} />
                        </Grid>
                        <Grid item xs={10}>
                            <TextField
                                fullWidth
                                id="agency-description"
                                label="description"
                                defaultValue=""
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={2}/>
                        <Grid item xs={10}>
                            <Stack spacing={2} style={{ textAlign: 'center', marginTop: '20px' }}>
                                <Button variant="contained" id="agency-save-profile" disableElevation>
                                    save
                                </Button>
                            </Stack>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </>
    )
}