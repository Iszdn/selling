import React from 'react'
import { Helmet } from 'react-helmet-async'
import Header from '../../components/HomePageCom/HraderSec'
import AboutUs from '../../components/HomePageCom/AboutUs'
import Leader from '../../components/HomePageCom/LeaderShip'
import Offer from '../../components/HomePageCom/Offer'
import OurProduct from '../../components/HomePageCom/OurProduct'

const Home = () => {
  return (
    <>
<Helmet>
    <title>home</title>
</Helmet>
<Header/>
<OurProduct/>
<AboutUs/>
<Leader/>
<Offer/>

    </>
  )
}

export default Home