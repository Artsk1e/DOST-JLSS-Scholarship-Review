import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import StepFormula from '../../src/components/enriched/StepFormula'

describe('StepFormula - LaTeX Rendering', () => {
  it('renders formula title', () => {
    const step = {
      title: 'Pythagorean Theorem',
      formulas: [
        {
          latex: '$a^2 + b^2 = c^2$',
          description: 'The fundamental relationship in right triangles'
        }
      ]
    }
    
    render(<StepFormula step={step} />)
    expect(screen.getByText('Pythagorean Theorem')).toBeInTheDocument()
  })

  it('renders formula description', () => {
    const step = {
      title: 'Test',
      formulas: [
        {
          latex: '$E = mc^2$',
          description: 'Einstein mass-energy equivalence'
        }
      ]
    }
    
    render(<StepFormula step={step} />)
    expect(screen.getByText('Einstein mass-energy equivalence')).toBeInTheDocument()
  })

  it('renders multiple formulas', () => {
    const step = {
      title: 'Multiple Formulas',
      formulas: [
        { latex: '$x^2$', description: 'First formula' },
        { latex: '$y^2$', description: 'Second formula' }
      ]
    }
    
    render(<StepFormula step={step} />)
    expect(screen.getByText('First formula')).toBeInTheDocument()
    expect(screen.getByText('Second formula')).toBeInTheDocument()
  })

  it('renders content with LaTeX', () => {
    const step = {
      title: 'Content Test',
      content: 'The quadratic formula is $x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}$',
      formulas: []
    }
    
    render(<StepFormula step={step} />)
    expect(screen.getByText(/quadratic formula/)).toBeInTheDocument()
  })
})
