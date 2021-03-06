import React from 'react'
import SEO from '../components/seo'

import { makeStyles } from '@material-ui/core/styles';
import { Divider, Grid, Typography, Tooltip, IconButton, ListItem, ListItemAvatar, Avatar, ListItemText, List } from '@material-ui/core';
import { tools, skills } from '../data/skills'
import Layout from '../components/layout';

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
    
    [theme.breakpoints.down('xs')]: {
    height: `5rem`,
    width: `5rem`,
    color: `darkgrey`,
    margin: `0.5rem 0.5rem 0.5rem 0`,
    fontSize: `3rem`,
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
      <Grid container spacing={2}>

        <Grid item xs={12} sm={12} className={classes.paper} gutterBottom>
          <Typography className={classes.heading} >PROGRAMMING LANGUAGES & TOOLS</Typography>
          <Divider />
          
          {tools.map((tool, index) => (
            <Tooltip key={index} title={tool.title} className={classes.tooltip}> 
            <IconButton aria-label={tool.label} className={classes.tooltip}>
                {tool.icon}
            </IconButton>
            </Tooltip>
          ))}
        </Grid>

        <Grid item xs={12} sm={8}>
          <Typography className={classes.heading}>RELEVANT SKILLS</Typography> 
           <Divider />         
              <List>
                {skills.map((skill, index) => (
                  <ListItem key={index}>
                  <ListItemAvatar>
                    <Avatar>{skill.icon}</Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={skill.text} />
                </ListItem>
                ))}
            </List>
        </Grid>
        </Grid>

    </Layout>
    )
}

export default Skills