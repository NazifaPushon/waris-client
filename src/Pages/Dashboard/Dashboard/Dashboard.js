import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { grey } from '@mui/material/colors';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import * as React from 'react';
import { useHistory } from 'react-router';
import {
  Link, Route, Switch, useRouteMatch
} from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../../Routes/AdminRoute/AdminRoute';
import AddProduct from '../AddProduct/AddProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageOrder from '../ManageOrders/ManageOrder';
import ManageProducts from '../ManageProducts/ManageProducts';
import MyOrders from '../MyOrders/MyOrders';
import Payment from '../Payment/Payment';
import Review from '../Review/Review';

const drawerWidth = 240;

function Dashboard(props) {
  const {admin , logout} = useAuth()
  const history = useHistory()
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="text-center">
      <Toolbar/>
      <Divider />
        <List>
        <Button  style={{background:grey[900] , color:"white" ,margin:'0 1rem', padding:'0.5rem 1rem'}} color="inherit" onClick={() => logout(history)}>
                     Log Out
            </Button>
        </List>
        {admin ? <List>
          <ListItem className="text-center">
            <ListItemText><Link to={`${url}`} className="text-dark">Manage User</Link></ListItemText>
          </ListItem>
          <ListItem className="text-center">
            <ListItemText><Link to={`${url}/addProduct`} className="text-dark">Add Product</Link></ListItemText>
          </ListItem>
          <ListItem className="text-center">
            <ListItemText><Link to={`${url}/makeAdmin`} className="text-dark">Make Admin</Link></ListItemText>
          </ListItem>
          <ListItem className="text-center">
            <ListItemText><Link to={`${url}/manageProducts`} className="text-dark">Manage Products</Link></ListItemText>
          </ListItem>
          </List>
        : <List>
          
            <ListItem className="text-center">
              <ListItemText><Link to={`${url}`} className="text-dark">My Order</Link></ListItemText>
            </ListItem>
            <ListItem className="text-center">
            <ListItemText><Link to={`${url}/payment`} className="text-dark">Payment</Link></ListItemText>
            </ListItem>
            <ListItem className="text-center">
            <ListItemText><Link to={`${url}/review`} className="text-dark">Review</Link></ListItemText>
            </ListItem>
        </List> }
      
      <Divider />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          background:grey[900]
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Switch>
        {admin ?  <Route exact path={path}>
              <ManageOrder/>
        </Route> : <Route exact path={path}>
          <MyOrders/>
        </Route>}
        <Route path={`${path}/payment`}>
          <Payment/>
        </Route>
        <Route path={`${path}/review`}>
          <Review/>
        </Route>
        <AdminRoute path={`${path}/addProduct`}>
          <AddProduct/>
        </AdminRoute>
        <AdminRoute path={`${path}/makeAdmin`}>
          <MakeAdmin/>
        </AdminRoute>
        <AdminRoute path={`${path}/manageProducts`}>
          <ManageProducts/>
        </AdminRoute>
      </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
