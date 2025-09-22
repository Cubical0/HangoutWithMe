'use client';

import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';

const marketData = [
  { symbol: "BTC/USDT", price: "$43,250", change: "+2.45%", volume: "$2.1B", trend: "up" },
  { symbol: "ETH/USDT", price: "$2,680", change: "+1.82%", volume: "$1.8B", trend: "up" },
  { symbol: "BNB/USDT", price: "$315", change: "-0.65%", volume: "$450M", trend: "down" },
  { symbol: "ADA/USDT", price: "$0.52", change: "+3.21%", volume: "$280M", trend: "up" },
  { symbol: "SOL/USDT", price: "$98", change: "+4.15%", volume: "$520M", trend: "up" },
  { symbol: "XRP/USDT", price: "$0.61", change: "-1.23%", volume: "$380M", trend: "down" },
];

export default function MarketOverview() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Live Market Data</h2>
        <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
            {marketData.map((coin, index) => (
              <motion.div
                key={coin.symbol}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800 rounded-lg p-4 border border-gray-700"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-white font-semibold">{coin.symbol}</h3>
                  {coin.trend === 'up' ? 
                    <TrendingUp className="w-6 h-6 text-green-400" /> : 
                    <TrendingDown className="w-6 h-6 text-red-400" />
                  }
                </div>
                <div className="text-2xl font-bold text-white mb-1">{coin.price}</div>
                <div className={`text-sm font-medium mb-2 ${
                  coin.change.startsWith('+') ? 'text-green-400' : 'text-red-400'
                }`}>
                  {coin.change}
                </div>
                <div className="text-gray-400 text-sm">Vol: {coin.volume}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}