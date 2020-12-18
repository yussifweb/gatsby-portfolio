import React from 'react'
import SEO from '../seo'

import { makeStyles } from '@material-ui/core/styles';
import { Divider, Grid, Typography, Container, Tooltip, IconButton } from '@material-ui/core';
import { tools } from '../../data/skills'

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

}));

const Skills = () => { 
    const classes = useStyles();  
    return (      
     <div>
       <SEO title="Home" />  
      <Container>

      <Grid container spacing={2}>

        <Grid item xs={12} sm={12} style={{ marginTop: `5rem` }} className={classes.paper}>
          {tools.map((tool, index) => (
            <Tooltip key={index} title={tool.title} className={classes.tooltip}>
            <IconButton aria-label={tool.label} className={classes.tooltip}>
                {tool.icon}
            </IconButton>
            </Tooltip>
          ))}
        </Grid>

        <Grid item xs={12} sm={5}>
          <Container>
              <img className={classes.img} alt="Yussif Issah" src='' />
          </Container>
        </Grid>


        </Grid>

      </Container>
    </div>
    )
}

export default Skills