import React, { useState } from 'react';
import { Lock, CreditCard } from 'lucide-react';
import { generatePayFastSignature, createPayFastForm, PayFastData } from '../utils/payfast';
import { PAYFAST_CONFIG } from '../config/payfast';

interface PayFastButtonProps {
  amount: number;
  customerData: {
    firstName: string;
    lastName: string;
    email: string;
  };
  orderData: {
    orderId: string;
    description: string;
    items: string;
  };
  onPaymentInitiated?: () => void;
  className?: string;
}

const PayFastButton: React.FC<PayFastButtonProps> = ({
  amount,
  customerData,
  orderData,
  onPaymentInitiated,
  className = ''
}) => {
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = () => {
    setIsProcessing(true);
    
    if (onPaymentInitiated) {
      onPaymentInitiated();
    }

    // Prepare PayFast data
    const payFastData: PayFastData = {
      merchant_id: PAYFAST_CONFIG.MERCHANT_ID,
      merchant_key: PAYFAST_CONFIG.MERCHANT_KEY,
      return_url: PAYFAST_CONFIG.RETURN_URL,
      cancel_url: PAYFAST_CONFIG.CANCEL_URL,
      notify_url: PAYFAST_CONFIG.NOTIFY_URL,
      name_first: customerData.firstName,
      name_last: customerData.lastName,
      email_address: customerData.email,
      m_payment_id: orderData.orderId,
      amount: amount.toFixed(2),
      item_name: 'Auto First Mechanical Aid Package',
      item_description: orderData.description,
      custom_str1: orderData.items, // Store package details
      custom_str2: 'auto-first-website',
      custom_str3: new Date().toISOString(),
    };

    // Generate signature
    const signature = generatePayFastSignature(payFastData, PAYFAST_CONFIG.PASSPHRASE);

    // Create and submit form
    const formHtml = createPayFastForm(payFastData, signature);
    
    // Create a temporary div to hold the form
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = formHtml;
    tempDiv.style.display = 'none';
    document.body.appendChild(tempDiv);
    
    // Submit the form
    const form = tempDiv.querySelector('#payfast-form') as HTMLFormElement;
    if (form) {
      form.submit();
    }
    
    // Clean up
    setTimeout(() => {
      document.body.removeChild(tempDiv);
      setIsProcessing(false);
    }, 1000);
  };

  return (
    <button
      onClick={handlePayment}
      disabled={isProcessing}
      className={`flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white py-3 px-6 rounded-lg font-semibold transition-colors ${className}`}
    >
      {isProcessing ? (
        <>
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
          Processing...
        </>
      ) : (
        <>
          <Lock className="h-4 w-4" />
          Pay with PayFast
          <CreditCard className="h-4 w-4" />
        </>
      )}
    </button>
  );
};

export default PayFastButton;