import React from 'react';
import NavLand from '../Components/Landing/NavLand';
import Banner from '../Components/Landing/Banner';
import Cards from '../Components/Landing/Cards';
import Feature from '../Components/Landing/Feature';
import Footer from '../Components/Landing/Footer'



function Landing(){
    return(<div>
        <NavLand/>
        <Banner/>
        <Cards/>
        <Feature/>
       <Footer/>
        </div>
    
    )

}

export default Landing;