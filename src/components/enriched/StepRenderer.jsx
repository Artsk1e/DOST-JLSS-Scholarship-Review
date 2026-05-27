import React from 'react';
import StepConcept from './StepConcept';
import StepFormula from './StepFormula';
import StepProcedure from './StepProcedure';
import StepExample from './StepExample';
import StepTrap from './StepTrap';

export default function StepRenderer({ step }) {
  if (!step) return null;

  switch (step.stepType) {
    case 'concept':
      return <StepConcept step={step} />;
    case 'formula':
      return <StepFormula step={step} />;
    case 'procedure':
      return <StepProcedure step={step} />;
    case 'example':
      return <StepExample step={step} />;
    case 'trapAlert':
      return <StepTrap step={step} />;
    default:
      return <div className="p-6 bg-gray-100 rounded">Unknown step type: {step.stepType}</div>;
  }
}
