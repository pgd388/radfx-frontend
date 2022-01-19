import React, {useEffect, useState} from 'react';
import * as API from '@radfx-api';
import Typography from '@mui/material/Typography';
import Page from '@/templates/Page'
import { makeStyles } from '@material-ui/core/styles';

export default function Home() {
  const [user, setUser] = useState({user_name: "___"})
  async function fetchDataUser() {
    const result = await API.getUser(1);
    console.log(result)
    setUser(result.data);
    console.log(result.data)
  }
  useEffect(() => {
    fetchDataUser()
    }, [])
  return (
    <>
      <Page title="RADFX" >
        
        <Typography
          component="h2"
          variant="h3"
          color="inherit"
          align="center"
          paragraph
          sx={{ flex: 1 }}
        >
          Introduction to radiation effects testing        
        </Typography>
        <div> {user.user_name} </div>
        <Typography
          component="h2"
          variant="body1"
          color="inherit"
          align="center"
          paragraph
          sx={{ flex: 1 }}
        >
          Radiation Effects Testing is used to test the effects of high energy ions on electronics. The primary application for this is to test electronics to determine how they will function in space. In space, satellites and manned spacecraft are constantly bombarded with high energy radiation of various forms. Due to the high cost of getting materials into space, it is not feasible to replace electronics that have failed. This means that extensive testing must be performed on earth to ensure that electronics will not fail in a high radiation environment.
        </Typography>
        <Typography
          component="h2"
          variant="h3"
          color="inherit"
          align="center"
          paragraph
          sx={{ flex: 1 }}
        >
          How testing is performed        
        </Typography>
        <Typography
          component="h2"
          variant="body1"
          color="inherit"
          align="center"
          paragraph
          sx={{ flex: 1 }}
        >
          Radiation testing is performed using a particle accelerator. Electronics are placed in a chamber, and the particle accelerator is then used to shoot ions at high energy levels at the electronics. The effects of the ions are recorded, and a report is sent to the group that commissioned the testing. Not all ions and energy levels can be tested at once. It can take a large amount of time to change energy levels and ions.       
        </Typography>
        <Typography
          component="h2"
          variant="h3"
          color="inherit"
          align="center"
          paragraph
          sx={{ flex: 1 }}
        >
          Participating facilities
        </Typography>
        <Typography
          component="h2"
          variant="body1"
          color="inherit"
          align="center"
          paragraph
          sx={{ flex: 1 }}
        >
          There are currently three facilities that this project takes into consideration, each of which has been operating independently and with slightly different capabilities. Consequently, each facility has developed different testing protocols and communication systems that must be taken into account when developing a centralized system. 

Lawrence Berkeley National Labs (LBNL)
●	Particle Accelerator: 88 Inch Cyclotron
●	Operation Hours: 24hrs
●	Has the ability to test multiple ions in a ‘cocktail’
●	Switching time: Switching ions takes 3 minutes for ions within a cocktail and 4 hours to change the ion cocktail

Texas A&M University (TAMU)
●	Particle Accelerator: K150 Cyclotron 
●	Operation Hours: 24hrs
●	Switching Times: Switching ions takes between 15 and 120 minutes plus delays

NASA Space Radiation Laboratory (NSRL)
●	Particle Accelerator: Synchrotron
●	Operational Hours: 8:00 A.M. - 12:00 A.M. (16 hrs.)
●	Switching TImes: Switching ions takes 1 to 2 minutes plus delays

        </Typography>
      </Page>
    </>
  )
}