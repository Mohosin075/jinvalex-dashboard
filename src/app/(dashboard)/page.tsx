"use client";

import React from 'react';
import { User, CreditCard, Wallet } from 'lucide-react';
import StatCard from "@/components/dashboard/StatCard";
import Image from 'next/image';
import UserTrackChart from "@/components/dashboard/charts/UserTrackChart";
import UserTypePieChart from "@/components/dashboard/charts/UserTypePieChart";
import EarningChart from "@/components/dashboard/charts/EarningChart";
import PayoutChart from "@/components/dashboard/charts/PayoutChart";

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
    <div className="p-8 bg-[#F9F9F9] min-h-screen space-y-8">
      {/* Top Bar */}
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-400 text-sm">Super Admin</p>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        </div>
        <div className="flex items-center gap-4">
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
        <div className="lg:col-span-2">
          <UserTrackChart data={userTrackData} />
        </div>
        <UserTypePieChart data={pieData} colors={COLORS} />
      </div>

      {/* Bottom Row Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <EarningChart data={earningData} />
        <PayoutChart data={payoutData} />
      </div>
    </div>
  );
}
