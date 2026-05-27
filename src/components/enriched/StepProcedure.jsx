import React from 'react';

export default function StepProcedure({ step }) {
  return (
    <div className="step-procedure p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
      <h3 className="text-xl font-bold text-green-900 mb-4">{step.title}</h3>
      
      {step.steps && step.steps.length > 0 && (
        <ol className="space-y-3 list-decimal list-inside">
          {step.steps.map((stepItem, idx) => (
            <li key={idx} className="text-gray-700 ml-2 text-sm">
              <span className="ml-2">{stepItem}</span>
            </li>
          ))}
        </ol>
      )}
      
      {!step.steps || step.steps.length === 0 && (
        <p className="text-gray-600 italic">Steps not available for this topic.</p>
      )}
    </div>
  );
}
