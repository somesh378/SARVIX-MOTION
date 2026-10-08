/**
 * Local Storage Utility
 * Handles persistent data storage for the application
 */

const STORAGE_PREFIX = 'sarvix_motion_'

export const storage = {
  setItem: (key: string, value: unknown) => {
    try {
      const prefixedKey = `${STORAGE_PREFIX}${key}`
      localStorage.setItem(prefixedKey, JSON.stringify(value))
    } catch (error) {
      console.error('Storage error:', error)
    }
  },

  getItem: <T = unknown>(key: string): T | null => {
    try {
      const prefixedKey = `${STORAGE_PREFIX}${key}`
      const item = localStorage.getItem(prefixedKey)
      return item ? JSON.parse(item) : null
    } catch (error) {
      console.error('Storage error:', error)
      return null
    }
  },

  removeItem: (key: string) => {
    try {
      const prefixedKey = `${STORAGE_PREFIX}${key}`
      localStorage.removeItem(prefixedKey)
    } catch (error) {
      console.error('Storage error:', error)
    }
  },

  clear: () => {
    try {
      const keys = Object.keys(localStorage)
      keys.forEach((key) => {
        if (key.startsWith(STORAGE_PREFIX)) {
          localStorage.removeItem(key)
        }
      })
    } catch (error) {
      console.error('Storage error:', error)
    }
  },
}
