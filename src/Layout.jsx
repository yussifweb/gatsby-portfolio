import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { Avatar, CssBaseline, Divider, Drawer, Hidden, IconButton, List, ListItemIcon, ListItem, ListItemText, Toolbar, Typography, Container } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'gatsby'

import { makeStyles, useTheme } from '@material-ui/core/styles';
import dp from './assets/images/ice.png'
import {menuData} from './data/MenuData'

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(4),
  },
  img: {
      width: `100%`,
      height: `100%`,
      margin: `20px 0 0 0`,
  },
  center: {
      textAlign: `center`,
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',

    '&:hover': {
      backgroundColor: `#666465`,
      color: `#6bfff0`,
    },    
  },
  active: {
    backgroundColor: `#b3b2b2`,
    color: `#ff0000616`,
  },
}));

const Layout = ({ children }, props) => {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{ marginTop: `1rem` }}>
      <Container maxWidth="sm" style={{ margin: `4rem 0 3rem 0` }}>
        <Avatar variant="rounded" alt="Yussif Issah" src={dp} className={classes.img}/>
      </Container>
      <Divider />
      <List className={classes.content}>
        {menuData.map((item, index) => (          
          <ListItem component={Link} className={classes.link} to={item.link} activeClassName={classes.active} key={index} button variant="h4">
           <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.title} />                      
          </ListItem>           
        ))}
      </List>
      <Divider />
      <footer style={{ marginTop: `1rem`, textAlign: 'center' }}>
          © {new Date().getFullYear()} Made with <span style={{color:'#ff0000', fontSize: `1.2rem`}}>&#9829;</span> by
          {` `}
          <a href="http://www.awaga.epizy.com" target="_blank">Yussifweb</a>
        </footer>
    </div>

  );

const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <>
        <Toolbar className={classes.appBar}>
          <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
        </Toolbar>

    <div className={classes.root}>
      <CssBaseline />         
      <nav className={classes.drawer} aria-label="menu">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer container={container} variant="temporary" anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen} onClose={handleDrawerToggle} classes={{ paper: classes.drawerPaper, }}
            ModalProps={{ keepMounted: true, }} >{drawer}</Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer classes={{ paper: classes.drawerPaper, }} variant="permanent" open >{drawer}</Drawer>
        </Hidden>
      </nav>

      <main className={classes.content}>{children}</main>
            
    </div>
    </>
    )
};

Layout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Layout