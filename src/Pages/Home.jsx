import React from 'react';
import { NavLink } from 'react-router-dom';
import HeroSection from '../Components/HeroSection';
import WhyChooseUs from '../Components/WhyChooseUs';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-900 text-neutral-200">
      <Navbar />
      <HeroSection />
      <WhyChooseUs />
      <Footer />
    </main>
  );
} 