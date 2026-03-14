"use client";

import React from 'react';
import { 
  Search, 
  MoreHorizontal, 
  ChevronLeft, 
  ChevronRight, 
  HeadphonesIcon 
} from 'lucide-react';
import Image from 'next/image';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const paymentData = [
  { name: 'Anna Jensen', phone: '+88 01745826592', email: 'user@gmail.com', subscription: '1 M', amount: '$911', startDate: '1 Jan, 2026', endDate: '1 Jan, 2026', status: 'Paid' },
  { name: 'Anna Jensen', phone: '+88 01745826592', email: 'user@gmail.com', subscription: '1 Y', amount: '$44', startDate: '1 Jan, 2026', endDate: '1 Jan, 2026', status: 'Paid' },
  { name: 'Anna Jensen', phone: '+88 01745826592', email: 'user@gmail.com', subscription: '1 M', amount: '$54', startDate: '1 Jan, 2026', endDate: '1 Jan, 2026', status: 'Paid' },
  { name: 'Anna Jensen', phone: '+88 01745826592', email: 'user@gmail.com', subscription: '1 Y', amount: '$68', startDate: '1 Jan, 2026', endDate: '1 Jan, 2026', status: 'Paid' },
  { name: 'Anna Jensen', phone: '+88 01745826592', email: 'user@gmail.com', subscription: '1 M', amount: '$09', startDate: '1 Jan, 2026', endDate: '1 Jan, 2026', status: 'Paid' },
  { name: 'Anna Jensen', phone: '+88 01745826592', email: 'user@gmail.com', subscription: '1 Y', amount: '$78', startDate: '1 Jan, 2026', endDate: '1 Jan, 2026', status: 'Paid' },
  { name: 'Anna Jensen', phone: '+88 01745826592', email: 'user@gmail.com', subscription: '1 M', amount: '$34', startDate: '1 Jan, 2026', endDate: '1 Jan, 2026', status: 'Paid' },
];

export default function PaymentPage() {
  return (
    <div className="p-8 bg-[#F9F9F9] min-h-screen space-y-8">
      {/* Top Bar */}
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-400 text-sm font-medium tracking-tight">Super Admin</p>
          <h1 className="text-2xl font-bold text-gray-900">Payment</h1>
        </div>
        <div className="flex items-center gap-4">
           
          <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200">
            <Image src="/user.png" alt="User" width={40} height={40} className="object-cover" />
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="bg-white rounded-[40px] shadow-sm border border-gray-50 p-10 relative">
        {/* Search Header */}
        <div className="flex justify-end mb-8">
          <div className="relative w-full max-w-sm">
            <input 
              type="text" 
              placeholder="Search" 
              className="w-full bg-white border border-gray-200 rounded-2xl py-3 px-6 pr-12 outline-none text-sm text-gray-700 placeholder:text-gray-400 focus:ring-1 focus:ring-blue-600 transition-all"
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
        </div>

        {/* Table Section */}
        <div className="overflow-hidden">
          <Table>
            <TableHeader className="bg-[#F9F9F9] border-none">
              <TableRow className="hover:bg-transparent border-none">
                <TableHead className="py-4 px-6 text-gray-900 font-bold text-sm text-center uppercase tracking-wider">Name</TableHead>
                <TableHead className="py-4 px-6 text-gray-900 font-bold text-sm text-center uppercase tracking-wider">Phone</TableHead>
                <TableHead className="py-4 px-6 text-gray-900 font-bold text-sm text-center uppercase tracking-wider">Email</TableHead>
                <TableHead className="py-4 px-6 text-gray-900 font-bold text-sm text-center uppercase tracking-wider">Subscription</TableHead>
                <TableHead className="py-4 px-6 text-gray-900 font-bold text-sm text-center uppercase tracking-wider">Amount</TableHead>
                <TableHead className="py-4 px-6 text-gray-900 font-bold text-sm text-center uppercase tracking-wider">Start Date</TableHead>
                <TableHead className="py-4 px-6 text-gray-900 font-bold text-sm text-center uppercase tracking-wider">Ending Date</TableHead>
                <TableHead className="py-4 px-6 text-gray-900 font-bold text-sm text-center uppercase tracking-wider">Status</TableHead>
                <TableHead className="py-4 px-6 text-gray-900 font-bold text-sm text-center uppercase tracking-wider">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paymentData.map((payment, index) => (
                <TableRow key={index} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <TableCell className="py-5 px-6 text-gray-500 text-sm text-center font-medium">{payment.name}</TableCell>
                  <TableCell className="py-5 px-6 text-gray-500 text-sm text-center font-medium">{payment.phone}</TableCell>
                  <TableCell className="py-5 px-6 text-gray-500 text-sm text-center font-medium">{payment.email}</TableCell>
                  <TableCell className="py-5 px-6 text-gray-500 text-sm text-center font-medium">{payment.subscription}</TableCell>
                  <TableCell className="py-5 px-6 text-gray-500 text-sm text-center font-medium">{payment.amount}</TableCell>
                  <TableCell className="py-5 px-6 text-gray-500 text-sm text-center font-medium">{payment.startDate}</TableCell>
                  <TableCell className="py-5 px-6 text-gray-500 text-sm text-center font-medium">{payment.endDate}</TableCell>
                  <TableCell className="py-5 px-6 text-center">
                    <span className="bg-green-50 text-green-500 px-4 py-1.5 rounded-full text-xs font-medium border border-green-100">
                      {payment.status}
                    </span>
                  </TableCell>
                  <TableCell className="py-5 px-6 text-center">
                    <button className="bg-[#0052FF] text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-blue-700 transition-all">
                      View
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Pagination Section */}
        <div className="mt-10 flex justify-center items-center gap-6">
          <button className="text-blue-600 hover:text-blue-800 transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-400 cursor-pointer hover:text-gray-600 transition-colors">01</span>
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md">
              02
            </div>
            <span className="text-sm font-medium text-gray-400 cursor-pointer hover:text-gray-600 transition-colors">03</span>
            <span className="text-sm font-medium text-gray-400 cursor-pointer hover:text-gray-600 transition-colors">04</span>
            <span className="text-sm font-medium text-gray-400 cursor-pointer hover:text-gray-600 transition-colors">05</span>
          </div>

          <button className="text-blue-600 hover:text-blue-800 transition-colors">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}