import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Avatar } from "@mui/material";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import Dropdown from 'react-bootstrap/Dropdown';
import styles from "../Navbar/style";
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { signIn } from '../../Redux/Actions/Action';

export default function Navbar() {
  const dispatch = useDispatch();

  const loggedInUser = useSelector((state) => state.loggedInReducer);
  console.log(loggedInUser);
  let userName = loggedInUser.signIn.name;
  // let isLoggedIn = userName.name;
  console.log(userName);
  // console.log(isLoggedIn);

  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate('/login');
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    alert("logout")
    if (userName) {
      dispatch(signIn(""));
      navigate("/login")
      // navigate("/login")
    }
  }

  return (

    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit" onClick={navigateToLogin}> Login</Button>
          <Button
            color="inherit"
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            Bills
          </Button>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}><Link href="/bills/create" underline="none">Create Bill</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link href="/bills/1" underline="none"> View Bills</Link></MenuItem>
          </Menu>

          <Button
            color="inherit"
            id="basic-button"
            onClick={logout}
          >
            {userName}
          </Button>

        </Toolbar>

      </AppBar>

    </Box>
  );
}

