"use client";

import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts';

interface UserTrackChartProps {
    data: any[];
}

const UserTrackChart: React.FC<UserTrackChartProps> = ({ data }) => {
    return (
        <div className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-50">
            <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-bold text-gray-900">User Track</h3>
                <select className="text-sm bg-gray-50 border border-gray-100 rounded-lg px-3 py-1 text-gray-500 outline-none">
                    <option>2026</option>
                </select>
            </div>
            <div className="h-[300px] w-full relative">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
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
                <div className="absolute top-[120px] left-[50%] transform -translate-x-1/2 bg-white px-3 py-1 rounded-lg shadow-md border border-gray-100 text-xs font-bold text-gray-700">
                    2,678
                </div>
            </div>
        </div>
    );
};

export default UserTrackChart;
