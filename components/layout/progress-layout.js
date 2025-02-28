// app/components/layout/progress-layout.js
"use client";

import { usePathname } from "next/navigation";

const steps = [
  { path: "/screener", label: "Screener" },
  { path: "/pre-interview", label: "Pre-Interview" },
  { path: "/interview", label: "Interview" },
];

export function ProgressLayout({ children }) {
  const pathname = usePathname();

  const currentStepIndex = steps.findIndex((step) => step.path === pathname);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8">
        {/* Progress Bar */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex justify-between mb-4">
            {steps.map((step, index) => (
              <div key={step.path} className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    index <= currentStepIndex
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {index + 1}
                </div>
                <span className="text-sm mt-2">{step.label}</span>
              </div>
            ))}
          </div>
          <div className="relative">
            <div className="absolute top-1/2 h-1 w-full bg-gray-200 -translate-y-1/2" />
            <div
              className="absolute top-1/2 h-1 bg-blue-600 -translate-y-1/2 transition-all duration-300"
              style={{
                width: `${(currentStepIndex / (steps.length - 1)) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">{children}</div>
      </div>
    </div>
  );
}
