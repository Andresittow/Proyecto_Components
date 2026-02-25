// components/ProcessCard.tsx
import React from "react";

export default function ProcessCard() {
  return (
    <div className="bg-indigo-600 rounded-3xl p-6 shadow-lg">
      {/* Card Details - Completed */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-white font-semibold text-base">Card Details</span>
          </div>
          <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            Completed
          </span>
        </div>

        {/* Connector */}
        <div className="w-0.5 h-4 bg-indigo-400 ml-4" />

        {/* Form Review - In Progress */}
        <div className="flex flex-col gap-2">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-3">
              <div className="w-8 h-8 rounded-full border-2 border-white bg-indigo-500 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <span className="text-white font-semibold text-base">Form Review</span>
            </div>
            <span className="bg-indigo-400 text-white text-xs font-semibold px-3 py-1 rounded-full">
              In Progress
            </span>
          </div>
          <p className="text-indigo-200 text-sm ml-11">
            Application and forms will go through a step by step review process.
          </p>
        </div>
      </div>
    </div>
  );
}