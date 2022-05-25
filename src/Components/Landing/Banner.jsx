import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Typewriter from 'typewriter-effect';


function Banner(){
        return( 
               
      <div class="hero">     
      <h1>We help People to Connect</h1>   
  
<Typewriter
  options={{
    strings: ['To local pharmacies', 'To Each other', ],
    autoStart: true,
    loop: true,
  }}
/>
    
          </div>         
   
         );
}
export default Banner;

