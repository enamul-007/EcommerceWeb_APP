import React from 'react'
import Header from '../../components/RootLayout/header/Index'
import Navbar from '../../components/RootLayout/Navbar/Index'
import Banner from "../HomePage/Banner_part"
import FlashSale from './Flasfsale'

const Homepage = () => {
  return (
    <div>
        <Header/>
        <Navbar/>
        <Banner/>
        <FlashSale/>
        
    </div>
  )
}

export default Homepage