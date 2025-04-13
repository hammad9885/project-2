import React from 'react'
import Navbar from '../components/Navbar'
import HFirstSection from '../components/Home/HFirstSection'
import HSecondSection from '../components/Home/HSecondSection';
import HThreeSection from '../components/Home/HThreeSection';
import HFourSection from '../components/Home/HFourSection';
import HFiveSection from '../components/Home/HFiveSection';
import HSixSection from '../components/Home/HSixSection';
import HSevenSection from '../components/Home/HSevenSection';
import HEightSection from '../components/Home/HEightSection';
import HNineSection from '../components/Home/HNineSection';
import Footer from '../components/Footer';

function Home() {
    

    return (
        <>
            <Navbar/>
            <HFirstSection/>
            <HSecondSection/>
            <HThreeSection/>
            <HFourSection/>
            <HFiveSection/>
            <HSixSection/>
            <HSevenSection/>
            <HEightSection/>
            <HNineSection/>
            <Footer/>
        </>
    )
}
export default Home;