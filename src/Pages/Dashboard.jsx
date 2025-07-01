import React from 'react';
import FullDashboard from '../Components/FullDashboard';
import ScanSimulator from '../Components/ScanSimulator';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-neutral-900 text-neutral-200">
      <Navbar />
      <FullDashboard />
      <ScanSimulator />
      <Footer />
    </main>
  );
} 