import { CardContent, Container, Card, Typography, Divider, Grid } from '@mui/material'
import {Box} from '@mui/material'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import React from 'react'


const Skills = () => {
  return (
    <Container sx={{ mb: 2}}>
        <Card>
            <CardContent>
            <Typography variant="h6" sx={{ mb: 1}}>PROFESSIONAL SKILLS</Typography>
            </CardContent>
            <Divider />
            <CardContent sx={{ display: "flex", alignItems: "center"}}>
                <Grid container spacing={2} >
                <Grid item xs={6}>
                    <Typography variant='subtitle1' sx={{ mb: 1}}>
                        HTML
                    </Typography>
                    <LinearProgress variant="determinate" value={100} color="inherit"/>
                    </Grid>
                    <Grid item xs={6}>
                    <Typography variant='subtitle1' sx={{ mb: 1}}>
                        CSS
                    </Typography>
                    <LinearProgress variant="determinate" value={95} color="inherit"/>
                    </Grid>
                    <Grid item xs={6}>
                    <Typography variant='subtitle1' sx={{ mb: 1}}>
                        Javascript
                    </Typography>
                    <LinearProgress variant="determinate" value={95} color="inherit"/>
                    </Grid>
                    <Grid item xs={6}>
                    <Typography variant='subtitle1' sx={{ mb: 1}}>
                        React
                    </Typography>
                    <LinearProgress variant="determinate" value={100} color="inherit"/>
                    </Grid>
                    <Grid item xs={6}>
                    <Typography variant='subtitle1' sx={{ mb: 1}}>
                        Typescript
                    </Typography>
                    <LinearProgress variant="determinate" value={90} color="inherit"/>
                    </Grid>
                    <Grid item xs={6}>
                    <Typography variant='subtitle1' sx={{ mb: 1}}>
                        Redux
                    </Typography>
                    <LinearProgress variant="determinate" value={95} color="inherit"/>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    </Container>
  )
}

export default Skills