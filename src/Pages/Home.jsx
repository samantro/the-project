import React from 'react';
import Navbar from '../Components/Home/Navbar';
import HomeBanner from '../Components/Home/HomeBanner';
import HomeMid from '../Components/Home/HomeMid';
import Footer from '../Components/Landing/Footer';
import '../Components/Home/home.css'

export default function Home(){
    return (
    <div>
    <Navbar/>
    <HomeBanner/>
    <HomeMid/>
    <Footer/>
    </div>
    

    );
}
