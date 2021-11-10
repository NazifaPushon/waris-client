import Typography from '@mui/material/Typography';
import React from 'react';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
  const style = {
    textDecoration: 'none',
    color: 'white',
    margin:' 1rem',
    fontSize: '20px',
    fontFamily:'Jost, sans-serif'
  }
  const history = useHistory()
  const { user, logout } = useAuth()
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
        <div className="navbar-brand" ><h2  style={{fontFamily:'Jost, sans-serif' ,margin:'1rem', color: 'white',}} >
            WARIS
          </h2></div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li>
            <Typography variant="body1" style={style}><NavLink to='/' style={style}>
            Home</NavLink></Typography>
          </li>
        <li>
            <Typography variant="body1" style={style}><NavLink to='/explore' style={style}>
            Explore</NavLink></Typography>
          </li>
        {!user.email ? <>
          <li className="nav-item">
          
            <Typography variant="body1" style={style}><NavLink to='/login' style={style}>
            Login</NavLink></Typography>
        </li>
        <li className="nav-item">
       
              <Typography variant="body1" style={style}> <NavLink to='/register' style={style}>
              Register</NavLink></Typography>
        </li>
        
        </> : <>
        <li className="nav-item">
            <Typography variant="body1" style={style}><NavLink to='/dashboard' style={style}>
              Dashboard</NavLink></Typography>
        </li>
        <li className="nav-item">
          <Typography variant="body1" style={style}>{user.displayName}</Typography>
        </li>
        <li className="nav-item">
        <button onClick={() => logout(history)} style={{margin:'0'}} className="button">Logout</button>
        </li>
        </>}
      </ul>
    </div>
  </div>
</nav>
  );
};

export default Header;