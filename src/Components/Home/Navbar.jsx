import React from 'react';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import { green, pink } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsNoneSharpIcon from '@mui/icons-material/NotificationsNoneSharp';
import MessageSharpIcon from '@mui/icons-material/MessageSharp';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';


export default function Navbar(){

    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  
    return (<header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <a class="navbar-brand" href="#"><HealthAndSafetyIcon style={{ color: 'green', fontSize: '50px' }}/> Care Point</a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">

                    <li clss="nav-item">
                            <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
          <div style={{marginTop:".25em"}}>
          <Box sx={{ color: 'green' }}>
      <Badge color="secondary" variant="dot">
      <MessageSharpIcon style={{ color: 'green', fontSize: '25px' }}/>
      </Badge>
    </Box>
         
          </div>
        
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
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  
                        </li>

                        <li clss="nav-item">
                            <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <div style={{marginTop:".25em"}}>
          <Box sx={{ color: 'green' }}>
      <Badge color="secondary" variant="dot">
      <NotificationsNoneSharpIcon style={{ color: 'green', fontSize: '25px' }}/>
      </Badge>
    </Box>
    </div>
    
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
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  
                        </li>
                       
                        <li class="nav-item">
                        <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
          <div style={{margin:"0 0 0 7em"}}>
          <AccountCircleIcon style={{ color: 'green', fontSize: '30px' }}/>
          </div>
        
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
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>);
}
