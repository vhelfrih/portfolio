import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Link,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmojiObjectsOutlinedIcon from "@material-ui/icons/EmojiObjectsOutlined";
import React, { useState } from "react";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    maxWidth: 45,
    paddingBottom: "8%",
    minWidth: 100,
    margin: "1rem",
  },
  media: {
    height: 240,
  },
  cardGrid: {
    paddingTop: "1rem",
    width: "100vw",
    backgroundColor: "#ccc",
  },
  work: {
    height: "100%",
  },
});

export default function Content() {
  const classes = useStyles();

  const [works] = useState([
    {
      title: "Cat Cafe",
      id: "1",
      desc: "A simple CSS practice page",
      image: process.env.PUBLIC_URL + "/assets/work001.jpg",
      href: "https://cat-cafe-tokyo.netlify.app/",
      github: "https://github.com/vhelfrih/cat-cafe"
    },
    {
      title: "Small Business Landing Page",
      id: "2",
      desc: "A simple landing page using Materialize.CSS",
      image: process.env.PUBLIC_URL + "/assets/work002.png",
      href: "https://small-business-materialize.netlify.app/",
      github: "https://github.com/vhelfrih/Small-Business-Materialize/tree/master"
    },
    {
      title: "Inventory App",
      id: "3",
      desc: "A full-stack household inventory app in Create-React-App",
      image: process.env.PUBLIC_URL + "/assets/cat003.jpg",
      href: "#",
      github: "#"
    },
    {
      title: "Other Business Page",
      id: "4",
      desc: "A simple CSS practice page",
      image: "/static/images/cards/contemplative-reptile.jpg",
      href: "#",
      github: "#"
    },
    {
      title: "Strava API",
      id: "5",
      desc: "An application for runners",
      image: "/static/images/cards/contemplative-reptile.jpg",
      href: "#",
      github: "#"
    },
    {
      title: "Cocktail Search App",
      id: "6",
      desc: "A page",
      image: "/static/images/cards/contemplative-reptile.jpg",
      href: "#",
      github: "#"
    },
  ]);

  return (
    <Container className={classes.cardGrid}>
      <Grid container spacing={3}>
        {works.map((work) => (
          <Grid item key={work} xs={12} sm={6} md={4}>
            <Card className={classes.work}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  component="img"
                  image={work.image}
                  title={work.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {work.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {work.desc}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link>
                <Button
                  size="medium"
                  color="primary"
                  startIcon={<EmojiObjectsOutlinedIcon />}
                  href={work.href}
                >
                  Idea
                </Button>
                </Link>
                <Link>
                <Button
                  size="medium"
                  color="primary"
                  startIcon={<GitHubIcon />}
                  href={work.github}
                  >
                  github
                </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
        ;
      </Grid>
    </Container>
  );
}
