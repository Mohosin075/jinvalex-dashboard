"use client";

import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts';

interface PayoutChartProps {
    data: any[];
}

const PayoutChart: React.FC<PayoutChartProps> = ({ data }) => {
    return (
        <div className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-50">
            <h3 className="text-xl font-bold text-gray-900 mb-8">Total Payout</h3>
            <div className="h-[300px] w-full relative">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
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
                <div className="absolute top-[100px] left-[60%] transform -translate-x-1/2 bg-green-500 px-3 py-1 rounded-lg shadow-md text-xs font-bold text-white text-center">
                    Sales <br/> 2,678
                </div>
            </div>
        </div>
    );
};

export default PayoutChart;
