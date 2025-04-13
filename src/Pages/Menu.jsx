import React from 'react'
import Navbar from '../components/Navbar';
import MFirstSection from '../components/Menu/MFirstSection';
import MSecondSection from '../components/Menu/MSecondSection';
import MThreeSection from '../components/Menu/MThreeSection';
import MFourSection from '../components/Menu/MFourSection';
import MFiveSection from '../components/Menu/MFiveSection';
import MSixSection from '../components/Menu/MSixSection';
import Footer from '../components/Footer';

function Menu() {
    

    return (
        <>
            <Navbar/>  
            <MFirstSection/>
            <MSecondSection/>
            <MThreeSection/>
            <MFourSection/>
            <MFiveSection/>
            <MSixSection/>
            <Footer/>
        </>
    )
}
export default Menu;