import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { IconButton } from '@material-ui/core';

import logo from '../../assets/images/logo2.png';


const useStyles = makeStyles(theme => ({

  logo: {
    width: 80,
  },
  logoButton: {
    justifyContent: 'left',
  }
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" >
        <Toolbar>
          <Link to="/">
            <IconButton className={classes.logoButton}>
              <img className={classes.logo} src={logo} alt="Star Wars Logo" />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
