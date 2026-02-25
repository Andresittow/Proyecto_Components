// components/ApplicationReview.tsx
import React from "react";

export default function ApplicationReview() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm">
      {/* Icon */}
      <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center mb-3">
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      </div>

      <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Step 2</p>
      <h3 className="text-gray-900 font-bold text-lg mb-2">Application Review</h3>
      <p className="text-gray-400 text-sm mb-5">
        Application and forms will go through a step by step review process.
      </p>

      {/* Time Remaining */}
      <div className="bg-indigo-600 rounded-2xl p-4">
        <p className="text-indigo-200 text-xs uppercase tracking-wide mb-1">Time Remaining</p>
        <p className="text-white font-bold text-2xl mb-3">48 hours</p>
        {/* Progress bar */}
        <div className="w-full bg-indigo-400 rounded-full h-1.5">
          <div className="bg-white h-1.5 rounded-full w-2/3" />
        </div>
      </div>
    </div>
  );
}