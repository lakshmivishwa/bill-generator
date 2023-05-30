import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, Button, MenuItem, Menu, Link, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { signIn } from '../../Redux/Actions/Action';
import { TfiWrite } from "react-icons/tfi";
import Avatar from '@mui/material/Avatar';
import styles from "./style";
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
  const [userMenuOpen, setUserMenuOpen] = React.useState(false);
  const [billsMenuOpen, setBillsMenuOpen] = React.useState(false);

  const handleUserMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
    setUserMenuOpen(true);
    setBillsMenuOpen(false);
  };

  const handleBillsMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
    setBillsMenuOpen(true);
    setUserMenuOpen(false);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setUserMenuOpen(false);
    setBillsMenuOpen(false);
  };

  const handleClick = () => {
    navigate("/")
  };
  const logout = () => {
    alert("logout")
    if (userName) {
      dispatch(signIn(""));
      navigate("/signin")
    }
  }

  return (

    <Box sx={{ flexGrow: 1 }} style={styles.BoxContainer} >
      <AppBar  >
        <Container maxWidth="lg">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Button color="inherit"
                id="basic-button"
                onClick={handleClick}>
                <TfiWrite size={30} />
              </Button>
            </Typography>


            
            <Button
              color="inherit"
              id="basic-button"
              aria-controls={billsMenuOpen ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={billsMenuOpen ? 'true' : undefined}
              onClick={handleBillsMenuClick}
            >
              Bills
            </Button>

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={billsMenuOpen}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}><Link href="/bills/create" underline="none">Create Bill</Link></MenuItem>
              <MenuItem onClick={handleClose}><Link href="/viewBills" underline="none"> View Bills</Link></MenuItem>
            </Menu>

            {userName ?
              (
                <><Button
                  color="inherit"
                  id="basic-button"
                  aria-controls={userMenuOpen ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={userMenuOpen ? 'true' : undefined}
                  onClick={handleUserMenuClick}
                >
                  <Avatar sx={{ color: 'black' }}>{getFirstLetters(userName)}</Avatar>
                </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={userMenuOpen}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                  >
                    <MenuItem onClick={() => { logout(); handleClose(); }}><Link underline="none"> Logout</Link></MenuItem>
                  </Menu></>) : (<Button color="inherit" onClick={navigateToLogin}> Login</Button>)}


          </Toolbar>
        </Container>
      </AppBar>
    </Box>

  );
}

