import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Container, Fab } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

import "./Profile.css";

const Profile = ({themeClicked}: {themeClicked: boolean}) => {
  const logo = require("../../assets/yasser-profile.png");
  const [clicked, setClicked] = useState<boolean>(true);

  const clickHandler = () => {
    setClicked(!clicked);
  };
  return (
    <Box sx={{ width: 400, display: { xs: "none", md: "block"} }}>
      {clicked ? (
        <Card sx={{ maxWidth: 300 }}>
          <CardMedia sx={{ height: 250 }} image={logo} title="green iguana" />
          <Fab
            color="primary"
            aria-label="add"
            sx={{ position: "relative", bottom: "30px", left: "210px", color: "inherit", backgroundColor: "inherit", "&:hover": {
              backgroundColor: "inherit", color: "inherit"
            },}}
            onClick={clickHandler}
            className="fab"
          >
            <MoreVertIcon />
          </Fab>
          <CardContent
            sx={{
              height: 70,
              position: "relative",
              bottom: 40,
              textAlign: "center",
            }}
          >
            <Typography gutterBottom variant="h5" component="div">
              Yasser Shalash
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Fullstack Web Developer
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <Card sx={{ maxWidth: 300 }}>
          <CardContent
            sx={{ height: 250, display: "flex", justifyContent: "center" }}
          >
            <IconButton
              onClick={() =>
                window.open(
                  "https://github.com/yasservanshalash",
                  "_blank"
                )
              }
              disableRipple
              sx={{color: themeClicked ? "white" : "black"}}
            >
              <GitHubIcon fontSize="large" />
            </IconButton>
            <IconButton
              onClick={() =>
                window.open(
                  "http://www.facebook.com/yasservanshalash",
                  "_blank"
                )
              }
              disableRipple
              sx={{color: "#14A6FB"}}
            >
              <FacebookIcon fontSize="large" />
            </IconButton>
            <IconButton
              onClick={() =>
                window.open(
                  "https://www.instagram.com/yassershalash/",
                  "_blank"
                )
              }
              disableRipple
              sx={{color: "#F60475"}}
            >
              <InstagramIcon fontSize="large" />
            </IconButton>
            <IconButton
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/yassershalash/",
                  "_blank"
                )
              }
              disableRipple
              sx={{color: "#0B65C2"}}
            >
              <LinkedInIcon fontSize="large" />
            </IconButton>
            <IconButton
              onClick={() =>
                window.open("https://twitter.com/yassershalash", "_blank")
              }
              disableRipple
              sx={{color: "#1C9BEF"}}
            >
              <TwitterIcon fontSize="large" />
            </IconButton>
          </CardContent>
          <Fab
            color="primary"
            aria-label="add"
            sx={{ position: "relative", bottom: "30px", left: "210px", backgroundColor: "inherit", color: "inherit", "&:hover": {
              backgroundColor: "inherit", color: "inherit"
            }, "&:active": {
              backgroundColor: "inherit", color: "inherit"
            },
           }}
            onClick={clickHandler}
          >
            <MoreVertIcon />
          </Fab>
          <CardContent
            sx={{
              height: 70,
              position: "relative",
              bottom: 40,
              textAlign: "center",
            }}
          >
            <Typography gutterBottom variant="h5" component="div">
              Yasser Shalash
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Fullstack Web Developer
            </Typography>
          </CardContent>
        </Card>
      )}
    </Box>
  );
};

export default Profile;
