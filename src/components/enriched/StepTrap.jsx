import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

export default function StepTrap({ step }) {
  return (
    <div className="step-trap p-6 bg-gradient-to-br from-red-50 to-rose-50 rounded-lg border-2 border-red-300">
      <h3 className="text-xl font-bold text-red-900 mb-2 flex items-center gap-2">
        <span className="text-2xl">⚠️</span>
        {step.title}
      </h3>
      
      <div className="space-y-4">
        <div className="trap-description p-4 bg-white rounded border border-red-200">
          <h4 className="font-bold text-gray-800 mb-2">The Mistake:</h4>
          <p className="text-gray-700 text-sm">
            <ReactMarkdown
              remarkPlugins={[remarkMath]}
              rehypePlugins={[rehypeKatex]}
            >
              {step.trapDescription}
            </ReactMarkdown>
          </p>
        </div>
        
        <div className="trap-example p-4 bg-red-50 rounded border border-red-200">
          <h4 className="font-bold text-red-800 mb-2">❌ Common Example:</h4>
          <div className="text-sm text-gray-700 prose prose-sm max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkMath]}
              rehypePlugins={[rehypeKatex]}
            >
              {step.trapExample}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}
