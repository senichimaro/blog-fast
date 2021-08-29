import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  link: {
    marginRight: theme.spacing(2),
  },
  linkButton: {
    color:theme.palette.common.white,
    textDecoration:'none'
  },
  title: {
    flexGrow: 1,
  },
}));


const NavEl = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            CRUD
          </Typography>

          <Link className={classes.linkButton} to="/">
            <Button className={classes.link} variant="contained" color="primary">
              Table
            </Button>
          </Link>

          <Link className={classes.linkButton} to="/form">
            <Button className={classes.link} variant="contained" color="primary">
              Form
            </Button>
          </Link>

          <Link className={classes.linkButton} to="/read">
            <Button className={classes.link} variant="contained" color="primary">
              Read
            </Button>
          </Link>

        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavEl;
