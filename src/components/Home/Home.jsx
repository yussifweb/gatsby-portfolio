import React from 'react'
import SEO from '../seo'

import { makeStyles } from '@material-ui/core/styles';
import { Divider, Grid, Typography, Container, Tooltip, IconButton } from '@material-ui/core';
import image from '../../assets/images/hero.png'
import heroBg from '../../assets/images/herobg.jpg'
import Video from '../../assets/video/video1.mp4'
import { online } from '../../data/onlineData'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
  },
  grid: {
      marginBottom: `1rem`,
  },
  img: {
      width: `100%`,
      height: `100%`,
      borderRadius: `20px`,      
  },
  tooltip: {
    height: `3.5rem`,
    width: `3.5rem`,
    backgroundColor: `#343a40`,
    color: `#fff`,
    margin: `0.5rem 1rem 0.5rem 0`,

    '&:hover': {
      backgroundColor: `#ff006a`,
      color: `#6bfff0`,
    },    
  },

}));

const Home = () => { 
    const classes = useStyles();  
    return (      
     <div>
       <SEO title="Home" />  
      <Container>

      <Grid container spacing={2}>

        <Grid item xs={12} sm={7}>

        <Grid item xs={12} sm={12} className={classes.grid}>
         <Typography className={classes.paper} style={{fontSize: `clamp(1.5rem, 6vw, 2.5rem)`}} variant="h4" gutterBottom>Hello World, My name is Yussif Issah</Typography>
          <Typography className={classes.paper} style={{fontSize: `clamp(1rem, 6vw, 1.5rem)`}} variant="h5">I’m a Web Developer / Disk Jockey</Typography>
          <Typography className={classes.paper}>I’m also into  Graphic Design / Photography / Video Editing / Radio Production & Marketing</Typography>
        </Grid>

        <Divider />

        <Grid item xs={12} sm={12} style={{ marginTop: `1rem` }}>
          <Typography className={classes.paper}>I am a self motivated, result oriented, respectful and responsible 
            gentleman. I derive most of my motivation from myself and f
            ew from other people because I am the hero of my own story.
            I love to use my free period to code, play music or watch movies. 
            And also love to be alone with my thoughts but that doesn't mean 
            I'm an introvert, NOPE I'm actually a friendly guy and really like 
            hanging out with my friends. Thanks for your time and enjoy 
            your journey on this site.</Typography>
        </Grid>

        <Grid item xs={12} sm={12} style={{ marginTop: `5rem` }} className={classes.paper}>
          {online.map((on, index) => (
            <Tooltip key={index} title={on.title} className={classes.tooltip}>
            <IconButton href={on.url} aria-label={on.label}>
                {on.icon}
            </IconButton>
            </Tooltip>
          ))}
        </Grid>

        </Grid>

        <Grid item xs={12} sm={5}>
          <Container>
              <img className={classes.img} alt="Yussif Issah" src={image} />
          </Container>
        </Grid>

      </Grid>
      </Container>
    </div>
    )
}

export default Home