import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, Button, MenuItem, Menu, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { signIn } from '../../Redux/Actions/Action';
import { AiOutlineHome } from "react-icons/ai";

export default function Navbar() {
  const dispatch = useDispatch();

  const loggedInUser = useSelector((state) => state.loggedInReducer);
  console.log(loggedInUser);
  let userName = loggedInUser.signIn.name;
  console.log(userName);

  //function for getting first letter of user name
  function getFirstLetters(str) {
    const firstLetters = str
      .split(' ')
      .map(word => word.charAt(0))
      .join('');
    return firstLetters;
  }


  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate('/signin');
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
      navigate("/signin")

    }
  }

  return (

    <Box sx={{ flexGrow: 1 }} >
      <AppBar >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <AiOutlineHome size={30} />
          </Typography>

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
            <MenuItem onClick={handleClose}><Link href="/viewBills" underline="none"> View Bills</Link></MenuItem>
          </Menu>
          {userName ? <Button color="inherit" onClick={logout}> Logout</Button> :
            <Button color="inherit" onClick={navigateToLogin}> Login</Button>}
          {userName ? <Button
            color="inherit"
            id="basic-button"
          // onClick={logout}
          >
            {getFirstLetters(userName)}
          </Button> : ""}


        </Toolbar>
      </AppBar>
    </Box>
  );
}

