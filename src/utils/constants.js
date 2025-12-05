export const APP_NAME = 'MedTrack';
export const APP_VERSION = '1.0.0';

export const ROUTES = {
  HOME: '/',
  FEATURES: '/features',
  ABOUT: '/about',
  CONTACT: '/contact',
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  DASHBOARD: '/dashboard',
  PATIENTS: '/dashboard/patients',
  MESSAGES: '/dashboard/messages',
  ANALYTICS: '/dashboard/analytics',
  SETTINGS: '/dashboard/settings',
};

export const USER_ROLES = {
  ADMIN: 'admin',
  USER: 'user',
  PHARMACIST: 'pharmacist',
};

export const PRESCRIPTION_STATUS = {
  PENDING: 'pending',
  FILLED: 'filled',
  CANCELLED: 'cancelled',
  REFILL_REQUESTED: 'refill_requested',
};

export const NOTIFICATION_TYPES = {
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
};

export const DATE_FORMATS = {
  SHORT: 'MM/DD/YYYY',
  LONG: 'MMMM DD, YYYY',
  WITH_TIME: 'MM/DD/YYYY HH:mm',
};

export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 10,
  PAGE_SIZE_OPTIONS: [10, 25, 50, 100],
};
