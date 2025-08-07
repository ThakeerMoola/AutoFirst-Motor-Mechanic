// PayFast Configuration
export const PAYFAST_CONFIG = {
  // Replace these with your actual PayFast credentials
  MERCHANT_ID: '25197615', // <-- your real merchant ID
  MERCHANT_KEY: 'k4lgklgzt329m', // <-- your real merchant key
  PASSPHRASE: '20010920ThakeerMoola', // <-- your real passphrase
  
  // URLs - update these to match your domain
  RETURN_URL: `${window.location.origin}/payment-success`,
  CANCEL_URL: `${window.location.origin}/payment-cancelled`,
  NOTIFY_URL: `${window.location.origin}/api/payfast/notify`, // For ITN (Instant Transaction Notification)
  
  // Environment
  IS_SANDBOX: false, // or true for sandbox
};

console.log('MERCHANT_ID:', PAYFAST_CONFIG.MERCHANT_ID);
console.log('MERCHANT_KEY:', PAYFAST_CONFIG.MERCHANT_KEY);
console.log('PASSPHRASE:', PAYFAST_CONFIG.PASSPHRASE);
console.log('IS_SANDBOX:', PAYFAST_CONFIG.IS_SANDBOX);