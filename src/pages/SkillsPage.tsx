import React from 'react'
import { Container } from '@mui/material';
import Skills from '../components/pageComponents/Skills'
import Profile from '../components/pageComponents/Profile';
import About from '../components/pageComponents/About';
const SkillsPage = ({clicked}: {clicked: boolean ;}) => {
  return (
    <div style={{backgroundColor: clicked? "black" : "white"}}>
    <Container sx={{ width: "100%", height: "100vh", display: "flex", justifyContent: "space-around", backgroundColor: clicked ? "black" : "white"}}>
        <Profile themeClicked={clicked}/>
        <Container sx={{maxWidth: 1000}}>
        <Skills />
        </Container>
    </Container>
    </div>
  )
}

export default SkillsPage