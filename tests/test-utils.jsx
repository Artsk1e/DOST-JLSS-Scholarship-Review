import { render } from '@testing-library/react'
import { AppProvider } from '../src/context/AppContext'

export const renderWithContext = (component) => {
  return render(
    <AppProvider>
      {component}
    </AppProvider>
  )
}

export const mockTopic = {
  id: 'test-1-1',
  module: 'Test Module',
  title: 'Test Topic',
  analogy: 'This is a test analogy.',
  mechanics: '<p>Test mechanics</p>',
  examRule: 'Test rule',
  traps: 'Test traps',
  challenge: {
    question: 'What is 2+2?',
    options: ['A) 3', 'B) 4', 'C) 5', 'D) 6'],
    correct: 'B',
    explanation: 'Because 2+2=4'
  }
}
