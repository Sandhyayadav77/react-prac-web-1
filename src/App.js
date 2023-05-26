import React from 'react'
import Header from './components/header'
import Banner from './components/banner'
import Experts from './components/Experts'
import NewsLetter from './components/NewsLetter'
import Plans from './components/Plans'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <Banner/>
      <Experts/>
      <NewsLetter/>
      <Plans/>
      <Footer/>
    </>
  )
}