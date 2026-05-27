import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

export default function StepExample({ step }) {
  return (
    <div className="step-example p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
      <h3 className="text-xl font-bold text-yellow-900 mb-4">{step.title}</h3>
      
      <div className="space-y-4">
        <div className="problem-section p-4 bg-white rounded border border-yellow-100">
          <h4 className="font-bold text-gray-800 mb-2">📋 Problem:</h4>
          <p className="text-gray-700">{step.problem}</p>
        </div>
        
        <div className="workings-section p-4 bg-white rounded border border-yellow-100">
          <h4 className="font-bold text-gray-800 mb-2">✏️ Workings:</h4>
          <div className="text-sm text-gray-700 prose prose-sm max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkMath]}
              rehypePlugins={[rehypeKatex]}
            >
              {step.workings}
            </ReactMarkdown>
          </div>
        </div>
        
        <div className="solution-section p-4 bg-green-50 rounded border border-green-200">
          <h4 className="font-bold text-green-800 mb-2">✅ Solution:</h4>
          <p className="text-gray-800 font-semibold">{step.solution}</p>
        </div>
      </div>
    </div>
  );
}
