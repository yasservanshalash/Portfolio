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
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { red } from "@mui/material/colors";

import "./Profile.css";

const Profile = () => {
  const color = red[500];
  const logo = require("../../assets/yasser-profile.png");
  const [clicked, setClicked] = useState(true);

  const clickHandler = () => {
    setClicked(!clicked);
  };
  return (
    <Box sx={{ width: 400 }}>
      {clicked ? (
        <Card sx={{ maxWidth: 300 }}>
          <CardMedia sx={{ height: 250 }} image={logo} title="green iguana" />
          <Fab
            color="primary"
            aria-label="add"
            sx={{ position: "relative", bottom: "30px", left: "210px" }}
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
                  "http://www.facebook.com/yasservanshalash",
                  "_blank"
                )
              }
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
            >
              <LinkedInIcon fontSize="large" />
            </IconButton>
            <IconButton
              onClick={() =>
                window.open("https://twitter.com/yassershalash", "_blank")
              }
            >
              <TwitterIcon fontSize="large" />
            </IconButton>
          </CardContent>
          <Fab
            color="primary"
            aria-label="add"
            sx={{ position: "relative", bottom: "30px", left: "210px" }}
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
