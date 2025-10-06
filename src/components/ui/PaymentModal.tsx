'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, CheckCircle } from 'lucide-react';
import PayPalButton from './PayPalButton';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName?: string;
  amount?: string;
  currency?: string;
  features?: string[];
  redirectUrl?: string;
  billingType?: string;
}

const PaymentModal: React.FC<PaymentModalProps> = ({
  isOpen,
  onClose,
  planName = 'Pro Plan',
  amount = '49.99',
  currency = 'USD',
  features,
  redirectUrl = '/trading?payment=success',
  billingType = 'Monthly',
}) => {
  // Default features if none provided
  const defaultFeatures = [
    'Multiple trading signals everyday',
    'Real-time market analysis',
    'Priority support & alerts',
    'Exclusive trading strategies',
    'Portfolio optimization tools',
  ];

  const displayFeatures = features || defaultFeatures;
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  const handleSuccess = (details: unknown) => {
    // Show success message
    alert(`Payment successful! Welcome to ${planName}!`);
    
    // Close modal
    onClose();
    
    // Redirect or update UI
    setTimeout(() => {
      window.location.href = redirectUrl;
    }, 1000);
  };

  const handleError = (error: unknown) => {
    console.error('Payment error:', error);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="relative p-6 border-b border-white/10">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X className="h-6 w-6" />
                </button>

                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-lg">
                    <Shield className="h-6 w-6 text-yellow-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    Upgrade to {planName}
                  </h2>
                </div>
                <p className="text-gray-400 text-sm">
                  Secure payment powered by PayPal
                </p>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Plan Details */}
                <div className="bg-white/5 rounded-lg p-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Plan</span>
                    <span className="text-white font-semibold">{planName}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Billing</span>
                    <span className="text-white font-semibold">{billingType}</span>
                  </div>
                  <div className="h-px bg-white/10"></div>
                  <div className="flex justify-between items-center">
                    <span className="text-white font-semibold">Total</span>
                    <span className="text-2xl font-bold text-yellow-500">
                      ${amount} {currency}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  <h3 className="text-white font-semibold text-sm mb-3">
                    What you&apos;ll get:
                  </h3>
                  {displayFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* PayPal Button */}
                <div className="pt-4">
                  <PayPalButton
                    amount={amount}
                    currency={currency}
                    onSuccess={handleSuccess}
                    onError={handleError}
                  />
                </div>

                {/* Security Note */}
                <div className="flex items-start gap-2 text-xs text-gray-500">
                  <Shield className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  <p>
                    Your payment information is secure and encrypted. We never store your payment details.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PaymentModal;