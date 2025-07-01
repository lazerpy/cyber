import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
// import { motion, AnimatePresence } from 'framer-motion'; // Uncomment if Framer Motion is available

const mockMetrics = [
  { label: 'Total Threats', value: 1243 },
  { label: 'Current Attacks', value: 7 },
  { label: 'Safe Devices', value: 58 },
];

const mockChartData = [
  { name: '10:00', threats: 2 },
  { name: '10:05', threats: 4 },
  { name: '10:10', threats: 3 },
  { name: '10:15', threats: 6 },
  { name: '10:20', threats: 5 },
  { name: '10:25', threats: 7 },
  { name: '10:30', threats: 4 },
];

const tabs = [
  { name: 'Overview' },
  { name: 'Threats' },
  { name: 'Devices' },
];

const DashboardTeaser = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [chartData, setChartData] = useState(mockChartData);

  // Simulate live chart updates
  useEffect(() => {
    const interval = setInterval(() => {
      setChartData((prev) => {
        const next = [...prev];
        next.push({
          name: `10:${30 + next.length * 5}`,
          threats: Math.floor(Math.random() * 8),
        });
        if (next.length > 7) next.shift();
        return next;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-16 bg-gray-900 text-white flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        Dashboard Preview
      </h2>
      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        {tabs.map((tab, idx) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(idx)}
            className={`px-6 py-2 rounded-full font-semibold transition border border-white/10 ${activeTab === idx ? 'bg-green-500 text-white' : 'bg-white/10 text-gray-200 hover:bg-green-600/30'}`}
          >
            {tab.name}
          </button>
        ))}
      </div>
      {/* Animated Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl mb-8">
        {mockMetrics.map((metric, idx) => (
          <div
            key={metric.label}
            className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl p-6 shadow-lg flex flex-col items-center hover:scale-105 transition-transform"
          >
            <div className="text-2xl font-bold mb-2">{metric.value}</div>
            <div className="text-sm text-gray-400">{metric.label}</div>
          </div>
        ))}
      </div>
      {/* Chart with Recharts */}
      <div className="w-full max-w-2xl h-64 bg-gray-800 rounded-2xl flex items-center justify-center shadow-inner relative overflow-hidden p-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid stroke="#222" strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke="#67e8f9" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis stroke="#67e8f9" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
            <Tooltip
              contentStyle={{ background: '#111827', border: '1px solid #22d3ee', borderRadius: '8px', color: '#fff' }}
              labelStyle={{ color: '#22d3ee' }}
              itemStyle={{ color: '#67e8f9' }}
            />
            <Line
              type="monotone"
              dataKey="threats"
              stroke="#22d3ee"
              strokeWidth={3}
              dot={{ r: 5, stroke: '#22d3ee', fill: '#0f172a' }}
              activeDot={{ r: 8, fill: '#22d3ee', stroke: '#fff', strokeWidth: 2 }}
              isAnimationActive={true}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default DashboardTeaser; 