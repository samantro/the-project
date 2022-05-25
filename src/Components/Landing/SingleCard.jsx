import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function SingleCard(props) {
  return (
      <div class = "card">
    <Card sx={{ maxWidth: 500 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          width="200"
          image={props.image}
          alt="green iguana"
        />
        <CardContent style={{backgroundColor: '#446A46'}}>
          <Typography gutterBottom variant="h5" component="div" color="rgb(199, 218, 196)">
            {props.heading}
          </Typography>
          <Typography variant="body2" color="rgb(199, 218, 196)">
            {props.text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}
