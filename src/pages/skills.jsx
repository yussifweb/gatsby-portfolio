import React from 'react'
import SEO from '../components/seo'

import { makeStyles } from '@material-ui/core/styles';
import { Divider, Grid, Typography, Container, Tooltip, IconButton } from '@material-ui/core';
import { tools } from '../data/skills'
import Layout from '../components/Layout/Layout';

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
    height: `5.5rem`,
    width: `5.5rem`,
    color: `darkgrey`,
    margin: `0.5rem 1rem 0.5rem 0`,
    fontSize: `3.5rem`,

    '&:hover': {
      backgroundColor: `#464344`,
      color: `#6bfff0`,
    },    
  },
  heading: {
    fontSize: `clamp(1.3rem, 6vw, 2.5rem)`,
    fontWeight: `500`,
    color: `#4d4c4c`,
  }

}));

const Skills = () => { 
    const classes = useStyles();  
    return (      
     <Layout>
       <SEO title="Skills & Tools" />  
      <Container>
      <Grid container spacing={2}>

        <Grid item xs={12} sm={12} style={{ marginTop: `1rem` }} className={classes.paper}>
          <Typography className={classes.heading} gutterBottom>PROGRAMMING LANGUAGES & TOOLS</Typography>
          
          {tools.map((tool, index) => (
            <Tooltip key={index} title={tool.title} className={classes.tooltip}> 
            <IconButton aria-label={tool.label} className={classes.tooltip}>
                {tool.icon}
            </IconButton>
            </Tooltip>
          ))}

        </Grid>

        <Grid item xs={12} sm={12} style={{ margin: `1rem 0` }}><Divider /></Grid>

        <Grid item xs={12} sm={8}>
          
          <Container>
              <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Perferendis, laudantium iusto? Quaerat at minima quam quia sed accusantium
                  fugit fuga in quidem voluptatibus unde eaque exercitationem quod veniam possimus 
                  dicta, nihil commodi fugiat tempore molestiae aliquid quos voluptas quisquam.
                   Molestias esse vitae eligendi quidem repellendus, doloremque veritatis fuga unde. Minima!</Typography>
          </Container>
        </Grid>

        </Grid>

      </Container>
    </Layout>
    )
}

export default Skills