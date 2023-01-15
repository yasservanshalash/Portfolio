import { Container } from '@mui/material'
import React from 'react'
import About from '../components/pageComponents/About'
import Education from '../components/pageComponents/Education'
import Experience from '../components/pageComponents/Experience'
import Profile from '../components/pageComponents/Profile'
import Skills from '../components/pageComponents/Skills'

const Home = () => {
  return (
    <Container sx={{ mt: 4, display: "flex", justifyContent: "space-around"}}>
        <Profile />
        <Container sx={{maxWidth: 1000}}>
        <About />
        <Skills />
        <Experience />
        <Education />
        </Container>
    </Container>
  )
}

export default Home