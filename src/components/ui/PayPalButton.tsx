'use client';

import React, { useState } from 'react';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';

interface PayPalButtonProps {
  amount?: string;
  currency?: string;
  onSuccess?: (details: unknown) => void;
  onError?: (error: unknown) => void;
  className?: string;
}

const PayPalButton: React.FC<PayPalButtonProps> = ({
  amount = '29.99',
  currency = 'USD',
  onSuccess,
  onError,
  className = '',
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;

  if (!clientId) {
    return (
      <div className="text-red-500 text-sm">
        PayPal is not configured. Please contact support.
      </div>
    );
  }

  const createOrder = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch('/api/paypal/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount, currency }),
      });

      if (!response.ok) {
        throw new Error('Failed to create order');
      }

      const order = await response.json();
      return order.id;
    } catch (err) {
      console.error('Error creating order:', err);
      setError('Failed to initialize payment. Please try again.');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const onApprove = async (data: { orderID: string }) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch('/api/paypal/capture-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ orderID: data.orderID }),
      });

      if (!response.ok) {
        throw new Error('Failed to capture order');
      }

      const details = await response.json();

      if (onSuccess) {
        onSuccess(details);
      } else {
        // Default success behavior
        alert('Payment successful! Welcome to Pro Plan!');
        window.location.href = '/trading?payment=success';
      }
    } catch (err) {
      console.error('Error capturing order:', err);
      setError('Payment processing failed. Please contact support.');
      if (onError) {
        onError(err);
      }
    } finally {
      setLoading(false);
    }
  };

  const onErrorHandler = (err: unknown) => {
    console.error('PayPal Error:', err);
    setError('An error occurred with PayPal. Please try again.');
    if (onError) {
      onError(err);
    }
  };

  return (
    <div className={className}>
      <PayPalScriptProvider
        options={{
          clientId: clientId,
          currency: currency,
          intent: 'capture',
        }}
      >
        <div className="relative">
          {loading && (
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-10 rounded-lg">
              <div className="text-white text-sm">Processing...</div>
            </div>
          )}
          
          {error && (
            <div className="mb-3 p-3 bg-red-500/10 border border-red-500/50 rounded-lg text-red-500 text-sm">
              {error}
            </div>
          )}

          <PayPalButtons
            style={{
              layout: 'vertical',
              color: 'gold',
              shape: 'rect',
              label: 'paypal',
            }}
            createOrder={createOrder}
            onApprove={onApprove}
            onError={onErrorHandler}
            disabled={loading}
          />
        </div>
      </PayPalScriptProvider>
    </div>
  );
};

export default PayPalButton;