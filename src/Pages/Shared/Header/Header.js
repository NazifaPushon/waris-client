import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const history = useHistory()
    const {user , logout} = useAuth()
    return (
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          {!user.email ?  <><Button color="inherit"><NavLink to='/login'>
              Login</NavLink></Button>
          <Button color="inherit"><NavLink to='/register'>
              Register</NavLink></Button></> : <>
              <Button color="inherit"><NavLink to='/dashboard'>
              Dashboard</NavLink></Button>
              <Button color="inherit">{user.displayName}</Button>
              <Button color="inherit" onClick={() => logout(history)}>Logout</Button>
              </>}
          <Button color="inherit"><NavLink to='/explore'>
              Explore</NavLink></Button>
        </Toolbar>
      </AppBar>
    </Box>
    );
};

export default Header;