import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

export default function StepConcept({ step }) {
  return (
    <div className="step-concept p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
      <h3 className="text-xl font-bold text-blue-900 mb-4">{step.title}</h3>
      <div className="prose prose-sm max-w-none text-gray-700">
        <ReactMarkdown
          remarkPlugins={[remarkMath]}
          rehypePlugins={[rehypeKatex]}
        >
          {step.content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
