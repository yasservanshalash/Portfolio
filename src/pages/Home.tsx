import { Container } from '@mui/material'
import React from 'react'
import About from '../components/pageComponents/About'
import Education from '../components/pageComponents/Education'
import Experience from '../components/pageComponents/Experience'
import Profile from '../components/pageComponents/Profile'
import Skills from '../components/pageComponents/Skills'

const Home = ({clicked}: {clicked: boolean ;}) => {
  return (
    <Container sx={{ mt: 4, display: "flex", justifyContent: "space-around"}}>
        <Profile themeClicked={clicked}/>
        <Container sx={{maxWidth: 1000}}>
        <About />
        <Skills />
        <Experience clicked={clicked}/>
        <Education />
        </Container>
    </Container>
  )
}

export default Home