import { Box, Card, CardContent, Container, Typography, Grid } from "@mui/material";
import Divider from '@mui/material/Divider';

const About = () => {
  return (
    <Container sx={{ mb: 2}}>
      <Card sx={{ maxWidth: 800 }}>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 1}}>ABOUT ME</Typography>
          <Typography variant="subtitle2" sx={{ color: "rgba(0,0,0,0.45)" }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
            minima quod molestias numquam, cumque eveniet delectus dolore
            laborum molestiae quis possimus eos dignissimos cupiditate ipsam
            sunt doloremque commodi adipisci quasi?
          </Typography>
        </CardContent>
        <Divider />
        <CardContent>
          <Typography variant="h6" sx={{ mb: 2}}>PERSONAL INFO</Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
            <Typography variant="subtitle2" sx={{ color: "rgba(0,0,0,0.8)" }}>
            <strong>Address: </strong>Houten, Utrecht, Netherlands
          </Typography>
            </Grid>
            <Grid item xs={6}>
            <Typography variant="subtitle2" sx={{ color: "rgba(0,0,0,0.8)" }}>
            <strong>First Language:</strong> Arabic


          </Typography>
            </Grid>
            <Grid item xs={6}>
            <Typography variant="subtitle2" sx={{ color: "rgba(0,0,0,0.8)" }}>
            <strong>Email:</strong> yasservanshalash@gmail.com
          </Typography>
            </Grid>
            <Grid item xs={6}>
            <Typography variant="subtitle2" sx={{ color: "rgba(0,0,0,0.8)" }}>
            <strong>Second Language:</strong> English
          </Typography>
            </Grid>
            <Grid item xs={6}>
            <Typography variant="subtitle2" sx={{ color: "rgba(0,0,0,0.8)" }}>
            <strong>Phone:</strong> 0685442682
          </Typography>
            </Grid>
            <Grid item xs={6}>
            <Typography variant="subtitle2" sx={{ color: "rgba(0,0,0,0.8)" }}>
            <strong>Third Language:</strong> Dutch
          </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default About;
