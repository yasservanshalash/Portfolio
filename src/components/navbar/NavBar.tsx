import { Box, Container, IconButton, Tooltip, Typography } from "@mui/material";
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
          justifyContent: { xs: "center", md: "space-between"},
          alignItems: "center",
          p: 2,
          color: "black",
        }}
      >
        <Typography variant="subtitle2" sx={{display: {xs: "none", md: "block"}}}>‎ </Typography>
        <Box sx={{display: "flex", gap: 4}}>
        <Tooltip title="Home">
          <IconButton component={Link} to="/" sx={{color: clicked? "white" : "black"}}>
          <HomeIcon fontSize="medium" />
          </IconButton>
          </Tooltip>
          <Tooltip title="Professional skills">
          <IconButton component={Link} to="/skills" sx={{color: clicked? "white" : "black"}}>
          <ContentCopyIcon fontSize="medium" />
          </IconButton>
          </Tooltip>
          <Tooltip title="Experience">
          <IconButton component={Link} to="/experience" sx={{color: clicked? "white" : "black"}}>
          <BadgeIcon fontSize="medium" />
          </IconButton>
          </Tooltip>
          <Tooltip title="Education">
          <IconButton component={Link} to="/education" sx={{color: clicked? "white" : "black"}}>
          <SchoolIcon fontSize="medium" />
          </IconButton>
          </Tooltip>
          <Tooltip title="Portfolio">
          <IconButton component={Link} to="/portfolio" sx={{color: clicked? "white" : "black"}}>
          <ContactMailIcon fontSize="medium" />
          </IconButton>
          </Tooltip>
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
