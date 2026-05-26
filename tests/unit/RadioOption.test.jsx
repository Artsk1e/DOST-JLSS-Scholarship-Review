import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import RadioOption from '../../src/components/RadioOption'

describe('RadioOption', () => {
  it('renders radio button with label', () => {
    render(
      <RadioOption
        optionKey="A"
        optionText="A) Choice One"
        isSelected={false}
        isAnswered={false}
        onChange={() => {}}
      />
    )
    expect(screen.getByText(/Choice One/)).toBeInTheDocument()
  })

  it('calls onChange when clicked', async () => {
    const onChange = vi.fn()
    render(
      <RadioOption
        optionKey="A"
        optionText="A) Choice One"
        isSelected={false}
        isAnswered={false}
        onChange={onChange}
      />
    )
    const input = screen.getByRole('radio')
    await userEvent.click(input)
    expect(onChange).toHaveBeenCalled()
  })

  it('is disabled when isAnswered is true', () => {
    render(
      <RadioOption
        optionKey="A"
        optionText="A) Choice One"
        isSelected={false}
        isAnswered={true}
        onChange={() => {}}
      />
    )
    const input = screen.getByRole('radio')
    expect(input).toBeDisabled()
  })

  it('shows selected styling when isSelected is true', () => {
    const { container } = render(
      <RadioOption
        optionKey="A"
        optionText="A) Choice One"
        isSelected={true}
        isAnswered={false}
        onChange={() => {}}
      />
    )
    const label = container.querySelector('label')
    expect(label).toHaveStyle({ borderColor: '#1E88E5', backgroundColor: '#E3F2FD' })
  })
})
