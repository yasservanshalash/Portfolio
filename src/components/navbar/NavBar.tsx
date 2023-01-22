import { Box, Container, IconButton, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import BadgeIcon from "@mui/icons-material/Badge";
import SchoolIcon from "@mui/icons-material/School";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import Brightness5Icon from "@mui/icons-material/Brightness5";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import "./NavBar.css";
const NavBar = ({
  clicked,
  setClicked,
}: {
  clicked: boolean;
  setClicked: Function;
}) => {
  return (
    <div className={clicked ? "navbarLight" : "navbarDark"}>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
          color: "black",
        }}
      >
        <h1>‎ </h1>
        <Box sx={{display: "flex", gap: 4}}>
          {/* <ul
            className={clicked ? "navbar__links__light" : "navbar__links__dark"}
          >
            <li
              className={clicked ? "navbar__link__light" : "navbar__link__dark"}
            >
              <HomeIcon fontSize="small" />
              Home
            </li>
            <li
              className={clicked ? "navbar__link__light" : "navbar__link__dark"}
            >
              <ContentCopyIcon fontSize="small" /> Skills
            </li>
            <li
              className={clicked ? "navbar__link__light" : "navbar__link__dark"}
            >
              <BadgeIcon fontSize="small" /> Experience
            </li>
            <li
              className={clicked ? "navbar__link__light" : "navbar__link__dark"}
            >
              <SchoolIcon fontSize="small" /> Education
            </li>
            <li
              className={clicked ? "navbar__link__light" : "navbar__link__dark"}
            >
              <ContactMailIcon fontSize="small" /> Portfolio
            </li>
            {clicked ? (
              <Brightness7Icon
                onClick={() => setClicked(!clicked)}
                sx={{ color: clicked ? "white" : "black" }}
              />
            ) : (
              <Brightness5Icon onClick={() => setClicked(!clicked)} />
            )}
          </ul> */}
          <IconButton component={Link} to="/" sx={{color: clicked? "white" : "black"}}>
          <HomeIcon fontSize="medium" />
          </IconButton>
          <IconButton component={Link} to="/skills" sx={{color: clicked? "white" : "black"}}>
          <ContentCopyIcon fontSize="medium" />
          </IconButton>
          <IconButton component={Link} to="/experience" sx={{color: clicked? "white" : "black"}}>
          <BadgeIcon fontSize="medium" />
          </IconButton>
          <IconButton component={Link} to="/education" sx={{color: clicked? "white" : "black"}}>
          <SchoolIcon fontSize="medium" />
          </IconButton>
          <IconButton component={Link} to="/portfolio" sx={{color: clicked? "white" : "black"}}>
          <ContactMailIcon fontSize="medium" />
          </IconButton>
          <IconButton>
          {clicked ? (
              <Brightness7Icon
                onClick={() => setClicked(!clicked)}
                sx={{ color: clicked ? "white" : "black" }}
              />
            ) : (
              <Brightness5Icon onClick={() => setClicked(!clicked)} 
              sx={{ color: clicked ? "white" : "black" }}
              />
            )}
          </IconButton>
        </Box>
      </Container>
    </div>
  );
};

export default NavBar;
