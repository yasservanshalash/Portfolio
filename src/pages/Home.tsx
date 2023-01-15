import { Container } from '@mui/material'
import React from 'react'
import About from '../components/pageComponents/About'
import Profile from '../components/pageComponents/Profile'
import Skills from '../components/pageComponents/Skills'

const Home = () => {
  return (
    <Container sx={{ mt: 4, display: "flex", justifyContent: "space-between"}}>
        <Profile />
        <Container sx={{maxWidth: 810}}>
        <About />
        <Skills />
        </Container>
    </Container>
  )
}

export default Home