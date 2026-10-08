/**
 * Application Constants
 */

export const CANVAS_RATIOS = {
  PORTRAIT: '9:16',
  LANDSCAPE: '16:9',
  SQUARE: '1:1',
} as const

export const RESOLUTIONS = {
  HD: '720p',
  FULL_HD: '1080p',
} as const

export const FPS_OPTIONS = [24, 30, 60] as const

export const BRAND = {
  NAME: 'SARVIX MOTION',
  TAGLINE: 'Create Without Limits.',
  DESCRIPTION: 'Premium Mobile Animation and Video Editing Platform',
} as const

export const ROUTES = {
  HOME: '/home',
  LOGIN: '/login',
  SIGNUP: '/signup',
  NEW_PROJECT: '/new-project',
  EDITOR: (projectId: string) => `/editor/${projectId}`,
  PROFILE: '/profile',
  TEMPLATES: '/templates',
} as const
