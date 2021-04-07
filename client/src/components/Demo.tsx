import { Box, Grid, Typography } from '@material-ui/core'
import React from 'react'

function Demo() {
    return (
        <Grid container spacing={3} >
            <Grid item xs={12}>
                <Typography variant="h2">MERN Template</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body1">
                    <strong>Welcome to the MERN Template.</strong>
                    <br/>@Author: tr3ysmith
                    <br/>
                    <br/>
                    To get started, create a component and declare it inside the App.tsx file. Replace the demo component with yours.
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Demo
