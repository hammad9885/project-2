import React from 'react'
import Navbar from '../components/Navbar';
import CFirst from '../components/Contact/CFirst';
import CSecondSection from '../components/Contact/CSecondSection';
import CThree from '../components/Contact/CThree';
import CFour from '../components/Contact/CFour';
import Footer from '../components/Footer';

function Contact() {
    

    return (
        <>
          <Navbar/>
          <CFirst/>  
          <CSecondSection/>
          <CThree/>
          <CFour/>
          <Footer/>
        </>
    )
}
export default Contact;