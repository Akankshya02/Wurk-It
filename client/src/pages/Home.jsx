import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import JobListing from '../components/JObListing'
import AppDownload from '../components/AppDownload'
import Footer from '../components/Footer'
import ApplyJob from './ApplyJob'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <JobListing/>
      <ApplyJob/>
      <AppDownload/>
      <Footer/>
    </div>
  )
}

export default Home
