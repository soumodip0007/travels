import { describe, it, expect } from 'vitest'
import {
  getOptimizedImageUrl,
  generateSrcSet,
  getPlaceholderUrl,
  getThumbnailUrl,
  getFullQualityUrl,
} from '../utils/imageOptimization'

describe('Image Optimization Utilities', () => {
  const testUnsplashUrl = 'https://images.unsplash.com/photo-1234567890?w=1200&q=80'
  const testGenericUrl = 'https://example.com/image.jpg'

  describe('getOptimizedImageUrl', () => {
    it('returns undefined for null or empty URL', () => {
      expect(getOptimizedImageUrl(null)).toBe(null)
      expect(getOptimizedImageUrl('')).toBe('')
    })

    it('optimizes Unsplash URLs with width and quality params', () => {
      const result = getOptimizedImageUrl(testUnsplashUrl, 800, 80)
      expect(result).toContain('w=800')
      expect(result).toContain('q=80')
      expect(result).toContain('fm=webp')
    })

    it('adds WebP format to Unsplash URLs', () => {
      const result = getOptimizedImageUrl(testUnsplashUrl, 800, 80)
      expect(result).toContain('fm=webp')
    })

    it('adds fit=max parameter for Unsplash URLs', () => {
      const result = getOptimizedImageUrl(testUnsplashUrl, 800, 80)
      expect(result).toContain('fit=max')
    })

    it('returns original URL for non-Unsplash URLs', () => {
      const result = getOptimizedImageUrl(testGenericUrl, 800, 80)
      expect(result).toBe(testGenericUrl)
    })

    it('uses default width of 800 when not provided', () => {
      const result = getOptimizedImageUrl(testUnsplashUrl)
      expect(result).toContain('w=800')
    })

    it('uses default quality of 80 when not provided', () => {
      const result = getOptimizedImageUrl(testUnsplashUrl)
      expect(result).toContain('q=80')
    })
  })

  describe('generateSrcSet', () => {
    it('returns empty string for non-Unsplash URLs', () => {
      const result = generateSrcSet(testGenericUrl, [320, 640])
      expect(result).toBe('')
    })

    it('generates srcSet with multiple sizes for Unsplash URLs', () => {
      const result = generateSrcSet(testUnsplashUrl, [320, 640, 1200])
      expect(result).toContain('320w')
      expect(result).toContain('640w')
      expect(result).toContain('1200w')
    })

    it('generates srcSet with correct format', () => {
      const result = generateSrcSet(testUnsplashUrl, [320, 640])
      expect(result).toMatch(/\d+w,\s+.*\d+w/)
    })

    it('uses default sizes [320, 640, 1200]', () => {
      const result = generateSrcSet(testUnsplashUrl)
      expect(result).toContain('320w')
      expect(result).toContain('640w')
      expect(result).toContain('1200w')
    })

    it('returns empty string for null or undefined URL', () => {
      expect(generateSrcSet(null)).toBe('')
      expect(generateSrcSet(undefined)).toBe('')
    })
  })

  describe('getPlaceholderUrl', () => {
    it('returns very small, low quality image URL', () => {
      const result = getPlaceholderUrl(testUnsplashUrl)
      expect(result).toContain('w=50')
      expect(result).toContain('q=20')
    })

    it('returns original URL for non-Unsplash URLs', () => {
      const result = getPlaceholderUrl(testGenericUrl)
      expect(result).toBe(testGenericUrl)
    })
  })

  describe('getThumbnailUrl', () => {
    it('returns 300px image with 75% quality', () => {
      const result = getThumbnailUrl(testUnsplashUrl)
      expect(result).toContain('w=300')
      expect(result).toContain('q=75')
    })

    it('returns original URL for non-Unsplash URLs', () => {
      const result = getThumbnailUrl(testGenericUrl)
      expect(result).toBe(testGenericUrl)
    })
  })

  describe('getFullQualityUrl', () => {
    it('returns 1920px image with 90% quality', () => {
      const result = getFullQualityUrl(testUnsplashUrl)
      expect(result).toContain('w=1920')
      expect(result).toContain('q=90')
    })

    it('returns original URL for non-Unsplash URLs', () => {
      const result = getFullQualityUrl(testGenericUrl)
      expect(result).toBe(testGenericUrl)
    })
  })
})
