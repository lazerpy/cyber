import React from 'react'
import HeroSection from './Components/HeroSection';
import DashboardTeaser from './Components/DashboardTeaser';
import FullDashboard from './Components/FullDashboard';
import ScanSimulator from './Components/ScanSimulator';
import WhyChooseUs from './Components/WhyChooseUs';
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className='bg-gray-700'>
      <HeroSection />
      <ScanSimulator />
      {/* <DashboardTeaser /> */}
      <FullDashboard />
      <WhyChooseUs />
      <Footer />
    </div>
  )
}

export default App