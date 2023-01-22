import React from 'react'
import { Container } from '@mui/material'
import Profile from '../components/pageComponents/Profile'
import Experience from '../components/pageComponents/Experience'
const ExperiencePage = ({clicked} : {clicked: boolean}) => {
  return (
    <div style={{backgroundColor: clicked? "black" : "white"}}>
    <Container sx={{ width: "100%", height: "100vh", display: "flex", justifyContent: "space-around", backgroundColor: clicked ? "black" : "white"}}>
        <Profile themeClicked={clicked}/>
        <Container sx={{maxWidth: 1000}}>
        <Experience clicked={clicked}/>
        </Container>
    </Container>
    </div>  )
}

export default ExperiencePage