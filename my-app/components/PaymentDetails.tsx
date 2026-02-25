// components/PaymentDetails.tsx
import React from "react";

export default function PaymentDetails() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm flex flex-col gap-5">
      {/* Header */}
      <div className="flex flex-row items-center gap-3 border-b border-indigo-600 pb-4">
        <div className="w-10 h-10 rounded-full border-2 border-indigo-600 flex items-center justify-center">
          <span className="text-indigo-600 font-bold text-sm">$</span>
        </div>
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-wide">Step 4 / 5</p>
          <h3 className="font-bold text-gray-900 text-base">Payment Details</h3>
        </div>
      </div>

      {/* Card Details Section */}
      <div className="flex flex-col gap-4">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Card Details</p>

        {/* Cardholder Name */}
        <div className="border-b border-gray-200 pb-2">
          <p className="text-gray-900 text-sm font-medium">Alex Parkinson</p>
        </div>

        {/* Card Number */}
        <div className="flex flex-row items-center gap-2 border-b border-gray-200 pb-2">
          <div className="w-8 h-5 bg-red-500 rounded-sm flex items-center justify-center">
            <div className="w-3 h-3 bg-yellow-400 rounded-full opacity-80" />
          </div>
          <span className="text-gray-900 text-sm font-medium tracking-widest">4858 3445 |</span>
        </div>

        {/* Expiry & CVV */}
        <div className="flex flex-row gap-4">
          <div className="flex-1 border-b border-gray-200 pb-2">
            <p className="text-gray-400 text-sm">Expiry</p>
          </div>
          <div className="flex-1 border-b border-gray-200 pb-2">
            <p className="text-gray-400 text-sm">CVV</p>
          </div>
        </div>
      </div>

      {/* Billing Address Section */}
      <div className="flex flex-col gap-4">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Billing Address</p>

        {/* Street */}
        <div className="border-b border-gray-200 pb-2">
          <p className="text-gray-400 text-sm">Street Address</p>
        </div>

        {/* City & State */}
        <div className="flex flex-row gap-4">
          <div className="flex-1 border-b border-gray-200 pb-2">
            <p className="text-gray-400 text-sm">City</p>
          </div>
          <div className="flex-1 border-b border-gray-200 pb-2">
            <p className="text-gray-400 text-sm">State</p>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-row gap-3 mt-2">
        <button className="flex-1 flex flex-row items-center justify-center gap-2 border border-gray-200 rounded-2xl py-3 text-gray-600 font-semibold text-sm hover:bg-gray-50 transition-colors">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Previous
        </button>
        <button className="flex-1 flex flex-row items-center justify-center gap-2 bg-indigo-600 rounded-2xl py-3 text-white font-semibold text-sm hover:bg-indigo-700 transition-colors">
          Next
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  );
}