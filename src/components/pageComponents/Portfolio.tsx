import {
  Box,
  Card,
  CardContent,
  Container,
  CardMedia,
  Typography,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import "./Portfolio.css";
const Portfolio = ({ clicked }: { clicked: boolean }) => {
  const data = [
    {
      title: "BookMe",
      details: "Fullstack project - booking app",
      technologies: "ReactJs, Typescript, redux, MUI, MongoDB, mongoose, PassportJs",
      image: "bookme",
      link: "https://bookme-m0zg.onrender.com/"
    },
    {
      title: "Betsy",
      details: "Fullstack project - ecommerce",
      technologies: "ReactJs, Typescript, redux, MUI, MongoDB, mongoose, PassportJs",
      image: "betsy",
      link: "https://betsy-frontend.onrender.com/"
    },
    {
      title: "eShop group work",
      details: "Frontend project built by assigned team in Integrify bootcamp",
      technologies: "React, Typescript, Redux, and MUI",
      image: "groupWork",
      link: "https://eshop-group-work.vercel.app/"
    },
    {
      title: "Yummy",
      details:
        "Yummy is a basic project in react showing recipes for different foods. Manipulating data with react",
      technologies: "React",
      image: "Yummy",
      link: "https://yummy-recipes-gules.vercel.app/"
    },
    {
      title: "YouClone",
      details:
        "YouClone is a YouTube clone built with React, Typescript, and Redux",
      technologies: "React, Redux, TypeScript",
      image: "YouClone",
      link: "https://you-clone-5vau.vercel.app/"

    },
    {
      title: "Countries",
      details:
        "Countries is an Atlas, an app with all countries on the globe we call earth with details about each country",
      technologies: "React, Redux, TypeScript",
      image: "countries",
      link: "https://country-app-frontend-project.vercel.app/"

    },
    {
      title: "eShop",
      details:
        "eShop is an ecommerce app. This app shows how to use APIs for objects and using sorting algorythms to display the data properly",
      technologies: "React, Redux, and Typescript",
      image: "eShop",
      link: "https://eshop-frontend-brown.vercel.app"

    },
    {
        title: "ToDo",
        details:
          "ToDo is a todoList built in react and typescript",
        technologies: "React, and Typescript",
        image: "ToDo",
        link: "https://todo-alpha-hazel.vercel.app/",
    
    },
    {
        title: "Dice",
        details:
          "Virtual Dice for boardgames",
        technologies: "JavaScript",
        image: "Dice",
        link: "",
    
    },
    {
        title: "Drum Kit",
        details:
          "Drum Kit, using object manipulation in javascript",
        technologies: "JavaScript",
        image: "drumkit",
        link: "https://yasservanshalash.github.io/drum-kit/",
    
    },
    {
        title: "Guessing Game",
        details:
          "Guess a number between 1 and 20, javascript",
        technologies: "JavaScript",
        image: "guessingGame",
        link: "https://yasservanshalash.github.io/guessMyNumber/",
    
    },
    {
        title: "Simon Says",
        details:
          "Simon says game follow the pattern as much as you can and beat your highscore",
        technologies: "JavaScript",
        image: "simonSays",
        link: "https://yasservanshalash.github.io/simon-says/",
    
    },
    {
        title: "Maiko clone",
        details:
          "Website cloned as a css exercise",
        technologies: "HTML, CSS",
        image: "Maiko",
        link: "https://yasservanshalash.github.io/ISA6-CSS/",
    
    },  {
        title: "TinDog",
        details:
          "Tinder for dogs",
        technologies: "HTML, CSS",
        image: "TinDog",
        link: "https://yasservanshalash.github.io/tindog",
    
    }, 


  ];
  return (
    <Container  sx={{ maxWidth: "1200px"}}>
      <Box sx={{ maxWidth: "1200px"}}>
        <Card
          sx={{ maxWidth: "1200px", display: "flex", flexWrap: "wrap", gap: "40px" }}
        >
          {data.map((item, index) => (
            <Card key={index} sx={{maxWidth: "1000px",boxShadow: "0px 0px 0px transparent",display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"flex-start", gap: 2, width: "600px", margin: "0 auto", mt: 5}}>
              <Typography variant="h4" sx={{fontWeight:"bold"}}>{item.title.toUpperCase()}</Typography>
              <Typography variant="h6">{item.details}</Typography>
            <a href={item.link} target="_blank">
              <img
                src={require("../../assets/" + item.image + ".png")}
                className="img"
                alt={item.title}
                width={"600px"}
                height={"350px"}
              />
              </a>
              <Typography variant="subtitle2">{item.technologies}</Typography>
              <Divider />

            </Card>
          ))}
        </Card>
      </Box>
    </Container>
  );
};

export default Portfolio;
