import React from 'react';
import Grid from '@mui/material/Grid';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper';
import image from '../../static/Images/lab.png'


import SingleCard from './SingleCard';


export default function Cards(){
    return (<div class = "card-grid container">
      <Grid container spacing={10}>
        <Grid item md={3}>
          <SingleCard 
          heading="Local Pharmacies"
          text = "We Connect Local people to pharmacies"
          image={image}
          />
        </Grid>
        <Grid item md={3}>
        <SingleCard 
        heading = "Lab Tests"
        text="We connect local pharmaceutical Laboratory to people"
        image={image}/>
        </Grid>
        <Grid item md={3}>
        <SingleCard 
        heading ="Sharing Supplies"
        text="We connect people with each other to share medical supplies"
        image={image}/>
        </Grid>
      </Grid>
      

    </div>);
}

