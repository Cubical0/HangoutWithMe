'use client';

import { motion } from 'framer-motion';

const tradingTools = [
  {
    id: 1,
    name: "Live Trading Dashboard",
    description: "Real-time market data and advanced charting tools",
    icon: "📊",
    features: ["Real-time prices", "Advanced charts", "Technical indicators", "Portfolio tracking"]
  },
  {
    id: 2,
    name: "Signal Alerts",
    description: "Get notified of profitable trading opportunities",
    icon: "🔔",
    features: ["Buy/Sell signals", "Risk assessment", "Entry/Exit points", "Mobile notifications"]
  },
  {
    id: 3,
    name: "Portfolio Analyzer",
    description: "Track and analyze your crypto portfolio performance",
    icon: "📈",
    features: ["Performance metrics", "Risk analysis", "Profit/Loss tracking", "Asset allocation"]
  },
  {
    id: 4,
    name: "Market Scanner",
    description: "Scan thousands of cryptocurrencies for opportunities",
    icon: "🔍",
    features: ["Custom filters", "Volume analysis", "Price alerts", "Trend detection"]
  }
];

export default function TradingTools() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Professional Trading Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tradingTools.map((tool, index) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-900 rounded-lg p-8 border border-gray-800 hover:border-green-500 transition-colors duration-300"
            >
              <div className="text-6xl mb-4">{tool.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{tool.name}</h3>
              <p className="text-gray-300 mb-6">{tool.description}</p>
              <ul className="space-y-2 mb-6">
                {tool.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-colors duration-300">
                Access Tool
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}