import CryptoJS from 'crypto-js';
import { PAYFAST_CONFIG } from '../config/payfast';

export interface PayFastData {
  merchant_id: string;
  merchant_key: string;
  return_url: string;
  cancel_url: string;
  notify_url: string;
  name_first: string;
  name_last: string;
  email_address: string;
  m_payment_id: string;
  amount: string;
  item_name: string;
  item_description: string;
  custom_str1?: string;
  custom_str2?: string;
  custom_str3?: string;
  custom_str4?: string;
  custom_str5?: string;
}

export const generatePayFastSignature = (data: PayFastData, passPhrase?: string): string => {
  // Sort keys alphabetically
  const sortedKeys = Object.keys(data).sort();
  let pfOutput = '';

  sortedKeys.forEach((key) => {
    const value = data[key as keyof PayFastData];
    if (value !== '' && value !== undefined) {
      pfOutput += `${key}=${encodeURIComponent(value as string).replace(/%20/g, '+')}&`;
    }
  });

  // Remove last ampersand
  pfOutput = pfOutput.slice(0, -1);

  // Add passphrase if provided
  if (passPhrase) {
    pfOutput += `&passphrase=${encodeURIComponent(passPhrase).replace(/%20/g, '+')}`;
  }

  // Generate signature
  return CryptoJS.MD5(pfOutput).toString();
};

export const createPayFastForm = (data: PayFastData, signature: string): string => {
  const payFastUrl = PAYFAST_CONFIG.IS_SANDBOX
    ? 'https://sandbox.payfast.co.za/eng/process'
    : 'https://www.payfast.co.za/eng/process';

  let formHtml = `<form action="${payFastUrl}" method="post" id="payfast-form">`;
  
  // Add all data fields
  Object.keys(data).forEach(key => {
    const value = data[key as keyof PayFastData];
    if (value !== '' && value !== undefined) {
      formHtml += `<input type="hidden" name="${key}" value="${value}" />`;
    }
  });
  
  // Add signature
  formHtml += `<input type="hidden" name="signature" value="${signature}" />`;
  formHtml += `<input type="submit" value="Pay Now" class="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold" />`;
  formHtml += `</form>`;
  
  return formHtml;
};