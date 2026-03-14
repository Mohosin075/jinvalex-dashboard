"use client";

import React from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area,
  PieChart, Pie, Cell 
} from 'recharts';
import { User, CreditCard, Wallet, HeadphonesIcon } from 'lucide-react';
import StatCard from "@/components/dashboard/StatCard";
import Image from 'next/image';

const userTrackData = [
  { name: 'Jan', pro: 75, free: 60 },
  { name: 'Feb', pro: 65, free: 50 },
  { name: 'Mar', pro: 80, free: 65 },
  { name: 'Apr', pro: 70, free: 55 },
  { name: 'May', pro: 75, free: 60 },
  { name: 'Jun', pro: 65, free: 50 },
  { name: 'Jul', pro: 75, free: 60 },
  { name: 'Aug', pro: 70, free: 55 },
  { name: 'Sep', pro: 80, free: 65 },
  { name: 'Oct', pro: 75, free: 60 },
  { name: 'Nov', pro: 85, free: 70 },
  { name: 'Dec', pro: 75, free: 60 },
];

const pieData = [
  { name: 'Pro', value: 70 },
  { name: 'Free', value: 30 },
];
const COLORS = ['#2563eb', '#eff6ff'];

const earningData = [
  { name: 'Jan', value: 50 },
  { name: 'Feb', value: 40 },
  { name: 'Mar', value: 60 },
  { name: 'Apr', value: 45 },
  { name: 'May', value: 55 },
  { name: 'Jun', value: 40 },
  { name: 'Jul', value: 50 },
  { name: 'Aug', value: 45 },
  { name: 'Sep', value: 60 },
  { name: 'Oct', value: 50 },
  { name: 'Nov', value: 65 },
  { name: 'Dec', value: 55 },
];

const payoutData = [
  { name: 'Jan', value: 60 },
  { name: 'Feb', value: 50 },
  { name: 'Mar', value: 70 },
  { name: 'Apr', value: 55 },
  { name: 'May', value: 65 },
  { name: 'Jun', value: 50 },
  { name: 'Jul', value: 60 },
  { name: 'Aug', value: 55 },
  { name: 'Sep', value: 70 },
  { name: 'Oct', value: 60 },
  { name: 'Nov', value: 75 },
  { name: 'Dec', value: 65 },
];

export default function Dashboard() {
  return (
    <div className="p-8 bg-[#f8fafc] min-h-screen space-y-8">
      {/* Top Bar */}
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-400 text-sm">Super Admin</p>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-full font-medium text-sm hover:bg-blue-700 transition-colors">
            <HeadphonesIcon className="w-4 h-4" />
            <span>Support</span>
          </button>
          <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200">
            <Image src="/user.png" alt="User" width={40} height={40} className="object-cover" />
          </div>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Pro Users" 
          value="7,670" 
          trend="+ 2k" 
          trendColor="text-yellow-500"
          icon={User}
          iconColor="text-yellow-500"
          iconBg="bg-yellow-50"
          showStar={true}
        />
        <StatCard 
          title="Free User" 
          value="1,500" 
          trend="+ 0.5k" 
          trendColor="text-green-500"
          icon={User}
          iconColor="text-green-500"
          iconBg="bg-green-50"
        />
        <StatCard 
          title="Total Earning" 
          value="$7,283" 
          trend="+01k" 
          trendColor="text-red-500"
          icon={CreditCard}
          iconColor="text-red-500"
          iconBg="bg-red-50"
        />
        <StatCard 
          title="Total Payout" 
          value="$6,000" 
          trend="+ 0.1k" 
          trendColor="text-green-500"
          icon={Wallet}
          iconColor="text-green-500"
          iconBg="bg-green-50"
        />
      </div>

      {/* Middle Row Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-8 rounded-[40px] shadow-sm border border-gray-50">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-bold text-gray-900">User Track</h3>
            <select className="text-sm bg-gray-50 border border-gray-100 rounded-lg px-3 py-1 text-gray-500 outline-none">
              <option>2026</option>
            </select>
          </div>
          <div className="h-[300px] w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={userTrackData}>
                <defs>
                  <linearGradient id="colorPro" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <Tooltip />
                <Area type="monotone" dataKey="pro" stroke="#2563eb" strokeWidth={3} fillOpacity={1} fill="url(#colorPro)" />
                <Area type="monotone" dataKey="free" stroke="#e2e8f0" strokeWidth={3} fill="transparent" />
              </AreaChart>
            </ResponsiveContainer>
            {/* Value indicator on chart (mock) */}
            <div className="absolute top-[120px] left-[50%] transform -translate-x-1/2 bg-white px-3 py-1 rounded-lg shadow-md border border-gray-100 text-xs font-bold text-gray-700">
              2,678
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-50">
          <h3 className="text-xl font-bold text-gray-900 mb-8">User</h3>
          <div className="h-[300px] w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={110}
                  paddingAngle={0}
                  dataKey="value"
                  startAngle={90}
                  endAngle={450}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="text-3xl font-bold text-gray-900">59k</div>
              <div className="text-sm text-gray-400">All User</div>
            </div>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                <span className="text-sm text-gray-400">Pro</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-50"></div>
                <span className="text-sm text-gray-400">Free</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-50">
          <h3 className="text-xl font-bold text-gray-900 mb-8">Total Earning</h3>
          <div className="h-[300px] w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={earningData}>
                <defs>
                  <linearGradient id="colorEarning" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#ef4444" strokeWidth={3} fillOpacity={1} fill="url(#colorEarning)" />
              </AreaChart>
            </ResponsiveContainer>
            <div className="absolute top-[100px] left-[50%] transform -translate-x-1/2 bg-red-500 px-3 py-1 rounded-lg shadow-md text-xs font-bold text-white">
              Sales <br/> 2,678
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-50">
          <h3 className="text-xl font-bold text-gray-900 mb-8">Total Payout</h3>
          <div className="h-[300px] w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={payoutData}>
                <defs>
                  <linearGradient id="colorPayout" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22c55e" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#22c55e" strokeWidth={3} fillOpacity={1} fill="url(#colorPayout)" />
              </AreaChart>
            </ResponsiveContainer>
            <div className="absolute top-[100px] left-[60%] transform -translate-x-1/2 bg-green-500 px-3 py-1 rounded-lg shadow-md text-xs font-bold text-white">
              Sales <br/> 2,678
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
