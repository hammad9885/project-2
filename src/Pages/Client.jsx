import React from 'react'
import Navbar from '../components/Navbar'
import CFirstSection from '../components/Review/CFirstSection'
import CSecondSection from '../components/Review/CSecondSection'
import CThreeSection from '../components/Review/CThreeSection'
import CFourSection from '../components/Review/CFourSection'
import CFiveSection from '../components/Review/CFiveSection'
import Footer from '../components/Footer'

function Client() {
    

    return (
        <>
            <Navbar/>
            <CFirstSection/>
            <CSecondSection/>
            <CThreeSection/>
            <CFourSection/>
            <CFiveSection/>
            <Footer/>
        </>
    )
}
export default Client