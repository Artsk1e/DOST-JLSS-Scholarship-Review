import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TopicCard from '../../src/components/TopicCard'
import { mockTopic } from '../test-utils'

describe('TopicCard', () => {
  it('renders topic title and analogy', () => {
    render(<TopicCard topic={mockTopic} onClick={() => {}} />)
    expect(screen.getByText(mockTopic.title)).toBeInTheDocument()
    expect(screen.getByText(mockTopic.analogy)).toBeInTheDocument()
  })

  it('renders module badge', () => {
    render(<TopicCard topic={mockTopic} onClick={() => {}} />)
    expect(screen.getByText(mockTopic.module)).toBeInTheDocument()
  })

  it('calls onClick when clicked', async () => {
    const onClick = vi.fn()
    const { container } = render(<TopicCard topic={mockTopic} onClick={onClick} />)
    const card = container.querySelector('div[class*="bg-"]') || container.firstChild
    await userEvent.click(card)
    expect(onClick).toHaveBeenCalled()
  })
})
