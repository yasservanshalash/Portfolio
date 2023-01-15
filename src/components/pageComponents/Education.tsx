import { Button, Card, CardContent, Container, Typography } from "@mui/material";
import React from "react";
import "./Education.css";
const Education = () => {
  return (
    <Container>
      <Card>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 1, fontSize: "1.25rem" }}>
            EDUCATION
          </Typography>
          <table>
            <tr>
              <th>Certificate</th>
              <th>Date</th>
            </tr>
            <tr>
              <td>Integrify</td>
              <td>2022 - 2023</td>
            </tr>
            <tr>
              <td>TechStars</td>
              <td>2016</td>
            </tr>
            <tr>
              <td>LeWagon</td>
              <td>2015 - 2016</td>
            </tr>
            <tr>
              <td>Bachelor's ICT program AOU Lebanon</td>
              <td>2015</td>
            </tr>
            <tr>
              <td>HighShool</td>
              <td>2014</td>
            </tr>
          </table>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Education;
