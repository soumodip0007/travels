import { describe, it, expect, vi, beforeEach } from 'vitest'
import { submitEnquiry } from '../utils/submitEnquiry'

// Mock fetch globally
global.fetch = vi.fn()

describe('submitEnquiry Utility', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    global.fetch.mockReset()
  })

  it('calls fetch with correct URL', async () => {
    global.fetch.mockResolvedValueOnce({ ok: true })
    
    const data = { name: 'John', email: 'john@example.com' }
    await submitEnquiry(data)
    
    expect(global.fetch).toHaveBeenCalled()
  })

  it('sends POST request with correct method', async () => {
    global.fetch.mockResolvedValueOnce({ ok: true })
    
    const data = { name: 'John' }
    await submitEnquiry(data)
    
    const call = global.fetch.mock.calls[0]
    expect(call[1].method).toBe('POST')
  })

  it('sets Content-Type to application/json', async () => {
    global.fetch.mockResolvedValueOnce({ ok: true })
    
    const data = { name: 'John' }
    await submitEnquiry(data)
    
    const call = global.fetch.mock.calls[0]
    expect(call[1].headers['Content-Type']).toBe('application/json')
  })

  it('uses no-cors mode for Google Apps Script', async () => {
    global.fetch.mockResolvedValueOnce({ ok: true })
    
    const data = { name: 'John' }
    await submitEnquiry(data)
    
    const call = global.fetch.mock.calls[0]
    expect(call[1].mode).toBe('no-cors')
  })

  it('stringifies data to JSON in request body', async () => {
    global.fetch.mockResolvedValueOnce({ ok: true })
    
    const data = { name: 'John', email: 'john@example.com', phone: '9876543210' }
    await submitEnquiry(data)
    
    const call = global.fetch.mock.calls[0]
    expect(call[1].body).toBe(JSON.stringify(data))
  })

  it('returns true on successful submission', async () => {
    global.fetch.mockResolvedValueOnce({ ok: true })
    
    const data = { name: 'John' }
    const result = await submitEnquiry(data)
    
    expect(result).toBe(true)
  })

  it('handles network errors gracefully', async () => {
    global.fetch.mockRejectedValueOnce(new Error('Network error'))
    
    const data = { name: 'John' }
    try {
      await submitEnquiry(data)
    } catch (error) {
      expect(error.message).toBe('Network error')
    }
  })

  it('accepts empty data object', async () => {
    global.fetch.mockResolvedValueOnce({ ok: true })
    
    const result = await submitEnquiry({})
    
    expect(result).toBe(true)
  })

  it('accepts data with special characters', async () => {
    global.fetch.mockResolvedValueOnce({ ok: true })
    
    const data = { name: 'John Döe', message: 'Hello! 你好 مرحبا' }
    await submitEnquiry(data)
    
    const call = global.fetch.mock.calls[0]
    expect(call[1].body).toContain(data.name)
  })
})
