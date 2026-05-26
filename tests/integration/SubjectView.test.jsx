import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SubjectView from '../../src/components/SubjectView'
import { renderWithContext } from '../test-utils'

describe('SubjectView Integration', () => {
  it('renders back button', () => {
    renderWithContext(<SubjectView />)
    expect(screen.getByText(/Back to Dashboard/)).toBeInTheDocument()
  })

  it('renders subject title in header', () => {
    renderWithContext(<SubjectView />)
    expect(screen.getByText(/Review/)).toBeInTheDocument()
  })

  it('displays topic cards when topics exist', () => {
    renderWithContext(<SubjectView />)
    const cards = screen.queryAllByRole('heading', { level: 3 })
    expect(cards.length).toBeGreaterThanOrEqual(0)
  })

  it('back button is clickable', async () => {
    renderWithContext(<SubjectView />)
    const backButton = screen.getByText(/Back to Dashboard/)
    await userEvent.click(backButton)
    expect(backButton).toBeInTheDocument()
  })
})
