import React from 'react'
import HeroSection from '../Component/HeroSection/Index'
import Header from '../Component/common/Header'
import ProductShowCase from '../Component/ProductShowCase/Index'
import FeelSpecial from '../Component/FeelSpecial'
import CredExperience from '../Component/CredExperience/Index'
import CredScurity from '../Component/CredScurity'
import BrandsLove from '../Component/BrandsLove'
import WindowPeek from '../Component/WindowPeek/Index'
import MobileScroll from '../Component/MoblieScroll'
import CredStory from '../Component/CredStory/Index'
import AppRating from '../Component/AppRating/Index'

import AboutCred from '../Component/AboutCred/Index'



const HomePage = () => {
  return (
    <>
    <Header />
    <HeroSection />
    <ProductShowCase />
    <FeelSpecial />
    <BrandsLove />
    <CredExperience />
    <MobileScroll />
    <div className='non-mobile'>
    <WindowPeek />
    </div>
    <CredScurity />
    <CredStory />
    <AppRating />
    <AboutCred />
    
    </>
  )
}

export default HomePage;
