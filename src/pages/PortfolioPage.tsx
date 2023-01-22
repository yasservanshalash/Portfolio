import React from 'react'
import Portfolio from '../components/pageComponents/Portfolio'
import Profile from '../components/pageComponents/Profile'
import { Container } from '@mui/material'
const PortfolioPage = ({clicked} : {clicked : boolean}) => {
  return (
    <div style={{backgroundColor: clicked? "black" : "white", height: "100%"}}>
    <Container sx={{ width: "100%", height: "100%", display: "flex", justifyContent: "space-around", backgroundColor: clicked ? "black" : "white"}}>
        <Profile themeClicked={clicked}/>
        <Container sx={{maxWidth: 1000}}>
        <Portfolio clicked={clicked}/>
        </Container>
    </Container>
    </div>
  )
}

export default PortfolioPage