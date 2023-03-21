import { Card, CardContent, Typography, Container, Grid, Box } from '@mui/material'
import "./Experience.css"
import React from 'react'

const Experience = (props: {clicked: boolean ;}) => {
    console.log(props.clicked)
  return (
    <Container sx={{ mb: 2}}>
        <Card>
            <CardContent>
                <Typography variant='h6'>
                    EXPERIENCE
                </Typography>
            </CardContent> 
            <CardContent sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center", gap: 10}}>
                <Typography variant='subtitle1' className={ props.clicked ? "workDateLight" : "workDateDark"}>
                    2022 - 2023
                </Typography>
                <Box sx={{flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start"}}>
                <Typography variant='subtitle1' sx={{flex: "1", fontSize: "larger"}} className={props.clicked ? "workDetailsLight" : "workDetailsDark"}>
                    <strong>Trainee at Integrify</strong>
                </Typography>
                <Typography variant='subtitle1' sx={{flex: "1"}} className={props.clicked ? "workDetailsLight" : "workDetailsDark"}>
                    <ul style={{listStyleType: "none"}}>
                        <li>Learned cutting edge technologies that're popular in the programming world</li>
                        <li>Built several frontend and fullstack projects</li>
                        <li>Led teammates on seperate occasions during projects and tutored other trainees</li>
                    </ul>
                </Typography>
                </Box>
            </CardContent>
            <CardContent sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center", gap: 10}}>
                <Typography variant='subtitle1' className={ props.clicked ? "workDateLight" : "workDateDark"}>
                    2021 - 2022
                </Typography>
                <Box sx={{flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start"}}>
                <Typography variant='subtitle1' sx={{flex: "1", fontSize: "larger"}} className={props.clicked ? "workDetailsLight" : "workDetailsDark"}>
                    <strong>Research and development at VertoPay</strong>
                </Typography>
                <Typography variant='subtitle1' sx={{flex: "1"}} className={props.clicked ? "workDetailsLight" : "workDetailsDark"}>
                    <ul style={{listStyleType: "none"}}>
                        <li>Researched options for online payments in Lebanon</li>
                        <li>Tried several online Banking and crypto currencies to match availability in the region</li>
                        <li>Interviewed promissing candidates to help build a network of crypto traders in Beirut</li>
                    </ul>
                </Typography>
                </Box>
            </CardContent>
            <CardContent sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center", gap: 10}}>
                <Typography variant='subtitle1' className={ props.clicked ? "workDateLight" : "workDateDark"}>
                    2016 - 2016
                </Typography>
                <Box sx={{flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start"}}>
                <Typography variant='subtitle1' sx={{flex: "1", fontSize: "larger"}} className={props.clicked ? "workDetailsLight" : "workDetailsDark"}>
                    <strong>Junior Web Developer at ReAble</strong>
                </Typography>
                <Typography variant='subtitle1' sx={{flex: "1"}} className={props.clicked ? "workDetailsLight" : "workDetailsDark"}>
                    <ul style={{listStyleType: "none"}}>
                        <li>Determined coding requirements for site creation, including payment and tracking capability</li>
                        <li>Tried several online Banking and crypto currencies to match availability in the region</li>
                        <li>Interviewed promissing candidates to help build a network of crypto traders in Beirut</li>
                    </ul>
                </Typography>
                </Box>
            </CardContent>
            <CardContent sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center", gap: 10}}>
                <Typography variant='subtitle1' className={ props.clicked ? "workDateLight" : "workDateDark"}>
                    2014 - 2016
                </Typography>
                <Box sx={{flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start"}}>
                <Typography variant='subtitle1' sx={{flex: "1", fontSize: "larger"}} className={props.clicked ? "workDetailsLight" : "workDetailsDark"}>
                    <strong>Head Cashier at Ubc, Lavabet, Lava110 Bet, Beirut</strong>
                </Typography>
                <Typography variant='subtitle1' sx={{flex: "1"}} className={props.clicked ? "workDetailsLight" : "workDetailsDark"}>
                    <ul style={{listStyleType: "none"}}>
                        <li>Mentored new team members on POS system operation, customer service strategies and sales goals</li>
                        <li>Worked closely with supervisors and manager to solve problems and handle customer concerns</li>
                    </ul>
                </Typography>
                </Box>
            </CardContent>
        </Card>     
    </Container>
  )
}

export default Experience