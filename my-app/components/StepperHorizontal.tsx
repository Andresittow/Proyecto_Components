// components/StepperHorizontal.tsx
import React from "react";

const steps = [
  { number: 1, label: "Card Details", status: "completed" },
  { number: 2, label: "Form Review", status: "completed" },
  { number: 3, label: "Authenticate OTP", status: "active" },
  { number: 4, label: "Create Code", status: "pending" },
];

const statusBadge = {
  completed: "bg-green-100 text-green-600",
  active: "bg-indigo-100 text-indigo-600",
  pending: "bg-gray-100 text-gray-400",
};

const statusLabel = {
  completed: "Completed",
  active: "In Progress",
  pending: "Pending",
};

export default function StepperHorizontal() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm">
      <div className="flex flex-row items-start gap-0">
        {steps.map((step, idx) => (
          <div key={step.number} className="flex flex-row items-start flex-1">
            <div className="flex flex-col items-start flex-1">
              {/* Icon + connector */}
              <div className="flex flex-row items-center w-full mb-3">
                <div className="flex-shrink-0">
                  {step.status === "completed" && (
                    <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                  {step.status === "active" && (
                    <div className="w-8 h-8 rounded-full border-2 border-indigo-600 bg-white flex items-center justify-center">
                      <svg className="w-4 h-4 text-indigo-600" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C8.686 2 6 4.686 6 8v1H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2v-9a2 2 0 00-2-2h-1V8c0-3.314-2.686-6-6-6zm0 2a4 4 0 014 4v1H8V8a4 4 0 014-4zm0 9a2 2 0 110 4 2 2 0 010-4z" />
                      </svg>
                    </div>
                  )}
                  {step.status === "pending" && (
                    <div className="w-8 h-8 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center">
                      <svg className="w-4 h-4 text-gray-300" viewBox="0 0 24 24" fill="currentColor">
                        <rect x="4" y="4" width="7" height="7" rx="1" />
                        <rect x="13" y="4" width="7" height="7" rx="1" />
                        <rect x="4" y="13" width="7" height="7" rx="1" />
                        <rect x="13" y="13" width="7" height="7" rx="1" />
                      </svg>
                    </div>
                  )}
                </div>
                {/* Connector line */}
                {idx < steps.length - 1 && (
                  <div
                    className={`flex-1 h-0.5 ml-2 ${
                      step.status === "completed" ? "bg-green-400" : step.status === "active" ? "bg-indigo-300" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>

              {/* Text */}
              <p className="text-xs text-gray-400 uppercase tracking-wide">Step {step.number}</p>
              <p className={`font-semibold text-sm mb-1 ${step.status === "pending" ? "text-gray-400" : "text-gray-800"}`}>
                {step.label}
              </p>
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${statusBadge[step.status]}`}>
                {statusLabel[step.status]}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}