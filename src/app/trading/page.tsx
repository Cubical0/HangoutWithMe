'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import TradingHero from '@/components/sections/trading/TradingHero';
import TradingDashboardHeader from '@/components/sections/trading/TradingDashboardHeader';
import MarketOverview from '@/components/sections/trading/MarketOverview';
import TradingTools from '@/components/sections/trading/TradingTools';
import { BarChart3, Bell, TrendingUp, Search, ClipboardList } from 'lucide-react';

const tradingTools = [
  {
    id: 1,
    name: "Live Trading Dashboard",
    description: "Real-time market data and advanced charting tools",
    icon: BarChart3,
    features: ["Real-time prices", "Advanced charts", "Technical indicators", "Portfolio tracking"]
  },
  {
    id: 2,
    name: "Signal Alerts",
    description: "Get notified of profitable trading opportunities",
    icon: Bell,
    features: ["Buy/Sell signals", "Risk assessment", "Entry/Exit points", "Mobile notifications"]
  },
  {
    id: 3,
    name: "Portfolio Analyzer",
    description: "Track and analyze your crypto portfolio performance",
    icon: TrendingUp,
    features: ["Performance metrics", "Risk analysis", "Profit/Loss tracking", "Asset allocation"]
  },
  {
    id: 4,
    name: "Market Scanner",
    description: "Scan thousands of cryptocurrencies for opportunities",
    icon: Search,
    features: ["Custom filters", "Volume analysis", "Price alerts", "Trend detection"]
  }
];

const marketData = [
  { symbol: "BTC/USDT", price: "$43,250", change: "+2.45%", volume: "$2.1B", trend: "up" },
  { symbol: "ETH/USDT", price: "$2,680", change: "+1.82%", volume: "$1.8B", trend: "up" },
  { symbol: "BNB/USDT", price: "$315", change: "-0.65%", volume: "$450M", trend: "down" },
  { symbol: "ADA/USDT", price: "$0.52", change: "+3.21%", volume: "$280M", trend: "up" },
  { symbol: "SOL/USDT", price: "$98", change: "+4.15%", volume: "$520M", trend: "up" },
  { symbol: "XRP/USDT", price: "$0.61", change: "-1.23%", volume: "$380M", trend: "down" },
];

export default function Trading() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="pt-32 min-h-screen bg-black">
      <TradingHero />
      <MarketOverview />
      {/* <TradingTools /> */}

      {/* Trading Interface Preview */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900/20 to-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent mb-12 text-center">Advanced Trading Interface</h2>
          
          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-900 rounded-lg p-1 border border-gray-800">
              {['dashboard', 'charts', 'orders'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-md font-medium transition-colors duration-300 ${
                    activeTab === tab 
                      ? 'bg-gradient-to-r from-gray-600 to-gray-700 text-white' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Interface Preview */}
          <div className="bg-gray-900 rounded-lg border border-gray-800 p-8 min-h-[400px]">
            {activeTab === 'dashboard' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-800 rounded-lg p-6">
                  <h3 className="text-white font-semibold mb-4">Portfolio Value</h3>
                  <div className="text-3xl font-bold text-white mb-2">$125,430</div>
                  <div className="text-gray-400 text-sm">+12.5% (24h)</div>
                </div>
                <div className="bg-gray-800 rounded-lg p-6">
                  <h3 className="text-white font-semibold mb-4">Active Positions</h3>
                  <div className="text-3xl font-bold text-white mb-2">8</div>
                  <div className="text-gray-400 text-sm">3 Long, 5 Short</div>
                </div>
                <div className="bg-gray-800 rounded-lg p-6">
                  <h3 className="text-white font-semibold mb-4">Today's P&L</h3>
                  <div className="text-3xl font-bold text-white mb-2">+$2,340</div>
                  <div className="text-gray-400 text-sm">+1.9%</div>
                </div>
              </div>
            )}
            
            {activeTab === 'charts' && (
              <div className="text-center">
                <BarChart3 className="w-16 h-16 text-gray-300 mb-4 mx-auto" />
                <h3 className="text-2xl font-bold text-white mb-4">Advanced Charting</h3>
                <p className="text-gray-300 mb-6">
                  Professional-grade charts with 100+ technical indicators, 
                  drawing tools, and real-time data feeds.
                </p>
                <div className="bg-gray-800 rounded-lg h-64 flex items-center justify-center">
                  <span className="text-gray-500">Interactive Chart Preview</span>
                </div>
              </div>
            )}
            
            {activeTab === 'orders' && (
              <div className="text-center">
                <ClipboardList className="w-16 h-16 text-gray-300 mb-4 mx-auto" />
                <h3 className="text-2xl font-bold text-white mb-4">Order Management</h3>
                <p className="text-gray-300 mb-6">
                  Advanced order types including stop-loss, take-profit, 
                  trailing stops, and algorithmic trading strategies.
                </p>
                <div className="bg-gray-800 rounded-lg p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="text-left">
                      <div className="text-white font-semibold mb-2">Open Orders</div>
                      <div className="text-gray-400">5 active orders</div>
                    </div>
                    <div className="text-left">
                      <div className="text-white font-semibold mb-2">Order History</div>
                      <div className="text-gray-400">247 completed</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent mb-6">Start Trading Like a Pro</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get access to professional trading tools, real-time data, and advanced analytics. 
            Join thousands of successful traders today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="relative inline-flex h-16 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-base font-medium text-white backdrop-blur-3xl">
                Start Trading Now
              </span>
            </button>
            <button className="border border-gray-600 text-gray-300 py-4 px-8 rounded-lg font-semibold text-lg hover:border-white hover:text-white transition-colors duration-300">
              View Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}