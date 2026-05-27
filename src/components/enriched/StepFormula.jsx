import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

export default function StepFormula({ step }) {
  return (
    <div className="step-formula p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-200">
      <h3 className="text-xl font-bold text-purple-900 mb-4">{step.title}</h3>
      
      {step.formulas && step.formulas.length > 0 && (
        <div className="formulas mb-6 space-y-4">
          {step.formulas.map((formula, idx) => (
            <div key={idx} className="formula-block p-4 bg-white rounded border border-purple-100">
              <div className="formula-latex text-center text-lg my-3 font-mono text-gray-800">
                <ReactMarkdown
                  remarkPlugins={[remarkMath]}
                  rehypePlugins={[rehypeKatex]}
                >
                  {formula.latex}
                </ReactMarkdown>
              </div>
              <p className="text-sm text-gray-700">{formula.description}</p>
            </div>
          ))}
        </div>
      )}
      
      {step.content && (
        <div className="prose prose-sm max-w-none text-gray-700">
          <ReactMarkdown
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeKatex]}
          >
            {step.content}
          </ReactMarkdown>
        </div>
      )}
    </div>
  );
}
