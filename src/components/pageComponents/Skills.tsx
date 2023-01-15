import { CardContent, Container, Card, Typography, Divider, Grid } from '@mui/material'
import {Box} from '@mui/material'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import React from 'react'


const Skills = () => {
  return (
    <Container>
        <Card>
            <CardContent>
            <Typography variant="h6" sx={{ mb: 1}}>Skills</Typography>
            </CardContent>
            <Divider />
            <CardContent sx={{ display: "flex", alignItems: "center"}}>
                <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Typography variant='h6' sx={{ mb: 1}}>
                        HTML
                    </Typography>
                    <LinearProgress variant="determinate" value={100} />
                    </Grid>
                    <Grid item xs={6}>
                    <Typography variant='h6' sx={{ mb: 1}}>
                        CSS
                    </Typography>
                    <LinearProgress variant="determinate" value={95} />
                    </Grid>
                    <Grid item xs={6}>
                    <Typography variant='h6' sx={{ mb: 1}}>
                        Javascript
                    </Typography>
                    <LinearProgress variant="determinate" value={95} />
                    </Grid>
                    <Grid item xs={6}>
                    <Typography variant='h6' sx={{ mb: 1}}>
                        React
                    </Typography>
                    <LinearProgress variant="determinate" value={100} />
                    </Grid>
                    <Grid item xs={6}>
                    <Typography variant='h6' sx={{ mb: 1}}>
                        Typescript
                    </Typography>
                    <LinearProgress variant="determinate" value={90} />
                    </Grid>
                    <Grid item xs={6}>
                    <Typography variant='h6' sx={{ mb: 1}}>
                        Redux
                    </Typography>
                    <LinearProgress variant="determinate" value={95} />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    </Container>
  )
}

export default Skills