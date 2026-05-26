import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import NavButton from '../../src/components/NavButton'

describe('NavButton', () => {
  it('renders button with label and icon', () => {
    render(
      <NavButton
        subject="math"
        label="Math"
        icon="🧮"
        isActive={false}
        onClick={() => {}}
      />
    )
    expect(screen.getByText(/Math/)).toBeInTheDocument()
    expect(screen.getByText(/🧮/)).toBeInTheDocument()
  })

  it('calls onClick when clicked', async () => {
    const onClick = vi.fn()
    render(
      <NavButton
        subject="math"
        label="Math"
        icon="🧮"
        isActive={false}
        onClick={onClick}
      />
    )
    await userEvent.click(screen.getByRole('button'))
    expect(onClick).toHaveBeenCalledOnce()
  })

  it('applies active styling when isActive is true', () => {
    const { container } = render(
      <NavButton
        subject="math"
        label="Math"
        icon="🧮"
        isActive={true}
        onClick={() => {}}
      />
    )
    const button = container.querySelector('button')
    expect(button).toHaveClass('text-primary')
  })

  it('applies inactive styling when isActive is false', () => {
    const { container } = render(
      <NavButton
        subject="math"
        label="Math"
        icon="🧮"
        isActive={false}
        onClick={() => {}}
      />
    )
    const button = container.querySelector('button')
    expect(button).toHaveClass('text-text-muted')
  })
})
