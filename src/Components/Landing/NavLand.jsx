import React from 'react';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LogIn from '../Auth/LogIn'


function NavLand(){

  
    return (<header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <a class="navbar-brand" href="#"><HealthAndSafetyIcon style={{ color: 'green', fontSize: '40px' }}/> Care Point</a>
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
                       
                        <li class="nav-item">
                           <LogIn/>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>);
}

export default NavLand;