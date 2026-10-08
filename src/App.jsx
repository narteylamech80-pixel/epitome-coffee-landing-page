import React from 'react'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Service from './components/service/Service'
import WhereToBuy from './components/wheretobuy/WhereToBuy'
import Footer from './components/Footer/Footer'
import WebFooter from './components/Footer/WebFooter'

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Hero />
      <Service />
      <WhereToBuy />
      <Footer />
      <WebFooter />
    </div>
    
  )
}

export default App