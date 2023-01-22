import React from 'react'
import { Container } from '@mui/material'
import Profile from '../components/pageComponents/Profile'
import Education from '../components/pageComponents/Education'
const EducationPage = ({clicked} : {clicked: boolean}) => {
  return (
    <div style={{backgroundColor: clicked? "black" : "white"}}>
    <Container sx={{ width: "100%", height: "100vh", display: "flex", justifyContent: "space-around", backgroundColor: clicked ? "black" : "white"}}>
        <Profile themeClicked={clicked}/>
        <Container sx={{maxWidth: 1000}}>
        <Education />
        </Container>
    </Container>
    </div>  )
}

export default EducationPage