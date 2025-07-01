import React, { useState, useRef } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const MALWARE_TYPES = [
  'Trojan.Exploit.XYZ',
  'Worm.AutoRun.AB',
  'Adware.Agent.XX',
  'Backdoor.Win32.ZYX',
  'Ransom.Cryptolocker',
  'Rootkit.Hidden',
  'Spyware.KeyLogger',
  'Virus.Macro.AA',
  'Exploit.PDF.JS',
  'Phishing.FakeBank',
];
const FILE_PATHS = [
  '/usr/bin/ssh',
  '/etc/passwd',
  '/home/admin/.bashrc',
  '/tmp/update.exe',
  'C:/Windows/System32/drivers/etc/hosts',
  '/var/tmp/suspicious.sh',
  '/opt/app/main.py',
  'C:/Users/Public/Downloads/invoice.pdf',
  '/usr/local/bin/scan',
  '/mnt/data/backup.zip',
];
function randomIP() {
  return `${Math.floor(Math.random()*256)}.${Math.floor(Math.random()*256)}.${Math.floor(Math.random()*256)}.${Math.floor(Math.random()*256)}`;
}
function randomTime() {
  const now = new Date();
  return now.toLocaleTimeString('en-US', { hour12: false });
}
function randomFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
const LOG_COUNT = 18;
const SCAN_DURATION = 8000;
const LOADING_BAR_COLORS = ['bg-green-400', 'bg-yellow-400', 'bg-red-500'];

const ScanSimulator = () => {
  const [status, setStatus] = useState('idle');
  const [logs, setLogs] = useState([]);
  const [threats, setThreats] = useState([]);
  const [progress, setProgress] = useState(0);
  const [summary, setSummary] = useState(null);
  const [cursorColor, setCursorColor] = useState('green');
  const intervalRef = useRef();
  const audioRef = useRef();

  // Generate all logs at once for consistent summary
  function generateLogs() {
    let fakeLogs = [];
    let threatList = [];
    for (let i = 0; i < LOG_COUNT; i++) {
      const isThreat = Math.random() < 0.32;
      const ip = randomIP();
      const file = randomFrom(FILE_PATHS);
      const malware = randomFrom(MALWARE_TYPES);
      const time = randomTime();
      if (isThreat) {
        fakeLogs.push({
          type: 'threat',
          msg: `[${time}] Threat detected: ${malware} at ${file} (source: ${ip})`,
          ip,
          malware,
        });
        threatList.push({ ip, malware });
      } else {
        fakeLogs.push({
          type: 'info',
          msg: `[${time}] Scanning IP ${ip}...`,
        });
      }
    }
    return { fakeLogs, threatList };
  }

  function startScan() {
    setStatus('scanning');
    setLogs([]);
    setThreats([]);
    setProgress(0);
    setSummary(null);
    setCursorColor('green');
    const { fakeLogs, threatList } = generateLogs();
    let idx = 0;
    const total = fakeLogs.length;
    const interval = SCAN_DURATION / total;
    intervalRef.current = setInterval(() => {
      setLogs((prev) => [...prev, fakeLogs[idx]]);
      setProgress(Math.round(((idx + 1) / total) * 100));
      if (fakeLogs[idx].type === 'threat') {
        setThreats((prev) => [...prev, fakeLogs[idx]]);
        setCursorColor('red');
        setTimeout(() => setCursorColor('green'), 350);
      }
      idx++;
      if (idx === total) {
        clearInterval(intervalRef.current);
        setTimeout(() => finishScan(threatList), 600);
      }
    }, interval);
  }

  function finishScan(threatList) {
    // Calculate summary
    const threatCount = threatList.length;
    const topIPs = Object.entries(
      threatList.reduce((acc, t) => {
        acc[t.ip] = (acc[t.ip] || 0) + 1;
        return acc;
      }, {})
    )
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([ip, count]) => ({ ip, count }));
    const typeCounts = threatList.reduce((acc, t) => {
      acc[t.malware] = (acc[t.malware] || 0) + 1;
      return acc;
    }, {});
    setSummary({
      threatCount,
      topIPs,
      typeCounts,
    });
    setStatus('finished');
  }

  function resetScan() {
    setStatus('idle');
    setLogs([]);
    setThreats([]);
    setProgress(0);
    setSummary(null);
  }

  // Blinking cursor
  const cursorClass = `inline-block w-2 h-6 ml-1 align-middle ${cursorColor === 'green' ? 'bg-green-400' : 'bg-red-500'} animate-pulse`;

  // Bar chart data
  const chartData = summary
    ? Object.entries(summary.typeCounts).map(([type, count]) => ({ type, count }))
    : [];

  return (
    <div className="bg-gray-900 text-gray-100 font-mono rounded-2xl p-8 max-w-xl mx-auto my-12 shadow-2xl min-h-[440px] relative animate-fade-in">
      <div className="text-lg mb-6 tracking-wide flex items-center gap-2">
        <span className="text-green-400 font-bold">root@cyberscan</span>
        <span className="text-blue-400">~</span>
        <span className="text-gray-400">$</span>
        <span className="ml-2 font-semibold">Scan Simulator</span>
      </div>
      {status === 'idle' && (
        <button
          className="bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-green-400"
          onClick={startScan}
        >
          Start Scan
        </button>
      )}
      {status === 'scanning' && (
        <div className="mt-2">
          <div className="h-56 overflow-y-auto bg-gray-950/80 rounded-lg p-2 border border-gray-800 shadow-inner mb-4 transition-all duration-300 text-xs leading-tight">
            {logs.map((log, i) =>
              log ? (
                <div
                  key={i}
                  className={`truncate transition-all duration-200 ${log.type === 'threat' ? 'text-red-400 font-semibold' : 'text-green-300'}`}
                  title={log.msg}
                >
                  {log.msg.length > 60 ? log.msg.slice(0, 60) + '...' : log.msg}
                </div>
              ) : null
            )}
            <span className="text-green-400">{'>'}</span>
            <span className={cursorClass} style={{ verticalAlign: 'middle' }}>|</span>
          </div>
          {/* Loading bar only during scanning */}
          <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden mb-2">
            <div
              className={`h-full transition-all duration-300 ${progress < 60 ? 'bg-green-400' : progress < 90 ? 'bg-yellow-400' : 'bg-red-500'}`}
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="text-xs text-gray-400">Scanning... {progress}%</div>
        </div>
      )}
      {status === 'finished' && summary && (
        <div className="mt-2">
          <div className="h-56 overflow-y-auto bg-gray-950/80 rounded-lg p-2 border border-gray-800 shadow-inner mb-4 transition-all duration-300 text-xs leading-tight">
            {logs.map((log, i) =>
              log ? (
                <div
                  key={i}
                  className={`truncate transition-all duration-200 ${log.type === 'threat' ? 'text-red-400 font-semibold' : 'text-green-300'}`}
                  title={log.msg}
                >
                  {log.msg.length > 60 ? log.msg.slice(0, 60) + '...' : log.msg}
                </div>
              ) : null
            )}
            <span className="text-green-400">{'>'}</span>
            <span className="inline-block w-2 h-6 ml-1 align-middle bg-green-400 animate-blink" style={{ verticalAlign: 'middle' }}>|</span>
          </div>
          {/* No loading bar or progress here */}
          <div className="mb-4">
            <div className="text-green-400 text-lg font-bold mb-1">Scan Complete</div>
            <div className="text-gray-200 mb-1">{summary.threatCount} threats found</div>
            <div className="text-gray-400 text-xs mb-2">Top threat source IPs:</div>
            <ul className="mb-2">
              {summary.topIPs.map((ip) => (
                <li key={ip.ip} className="text-yellow-300 text-xs">{ip.ip} <span className="text-gray-400">({ip.count} threats)</span></li>
              ))}
            </ul>
            <div className="w-full h-40">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} layout="vertical" margin={{ left: 10, right: 10, top: 10, bottom: 10 }}>
                  <XAxis type="number" hide />
                  <YAxis type="category" dataKey="type" tick={{ fill: '#facc15', fontSize: 12 }} width={120} />
                  <Tooltip contentStyle={{ background: '#111827', border: '1px solid #facc15', borderRadius: '8px', color: '#fff' }} />
                  <Bar dataKey="count" radius={[8, 8, 8, 8]}>
                    {chartData.map((entry, idx) => (
                      <Cell key={`cell-${idx}`} fill="#facc15" />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <button
            className="mt-2 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold px-6 py-2 rounded-lg shadow hover:scale-105 transition-transform duration-200"
            onClick={resetScan}
          >
            Run Again
          </button>
        </div>
      )}
    </div>
  );
};

export default ScanSimulator;

// Tailwind animation utility
// Add this to your global CSS if not present:
// @layer utilities {
//   .animate-fade-in {
//     @apply opacity-0 animate-fadeIn;
//   }
//   @keyframes fadeIn {
//     to { opacity: 1; }
//   }
//   .animate-blink {
//     animation: blink 1s steps(2, start) infinite;
//   }
//   @keyframes blink {
//     to { visibility: hidden; }
//   }
// } 