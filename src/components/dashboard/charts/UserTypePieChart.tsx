"use client";

import React from 'react';
import { 
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer 
} from 'recharts';

interface UserTypePieChartProps {
    data: any[];
    colors: string[];
}

const UserTypePieChart: React.FC<UserTypePieChartProps> = ({ data, colors }) => {
    return (
        <div className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-50">
            <h3 className="text-xl font-bold text-gray-900 mb-8">User</h3>
            <div className="h-[300px] w-full relative">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={80}
                            outerRadius={110}
                            paddingAngle={0}
                            dataKey="value"
                            startAngle={90}
                            endAngle={450}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
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
                        <div className="w-3 h-3 rounded-full bg-[#2563eb]"></div>
                        <span className="text-sm text-gray-400">Pro</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#94a3b8]"></div>
                        <span className="text-sm text-gray-400">Free</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserTypePieChart;
