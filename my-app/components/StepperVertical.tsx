// components/StepperVertical.tsx
import React from "react";

const steps = [
  { number: 1, label: "Basic Details", status: "completed" },
  { number: 2, label: "Company Details", status: "completed" },
  { number: 3, label: "Subscription plan", status: "active" },
  { number: 4, label: "Payment details", status: "pending" },
];

export default function StepperVertical() {
  return (
    <div className="flex flex-col h-full bg-gradient-to-b from-slate-100 to-blue-50 rounded-3xl p-6 relative overflow-hidden shadow-lg">
      {/* Logo */}
      <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center mb-10">
        <div className="w-4 h-4 bg-white rounded-sm opacity-90" />
      </div>

      {/* Steps */}
      <div className="flex flex-col flex-1 gap-0">
        {steps.map((step, idx) => (
          <div key={step.number} className="flex flex-row items-start gap-4">
            {/* Icon + Line */}
            <div className="flex flex-col items-center">
              {step.status === "completed" && (
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center z-10">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}
              {step.status === "active" && (
                <div className="w-8 h-8 rounded-full border-2 border-indigo-600 bg-white flex items-center justify-center z-10">
                  <div className="w-3 h-3 bg-indigo-600 rounded-sm" />
                </div>
              )}
              {step.status === "pending" && (
                <div className="w-8 h-8 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center z-10">
                  <span className="text-gray-400 font-bold text-xs">$</span>
                </div>
              )}
              {idx < steps.length - 1 && (
                <div
                  className={`w-0.5 h-12 mt-1 ${
                    step.status === "completed" ? "bg-green-400" : "bg-gray-200"
                  }`}
                />
              )}
            </div>

            {/* Text */}
            <div className="pt-0.5 pb-8">
              <p className="text-xs text-gray-400 uppercase tracking-wide">
                Step {step.number}
              </p>
              <p
                className={`font-semibold text-base ${
                  step.status === "pending" ? "text-gray-400" : "text-gray-800"
                }`}
              >
                {step.label}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Decorative geometric shape */}
      <div className="absolute bottom-16 right-0 w-32 h-32 opacity-40">
        <svg viewBox="0 0 100 100" className="w-full h-full text-blue-300">
          <polygon points="10,90 50,10 90,90" fill="none" stroke="currentColor" strokeWidth="2" />
          <polygon points="30,90 50,40 70,90" fill="currentColor" opacity="0.3" />
        </svg>
      </div>

      {/* Contact us */}
      <div className="flex flex-row items-center gap-3 bg-white rounded-2xl p-3 shadow-sm mt-4">
        <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 font-bold">
          ?
        </div>
        <div>
          <p className="text-xs text-gray-400">Having troubles?</p>
          <p className="text-sm font-semibold text-gray-700">Contact us</p>
        </div>
      </div>
    </div>
  );
}