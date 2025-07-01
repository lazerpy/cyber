import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
  BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area, Legend
} from 'recharts';
import { ShieldCheck, Activity, Cpu, Wifi, Bell, User } from 'lucide-react';

const metrics = [
  { label: 'Total Threats', value: 1243, icon: <ShieldCheck className="text-green-400 w-6 h-6" /> },
  { label: 'Attacks Blocked', value: 982, icon: <Activity className="text-blue-400 w-6 h-6" /> },
  { label: 'Safe Devices', value: 58, icon: <Cpu className="text-cyan-400 w-6 h-6" /> },
  { label: 'Uptime', value: '99.99%', icon: <Wifi className="text-pink-400 w-6 h-6" /> },
];

const lineData = [
  { name: '10:00', threats: 2 },
  { name: '10:05', threats: 4 },
  { name: '10:10', threats: 3 },
  { name: '10:15', threats: 6 },
  { name: '10:20', threats: 5 },
  { name: '10:25', threats: 7 },
  { name: '10:30', threats: 4 },
];

const barData = [
  { type: 'Phishing', count: 400 },
  { type: 'Malware', count: 300 },
  { type: 'DDoS', count: 200 },
  { type: 'Brute Force', count: 100 },
];

const pieData = [
  { name: 'Safe', value: 58 },
  { name: 'At Risk', value: 6 },
  { name: 'Compromised', value: 2 },
];
const pieColors = ['#22d3ee', '#facc15', '#ef4444'];

const areaData = [
  { name: 'Mon', uptime: 99.9 },
  { name: 'Tue', uptime: 99.99 },
  { name: 'Wed', uptime: 99.95 },
  { name: 'Thu', uptime: 99.97 },
  { name: 'Fri', uptime: 99.99 },
  { name: 'Sat', uptime: 99.98 },
  { name: 'Sun', uptime: 99.99 },
];

const logs = [
  { time: '10:32', event: 'Blocked DDoS attack from 192.168.1.10' },
  { time: '10:28', event: 'Malware detected and quarantined' },
  { time: '10:15', event: 'New device connected: MacBook-Pro' },
  { time: '10:10', event: 'Phishing attempt blocked' },
];

const FullDashboard = () => {
  return (
    <div className="min-h-screen flex bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white font-sans">
      {/* Sidebar */}
      <aside className="w-20 bg-gray-950 border-r border-gray-800 flex flex-col items-center py-8 gap-8">
        <div className="mb-8">
          <span className="text-2xl font-bold text-green-400">CG</span>
        </div>
        <nav className="flex flex-col gap-8">
          <ShieldCheck className="w-7 h-7 text-green-400 hover:scale-110 transition" />
          <Activity className="w-7 h-7 text-blue-400 hover:scale-110 transition" />
          <Cpu className="w-7 h-7 text-cyan-400 hover:scale-110 transition" />
          <Wifi className="w-7 h-7 text-pink-400 hover:scale-110 transition" />
        </nav>
      </aside>
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="flex items-center justify-between px-8 py-4 border-b border-gray-800 bg-gray-950/80">
          <h1 className="text-2xl font-bold tracking-tight">CyberGuard Dashboard</h1>
          <div className="flex items-center gap-6">
            <button className="relative">
              <Bell className="w-6 h-6 text-gray-400 hover:text-green-400 transition" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full" />
            </button>
            <div className="flex items-center gap-2">
              <User className="w-7 h-7 text-gray-300" />
              <span className="text-sm">Admin</span>
            </div>
          </div>
        </header>
        {/* Metrics */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6 px-8 py-8">
          {metrics.map((m) => (
            <div key={m.label} className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl p-6 flex flex-col items-center shadow-lg hover:scale-105 transition-transform">
              <div className="mb-2">{m.icon}</div>
              <div className="text-2xl font-bold mb-1">{m.value}</div>
              <div className="text-xs text-gray-400 uppercase tracking-wide">{m.label}</div>
            </div>
          ))}
        </section>
        {/* Charts */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8">
          {/* Line Chart */}
          <div className="bg-gray-800 rounded-2xl p-6 shadow-lg flex flex-col">
            <h2 className="text-lg font-semibold mb-4 text-cyan-300">Threats Over Time</h2>
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={lineData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                <CartesianGrid stroke="#222" strokeDasharray="3 3" />
                <XAxis dataKey="name" stroke="#67e8f9" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis stroke="#67e8f9" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ background: '#111827', border: '1px solid #22d3ee', borderRadius: '8px', color: '#fff' }} labelStyle={{ color: '#22d3ee' }} itemStyle={{ color: '#67e8f9' }} />
                <Line type="monotone" dataKey="threats" stroke="#22d3ee" strokeWidth={3} dot={{ r: 5, stroke: '#22d3ee', fill: '#0f172a' }} activeDot={{ r: 8, fill: '#22d3ee', stroke: '#fff', strokeWidth: 2 }} isAnimationActive={true} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          {/* Bar Chart */}
          <div className="bg-gray-800 rounded-2xl p-6 shadow-lg flex flex-col">
            <h2 className="text-lg font-semibold mb-4 text-green-300">Attack Types</h2>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={barData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                <CartesianGrid stroke="#222" strokeDasharray="3 3" />
                <XAxis dataKey="type" stroke="#facc15" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis stroke="#facc15" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ background: '#111827', border: '1px solid #facc15', borderRadius: '8px', color: '#fff' }} labelStyle={{ color: '#facc15' }} itemStyle={{ color: '#facc15' }} />
                <Bar dataKey="count" fill="#facc15" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          {/* Pie Chart */}
          <div className="bg-gray-800 rounded-2xl p-6 shadow-lg flex flex-col">
            <h2 className="text-lg font-semibold mb-4 text-pink-300">Device Status</h2>
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={70} innerRadius={40} label>
                  {pieData.map((entry, idx) => (
                    <Cell key={`cell-${idx}`} fill={pieColors[idx % pieColors.length]} />
                  ))}
                </Pie>
                <Legend verticalAlign="bottom" height={36} iconType="circle" />
                <Tooltip contentStyle={{ background: '#111827', border: '1px solid #f472b6', borderRadius: '8px', color: '#fff' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          {/* Area Chart */}
          <div className="bg-gray-800 rounded-2xl p-6 shadow-lg flex flex-col">
            <h2 className="text-lg font-semibold mb-4 text-yellow-300">Uptime This Week</h2>
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={areaData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="uptime" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#facc15" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#facc15" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="#facc15" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis stroke="#facc15" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ background: '#111827', border: '1px solid #facc15', borderRadius: '8px', color: '#fff' }} labelStyle={{ color: '#facc15' }} itemStyle={{ color: '#facc15' }} />
                <Area type="monotone" dataKey="uptime" stroke="#facc15" fillOpacity={1} fill="url(#uptime)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </section>
        {/* Recent Activity Table */}
        <section className="px-8 py-8">
          <div className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-700 text-lg font-semibold text-blue-300">Recent Activity</div>
            <table className="w-full text-left">
              <tbody>
                {logs.map((log, idx) => (
                  <tr key={idx} className="border-b border-gray-700 last:border-none hover:bg-gray-700/30 transition">
                    <td className="px-6 py-3 text-gray-300 w-24">{log.time}</td>
                    <td className="px-6 py-3 text-gray-100">{log.event}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FullDashboard; 