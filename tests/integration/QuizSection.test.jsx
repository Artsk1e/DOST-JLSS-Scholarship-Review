import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import QuizSection from '../../src/components/QuizSection'
import { renderWithContext, mockTopic } from '../test-utils'

describe('QuizSection Integration', () => {
  it('displays question and options', () => {
    renderWithContext(<QuizSection topic={mockTopic} />)
    expect(screen.getByText(mockTopic.challenge.question)).toBeInTheDocument()
    mockTopic.challenge.options.forEach((option) => {
      expect(screen.getByText(new RegExp(option.slice(3)))).toBeInTheDocument()
    })
  })

  it('allows selecting an answer', async () => {
    renderWithContext(<QuizSection topic={mockTopic} />)
    const radioButtons = screen.getAllByRole('radio')
    await userEvent.click(radioButtons[1])
    expect(radioButtons[1]).toBeChecked()
  })

  it('shows feedback after submitting correct answer', async () => {
    renderWithContext(<QuizSection topic={mockTopic} />)
    const radioButtons = screen.getAllByRole('radio')
    const correctButton = radioButtons[1]

    await userEvent.click(correctButton)
    await userEvent.click(screen.getByText(/Evaluate Selection/))

    expect(screen.getByText(/Correct/)).toBeInTheDocument()
    expect(screen.getByText(mockTopic.challenge.explanation)).toBeInTheDocument()
  })

  it('shows feedback after submitting incorrect answer', async () => {
    renderWithContext(<QuizSection topic={mockTopic} />)
    const radioButtons = screen.getAllByRole('radio')
    await userEvent.click(radioButtons[0])

    await userEvent.click(screen.getByText(/Evaluate Selection/))

    expect(screen.getByText(/Not Quite Right/)).toBeInTheDocument()
  })

  it('disables radio buttons after submitting answer', async () => {
    renderWithContext(<QuizSection topic={mockTopic} />)
    const radioButtons = screen.getAllByRole('radio')

    await userEvent.click(radioButtons[1])
    await userEvent.click(screen.getByText(/Evaluate Selection/))

    radioButtons.forEach((radio) => {
      expect(radio).toBeDisabled()
    })
  })
})
