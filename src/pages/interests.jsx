import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Divider, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
  },
  grid: {
      margin: `0 auto`,
  },
  top: {
    marginTop: `5rem`,

    [theme.breakpoints.down('xs')]: {
      marginTop: 0,
    },
  },
  heading: {
    fontSize: `clamp(1.3rem, 6vw, 2.5rem)`,
    fontWeight: `500`,
    color: `#4d4c4c`,
  },
}));

const Interests = () => {
    const classes = useStyles(); 
    return (
        <Layout>
            <SEO title="Hobbies, Interests, etc." />

        <Grid container spacing={4} className={classes.top}>
           <Grid item xs={12} sm={8} className={classes.grid}>
            <Typography className={classes.heading} gutterBottom>INTERESTS <Divider /></Typography>
            <Typography variant="body1" gutterBottom className={classes.paper}>Apart from being a Frontend Developer, I also aspire to broaden my knowledge in 
            web development so I'm now into backend development as well and looking to
            extend it to Mobile and Desktop applications development.</Typography>
            
            <Typography variant="body1" gutterBottom className={classes.paper}>Aside that, I spend some of my time exploring other 
                things which has partially made me also grab some good knowledge and 
                skills in Graphic Design, Photography and Video Shooting/Editing.</Typography>

            <Typography variant="body1" gutterBottom className={classes.paper}>Also since web development is dynamic i spend some of my leisure times watching 
                programming related videos and also doing research about whatever comes into mind 
                which is useful.</Typography>
           </Grid>
        </Grid>
        </Layout>
    )
}

export default Interests
