// PayFast Configuration
export const PAYFAST_CONFIG = {
  // Replace these with your actual PayFast credentials
  MERCHANT_ID: import.meta.env.VITE_PAYFAST_MERCHANT_ID || 'your_merchant_id_here',
  MERCHANT_KEY: import.meta.env.VITE_PAYFAST_MERCHANT_KEY || 'your_merchant_key_here',
  PASSPHRASE: import.meta.env.VITE_PAYFAST_PASSPHRASE || '', // Optional but recommended
  
  // URLs - update these to match your domain
  RETURN_URL: `${window.location.origin}/payment-success`,
  CANCEL_URL: `${window.location.origin}/payment-cancelled`,
  NOTIFY_URL: `${window.location.origin}/api/payfast/notify`, // For ITN (Instant Transaction Notification)
  
  // Environment
  IS_SANDBOX: import.meta.env.MODE !== 'production',
};