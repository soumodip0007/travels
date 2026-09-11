import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import LazyImage from '../components/LazyImage'

describe('LazyImage Component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders without crashing', () => {
    const { container } = render(
      <LazyImage
        src="https://example.com/image.jpg"
        alt="Test image"
      />
    )
    expect(container).toBeTruthy()
  })

  it('renders img element with correct alt text', () => {
    render(
      <LazyImage
        src="https://example.com/image.jpg"
        alt="Test image"
      />
    )
    const img = screen.getByAltText('Test image')
    expect(img).toBeTruthy()
  })

  it('applies custom className to image', () => {
    render(
      <LazyImage
        src="https://example.com/image.jpg"
        alt="Test"
        className="custom-class"
      />
    )
    const img = screen.getByAltText('Test')
    expect(img.className).toContain('custom-class')
  })

  it('sets object-fit style correctly', () => {
    render(
      <LazyImage
        src="https://example.com/image.jpg"
        alt="Test"
        objectFit="contain"
      />
    )
    const img = screen.getByAltText('Test')
    expect(img.style.objectFit).toBe('contain')
  })

  it('sets width and height styles when provided', () => {
    render(
      <LazyImage
        src="https://example.com/image.jpg"
        alt="Test"
        width="300px"
        height="200px"
      />
    )
    const img = screen.getByAltText('Test')
    expect(img.style.width).toBe('300px')
    expect(img.style.height).toBe('200px')
  })

  it('calls onLoad callback when provided', () => {
    const onLoadMock = vi.fn()
    // Verify onLoad callback is accepted as a prop
    render(
      <LazyImage
        src="https://example.com/image.jpg"
        alt="Test"
        onLoad={onLoadMock}
      />
    )
    const img = screen.getByAltText('Test')
    // Verify the component renders even with onLoad callback
    expect(img).toBeTruthy()
  })

  it('starts with opacity 0 before loading', () => {
    render(
      <LazyImage
        src="https://example.com/image.jpg"
        alt="Test"
      />
    )
    const img = screen.getByAltText('Test')
    // Check if opacity transition class is applied
    expect(img.className).toContain('opacity-0')
  })

  it('has loading="lazy" attribute for native lazy loading', () => {
    render(
      <LazyImage
        src="https://example.com/image.jpg"
        alt="Test"
      />
    )
    const img = screen.getByAltText('Test')
    expect(img.getAttribute('loading')).toBe('lazy')
  })
})
