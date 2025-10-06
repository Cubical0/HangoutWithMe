'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { CheckCircle, XCircle } from 'lucide-react';

export default function PaymentNotification() {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationType, setNotificationType] = useState<'success' | 'cancelled'>('success');
  const searchParams = useSearchParams();

  useEffect(() => {
    const payment = searchParams.get('payment');
    if (payment === 'success') {
      setNotificationType('success');
      setShowNotification(true);
      // Auto-hide after 5 seconds
      setTimeout(() => setShowNotification(false), 5000);
    } else if (payment === 'cancelled') {
      setNotificationType('cancelled');
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 5000);
    }
  }, [searchParams]);

  return (
    <AnimatePresence>
      {showNotification && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 max-w-md w-full mx-4"
        >
          <div
            className={`p-4 rounded-lg shadow-2xl border ${
              notificationType === 'success'
                ? 'bg-green-500/10 border-green-500/50 backdrop-blur-sm'
                : 'bg-red-500/10 border-red-500/50 backdrop-blur-sm'
            }`}
          >
            <div className="flex items-center gap-3">
              {notificationType === 'success' ? (
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
              ) : (
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0" />
              )}
              <div className="flex-1">
                <h3
                  className={`font-semibold ${
                    notificationType === 'success' ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {notificationType === 'success'
                    ? 'Payment Successful!'
                    : 'Payment Cancelled'}
                </h3>
                <p className="text-sm text-gray-300">
                  {notificationType === 'success'
                    ? 'Welcome to Pro Plan! You now have access to all premium features.'
                    : 'Your payment was cancelled. You can try again anytime.'}
                </p>
              </div>
              <button
                onClick={() => setShowNotification(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <XCircle className="h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}