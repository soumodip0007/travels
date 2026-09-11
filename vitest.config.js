import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    // Use jsdom for DOM simulation
    environment: 'jsdom',
    
    // Enable DOM testing library features
    globals: true,
    
    // Setup files to run before tests
    setupFiles: ['./src/test/setup.js'],
    
    // Coverage configuration
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'src/test/',
        'dist/',
        '*.config.js',
      ],
    },
    
    // Test include patterns
    include: ['src/**/*.{test,spec}.{js,jsx}'],
    
    // Test exclude patterns
    exclude: ['node_modules', 'dist'],
  },
})
