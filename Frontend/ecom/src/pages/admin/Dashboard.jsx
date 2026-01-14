import React, { useState } from 'react';
import { BarChart, Bar, PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import InventoryIcon from '@mui/icons-material/Inventory';
import CategoryIcon from '@mui/icons-material/Category';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Dashboard() {
  const [timeRange, setTimeRange] = useState('week');

  // Sample data for ShopEase
  const stats = [
    { title: 'Total Users', count: 12450, change: '+12%', icon: PeopleAltIcon, color: 'from-purple-500 to-purple-600' },
    { title: 'Products', count: 3240, change: '+8%', icon: InventoryIcon, color: 'from-purple-400 to-purple-500' },
    { title: 'Categories', count: 4, change: '+0%', icon: CategoryIcon, color: 'from-purple-300 to-purple-400' },
    { title: 'Orders', count: 8920, change: '+15%', icon: ShoppingCartIcon, color: 'from-purple-600 to-purple-700' }
  ];

  const pieData = [
    { name: 'Womens', value: 1250, color: '#9333ea' },
    { name: 'Mens', value: 980, color: '#a855f7' },
    { name: 'Kids', value: 620, color: '#c084fc' },
    { name: 'Unisex', value: 390, color: '#e9d5ff' }
  ];

  const barData = [
    { month: 'Jan', womens: 180, mens: 150, kids: 90, unisex: 60 },
    { month: 'Feb', womens: 210, mens: 170, kids: 100, unisex: 70 },
    { month: 'Mar', womens: 250, mens: 190, kids: 110, unisex: 80 },
    { month: 'Apr', womens: 280, mens: 210, kids: 130, unisex: 85 },
    { month: 'May', womens: 320, mens: 240, kids: 140, unisex: 95 },
    { month: 'Jun', womens: 350, mens: 260, kids: 160, unisex: 100 }
  ];

  const lineData = [
    { day: 'Mon', orders: 240, revenue: 12000 },
    { day: 'Tue', orders: 320, revenue: 18000 },
    { day: 'Wed', orders: 280, revenue: 14000 },
    { day: 'Thu', orders: 360, revenue: 20000 },
    { day: 'Fri', orders: 420, revenue: 24000 },
    { day: 'Sat', orders: 380, revenue: 21000 },
    { day: 'Sun', orders: 340, revenue: 19000 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 p-4 md:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent mb-2">
          ShopEase Dashboard
        </h1>
        <p className="text-gray-600">Welcome back! Here's what's happening today.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color}`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-green-600 text-sm font-semibold">{stat.change}</span>
              </div>
              <h3 className="text-gray-600 text-sm font-medium mb-1">{stat.title}</h3>
              <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                {stat.count.toLocaleString()}
              </p>
            </div>
          );
        })}
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Bar Chart */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800">Monthly Sales by Category</h2>
            <select 
              className="px-4 py-2 rounded-lg border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
            >
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="year">This Year</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
              />
              <Legend />
              <Bar dataKey="womens" fill="#9333ea" radius={[8, 8, 0, 0]} name="Womens" />
              <Bar dataKey="mens" fill="#a855f7" radius={[8, 8, 0, 0]} name="Mens" />
              <Bar dataKey="kids" fill="#c084fc" radius={[8, 8, 0, 0]} name="Kids" />
              <Bar dataKey="unisex" fill="#e9d5ff" radius={[8, 8, 0, 0]} name="Unisex" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Product Distribution by Category</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 gap-3 mt-4">
            {pieData.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                <span className="text-sm text-gray-600">{item.name}: {item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Line Chart */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Weekly Performance</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={lineData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="day" stroke="#888" />
            <YAxis stroke="#888" />
            <Tooltip 
              contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="orders" 
              stroke="#9333ea" 
              strokeWidth={3}
              dot={{ fill: '#9333ea', r: 5 }}
              name="Orders"
            />
            <Line 
              type="monotone" 
              dataKey="revenue" 
              stroke="#c084fc" 
              strokeWidth={3}
              dot={{ fill: '#c084fc', r: 5 }}
              name="Revenue ($)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Activity Table */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Recent Activity</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-gray-600 font-semibold">User</th>
                <th className="text-left py-3 px-4 text-gray-600 font-semibold">Action</th>
                <th className="text-left py-3 px-4 text-gray-600 font-semibold">Category</th>
                <th className="text-left py-3 px-4 text-gray-600 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { user: 'John Doe', action: 'Added Product', category: 'Mens', status: 'Complete' },
                { user: 'Jane Smith', action: 'Updated Category', category: 'Womens', status: 'Complete' },
                { user: 'Mike Johnson', action: 'Deleted Product', category: 'Kids', status: 'Complete' },
                { user: 'Sarah Williams', action: 'Added Product', category: 'Unisex', status: 'Pending' },
                { user: 'David Brown', action: 'Updated Stock', category: 'Womens', status: 'Complete' }
              ].map((item, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-purple-50 transition-colors">
                  <td className="py-3 px-4 text-gray-800">{item.user}</td>
                  <td className="py-3 px-4 text-gray-600">{item.action}</td>
                  <td className="py-3 px-4">
                    <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm">
                      {item.category}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      item.status === 'Complete' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}