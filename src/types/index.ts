/**
 * Global Type Definitions
 * Central place for TypeScript interfaces and types
 */

export interface User {
  id: string
  email: string
  displayName: string
  avatar?: string
  createdAt: Date
}

export interface Project {
  id: string
  name: string
  userId: string
  canvasRatio: CanvasRatio
  resolution: Resolution
  fps: FPS
  duration: number
  createdAt: Date
  updatedAt: Date
  thumbnail?: string
}

export type CanvasRatio = '9:16' | '16:9' | '1:1'
export type Resolution = '720p' | '1080p'
export type FPS = 24 | 30 | 60
