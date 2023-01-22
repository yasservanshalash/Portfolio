import { Container } from '@mui/material'
import React from 'react'
import About from '../components/pageComponents/About'
import Education from '../components/pageComponents/Education'
import Experience from '../components/pageComponents/Experience'
import Profile from '../components/pageComponents/Profile'
import Skills from '../components/pageComponents/Skills'

const Home = ({clicked}: {clicked: boolean ;}) => {
  return (
    <div style={{backgroundColor: clicked? "black" : "white"}}>
    <Container sx={{ width: "100%", height: "100%", display: "flex", justifyContent: "space-around", backgroundColor: clicked ? "black" : "white"}}>
        <Profile themeClicked={clicked}/>
        <Container sx={{maxWidth: 1000}}>
        <About />
        <Skills />
        <Experience clicked={clicked}/>
        <Education />
        </Container>
    </Container>
    </div>

  )
}

export default Home