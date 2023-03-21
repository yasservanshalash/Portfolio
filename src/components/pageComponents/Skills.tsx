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
            <CardContent>
                <Box >
                <Typography sx={{fontWeight: "bolder", mb: 3}}>Front End</Typography>
                <Box sx={{ display: "flex", alignItems: "center"}}>
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
                    <Grid item xs={6}>
                    <Typography variant='subtitle1' sx={{ mb: 1}}>
                        MUI
                    </Typography>
                    <LinearProgress variant="determinate" value={95} color="inherit"/>
                    </Grid>
                    <Grid item xs={6}>
                    <Typography variant='subtitle1' sx={{ mb: 1}}>
                        Bootstrap
                    </Typography>
                    <LinearProgress variant="determinate" value={70} color="inherit"/>
                    </Grid>
                    <Grid item xs={6}>
                    <Typography variant='subtitle1' sx={{ mb: 1}}>
                        Sass
                    </Typography>
                    <LinearProgress variant="determinate" value={85} color="inherit"/>
                    </Grid>
                    <Grid item xs={6}>
                    <Typography variant='subtitle1' sx={{ mb: 1}}>
                        BEM
                    </Typography>
                    <LinearProgress variant="determinate" value={95} color="inherit"/>
                    </Grid>
                </Grid>
                </Box>
                </Box>
                <Box >
                <Typography sx={{fontWeight: "bolder", my: 3}}>Back End</Typography>
                <Box sx={{ display: "flex", alignItems: "center"}}>
                <Grid container spacing={2} >
                <Grid item xs={6}>
                    <Typography variant='subtitle1' sx={{ mb: 1}}>
                        REST
                    </Typography>
                    <LinearProgress variant="determinate" value={100} color="inherit"/>
                    </Grid>
                    <Grid item xs={6}>
                    <Typography variant='subtitle1' sx={{ mb: 1}}>
                        NodeJS
                    </Typography>
                    <LinearProgress variant="determinate" value={95} color="inherit"/>
                    </Grid>
                    <Grid item xs={6}>
                    <Typography variant='subtitle1' sx={{ mb: 1}}>
                        ExpressJS
                    </Typography>
                    <LinearProgress variant="determinate" value={95} color="inherit"/>
                    </Grid>
                    <Grid item xs={6}>
                    <Typography variant='subtitle1' sx={{ mb: 1}}>
                        MongoDB
                    </Typography>
                    <LinearProgress variant="determinate" value={90} color="inherit"/>
                    </Grid>
                    <Grid item xs={6}>
                    <Typography variant='subtitle1' sx={{ mb: 1}}>
                        Mongoose
                    </Typography>
                    <LinearProgress variant="determinate" value={85} color="inherit"/>
                    </Grid>
                    <Grid item xs={6}>
                    <Typography variant='subtitle1' sx={{ mb: 1}}>
                        PassportJS
                    </Typography>
                    <LinearProgress variant="determinate" value={70} color="inherit"/>
                    </Grid>
                    <Grid item xs={6}>
                    <Typography variant='subtitle1' sx={{ mb: 1}}>
                        JWT
                    </Typography>
                    <LinearProgress variant="determinate" value={85} color="inherit"/>
                    </Grid>
                    <Grid item xs={6}>
                    <Typography variant='subtitle1' sx={{ mb: 1}}>
                        TypeScript
                    </Typography>
                    <LinearProgress variant="determinate" value={90} color="inherit"/>
                    </Grid>
                    <Grid item xs={6}>
                    <Typography variant='subtitle1' sx={{ mb: 1}}>
                        PostgreSQL
                    </Typography>
                    <LinearProgress variant="determinate" value={80} color="inherit"/>
                    </Grid>
                    <Grid item xs={6}>
                    <Typography variant='subtitle1' sx={{ mb: 1}}>
                        Testing
                    </Typography>
                    <LinearProgress variant="determinate" value={80} color="inherit"/>
                    </Grid>
                </Grid>
                </Box>
                </Box>
                <Box >
                <Typography sx={{fontWeight: "bolder", my: 3}}>In progress</Typography>
                <Box sx={{ display: "flex", alignItems: "center"}}>
                <Grid container spacing={2} >
                <Grid item xs={6}>
                    <Typography variant='subtitle1' sx={{ mb: 1}}>
                        Bash
                    </Typography>
                    <LinearProgress variant="determinate" value={0} color="inherit"/>
                    </Grid>
                    <Grid item xs={6}>
                    <Typography variant='subtitle1' sx={{ mb: 1}}>
                        Docker
                    </Typography>
                    <LinearProgress variant="determinate" value={0} color="inherit"/>
                    </Grid>
                    <Grid item xs={6}>
                    <Typography variant='subtitle1' sx={{ mb: 1}}>
                        CI/CD
                    </Typography>
                    <LinearProgress variant="determinate" value={0} color="inherit"/>
                    </Grid>
                    <Grid item xs={6}>
                    <Typography variant='subtitle1' sx={{ mb: 1}}>
                        Actions
                    </Typography>
                    <LinearProgress variant="determinate" value={0} color="inherit"/>
                    </Grid>
                    <Grid item xs={6}>
                    <Typography variant='subtitle1' sx={{ mb: 1}}>
                        EC2
                    </Typography>
                    <LinearProgress variant="determinate" value={0} color="inherit"/>
                    </Grid>
                    <Grid item xs={6}>
                    <Typography variant='subtitle1' sx={{ mb: 1}}>
                        IAM
                    </Typography>
                    <LinearProgress variant="determinate" value={0} color="inherit"/>
                    </Grid>
                    <Grid item xs={6}>
                    <Typography variant='subtitle1' sx={{ mb: 1}}>
                        S3
                    </Typography>
                    <LinearProgress variant="determinate" value={0} color="inherit"/>
                    </Grid>
                    <Grid item xs={6}>
                    <Typography variant='subtitle1' sx={{ mb: 1}}>
                        RDS
                    </Typography>
                    <LinearProgress variant="determinate" value={0} color="inherit"/>
                    </Grid>
                    <Grid item xs={6}>
                    <Typography variant='subtitle1' sx={{ mb: 1}}>
                        Lambda
                    </Typography>
                    <LinearProgress variant="determinate" value={0} color="inherit"/>
                    </Grid>
                    <Grid item xs={6}>
                    <Typography variant='subtitle1' sx={{ mb: 1}}>
                        AWS
                    </Typography>
                    <LinearProgress variant="determinate" value={0} color="inherit"/>
                    </Grid>
                </Grid>
                </Box>
                </Box>
            </CardContent>
        </Card>
    </Container>
  )
}

export default Skills