import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../context/userContext'
import { useContext } from "react"


export default function Navbar() {
  const theme = useContext(userContext);
  console.log(theme);

  const navigate = useNavigate();
  const navigateToLogin = () => {
    //navigate to /login
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
          <Button
            color="inherit"
            id="basic-button"


          >
            {/* {userName} */}
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

        </Toolbar>

      </AppBar>

    </Box>
  );
}
