import React from 'react';
import Typography from '@mui/material/Typography';

import { makeStyles } from '@material-ui/core/styles';

export default function Splash() {

    return (
        <> 
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          
        </Typography>
        Radiation Effects Testing is used to test the effects of high energy ions on electronics. The primary application for this is to test electronics to determine how they will function in space. In space, satellites and manned spacecraft are constantly bombarded with high energy radiation of various forms. Due to the high cost of getting materials into space, it is not feasible to replace electronics that have failed. This means that extensive testing must be performed on earth to ensure that electronics will not fail in a high radiation environment. 
        </>
    )
}