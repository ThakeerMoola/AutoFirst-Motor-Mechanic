import React from 'react';
import { Link } from 'react-router-dom';
import { XCircle, ArrowLeft, Phone } from 'lucide-react';

const PaymentCancelled = () => {
  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-red-600 text-white p-8 text-center">
            <XCircle className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-3xl font-bold mb-2">Payment Cancelled</h1>
            <p className="text-red-100 text-lg">
              Your payment was cancelled and no charges were made
            </p>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">What happened?</h2>
              <p className="text-gray-600 leading-relaxed">
                You cancelled the payment process before it was completed. Don't worry - 
                no charges have been made to your account, and your cart items are still saved.
              </p>
            </div>

            {/* Options */}
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">What would you like to do?</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Try the payment process again</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Review your package selection</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Contact our support team for assistance</span>
                </div>
              </div>
            </div>

            {/* Contact Support */}
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <div className="flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Need Help?</h3>
              </div>
              <p className="text-center text-gray-600 mb-4">
                Our customer support team is available to assist you with any payment issues
              </p>
              <div className="text-center">
                <p className="text-blue-600 font-semibold text-lg">+27 12 345 6789</p>
                <p className="text-sm text-gray-600">Available 24/7</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/cart"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
              >
                Return to Cart
              </Link>
              <Link
                to="/packages"
                className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center flex items-center justify-center"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Browse Packages
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCancelled;