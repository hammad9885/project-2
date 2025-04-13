import React from 'react';
import Navbar from '../components/Navbar';
import AFirstSection from '../components/About/AFirstSection';
import ASecondSection from '../components/About/ASecondSection';
import AThreeSection from '../components/About/AThreeSection';
import AFourSection from '../components/About/AFourSection';
import AFiveSection from '../components/About/AFiveSection';
import ASixSection from '../components/About/ASixSection';
import Footer from '../components/Footer';

function About() {
    return (
        <>
            <Navbar/>
            <AFirstSection/>
            <ASecondSection/>
            <AThreeSection/>
            <AFourSection/>
            <AFiveSection/>
            <ASixSection/>
            <Footer/>
        </>
    )}
export default About;