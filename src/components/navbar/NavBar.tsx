import { Container } from '@mui/material'
import React from 'react'

import HomeIcon from '@mui/icons-material/Home';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import BadgeIcon from '@mui/icons-material/Badge';
import SchoolIcon from '@mui/icons-material/School';
import ContactMailIcon from '@mui/icons-material/ContactMail';

import "./NavBar.css"
const NavBar = () => {
  return (
    <div className='navbar'>
        <Container sx={{display: "flex", justifyContent: "space-between", alignItems: "center", p: 2}}>
            <h1>My Resume</h1>
            <div>
                <ul className='navbar__links'>
                <li className='navbar__link'><HomeIcon fontSize='small'/> Home</li>
                <li className='navbar__link'><ContentCopyIcon fontSize='small' /> Skills</li>
                <li className='navbar__link'><BadgeIcon fontSize="small" /> Experience</li>
                <li className='navbar__link'><SchoolIcon fontSize="small" /> Education</li>
                <li className='navbar__link'><ContactMailIcon fontSize="small" /> Portfolio</li>
                </ul>
            </div>
        </Container>
    </div>
  )
}

export default NavBar