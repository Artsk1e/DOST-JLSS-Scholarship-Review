import '@testing-library/jest-dom'
import { expect, afterEach, vi } from 'vitest'
import { cleanup } from '@testing-library/react'

vi.mock('katex', () => ({
  default: {
    render: vi.fn(),
    renderToString: vi.fn()
  }
}))

afterEach(() => {
  cleanup()
})
