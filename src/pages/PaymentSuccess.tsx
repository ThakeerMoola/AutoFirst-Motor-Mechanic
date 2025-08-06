import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Download, Mail, Phone } from 'lucide-react';

interface OrderData {
  customer: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  items: Array<{
    name: string;
    price: string;
    quantity: number;
  }>;
  total: number;
}

const PaymentSuccess = () => {
  const [orderData, setOrderData] = useState<OrderData | null>(null);

  useEffect(() => {
    // Get order data from localStorage
    const storedOrderData = localStorage.getItem('orderData');
    if (storedOrderData) {
      setOrderData(JSON.parse(storedOrderData));
    }

    // Clear the stored data after retrieving it
    localStorage.removeItem('orderData');
  }, []);

  const generateInvoiceNumber = () => {
    return `INV-${Date.now().toString().slice(-8)}`;
  };

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Success Header */}
          <div className="bg-green-600 text-white p-8 text-center">
            <CheckCircle className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-3xl font-bold mb-2">Payment Successful!</h1>
            <p className="text-green-100 text-lg">
              Thank you for choosing Auto First Mechanical Aid
            </p>
          </div>

          {/* Order Details */}
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Customer Information */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Customer Information</h2>
                {orderData && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700">
                      <strong>Name:</strong> {orderData.customer.firstName} {orderData.customer.lastName}
                    </p>
                    <p className="text-gray-700">
                      <strong>Email:</strong> {orderData.customer.email}
                    </p>
                    <p className="text-gray-700">
                      <strong>Phone:</strong> {orderData.customer.phone}
                    </p>
                  </div>
                )}
              </div>

              {/* Order Summary */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">
                    <strong>Invoice:</strong> {generateInvoiceNumber()}
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Date:</strong> {new Date().toLocaleDateString()}
                  </p>
                  {orderData && (
                    <p className="text-gray-700">
                      <strong>Total:</strong> R{orderData.total}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Package Details */}
            {orderData && (
              <div className="mt-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Package Details</h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                  {orderData.items.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                      <div>
                        <p className="font-semibold text-gray-900">{item.name}</p>
                        <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                      </div>
                      <p className="font-semibold text-gray-900">{item.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Next Steps */}
            <div className="mt-8 bg-blue-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-gray-900 mb-4">What Happens Next?</h2>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">1</div>
                  <p className="text-gray-700">You'll receive a confirmation email within 5 minutes</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">2</div>
                  <p className="text-gray-700">Our team will contact you within 24 hours to activate your package</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">3</div>
                  <p className="text-gray-700">Your roadside assistance coverage begins immediately after activation</p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-red-50 p-6 rounded-lg text-center">
                <Phone className="h-8 w-8 text-red-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Emergency Hotline</h3>
                <p className="text-red-600 font-semibold text-lg">+27 12 345 6789</p>
                <p className="text-sm text-gray-600">Available 24/7</p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <Mail className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Customer Support</h3>
                <p className="text-blue-600 font-semibold">support@autofirst.co.za</p>
                <p className="text-sm text-gray-600">Response within 2 hours</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
                <Download className="h-4 w-4 mr-2" />
                Download Receipt
              </button>
              <Link
                to="/"
                className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
              >
                Return to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;