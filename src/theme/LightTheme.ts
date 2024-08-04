import type { ThemeTypes } from '@/types/themeTypes/ThemeType';

const PurpleTheme: ThemeTypes = {
  name: 'GreenTheme',
  dark: false,
  variables: {
    'border-color': '#388e3c',
    'carousel-control-size': 10
  },
  colors: {
    primary: '#388e3c', // Verde
    secondary: '#ff9800', // Naranja que combina bien con verde
    info: '#03c9d7',
    success: '#00c853',
    accent: '#FFAB91',
    warning: '#ffc107',
    error: '#f44336',
    lightprimary: '#e8f5e9', // Verde claro
    lightsecondary: '#fff3e0', // Naranja claro
    lightsuccess: '#b9f6ca',
    lighterror: '#f9d8d8',
    lightwarning: '#fff8e1',
    darkText: '#212121',
    lightText: '#616161',
    darkprimary: '#2e7d32', // Verde oscuro
    darksecondary: '#f57c00', // Naranja oscuro
    borderLight: '#d0d0d0',
    inputBorder: '#787878',
    containerBg: '#e8f5e9', // Fondo claro verde
    surface: '#fff', // Blanco
    'on-surface-variant': '#fff',
    facebook: '#4267b2',
    twitter: '#1da1f2',
    linkedin: '#0e76a8',
    gray100: '#fafafa',
    primary200: '#a5d6a7', // Verde más claro
    secondary200: '#ffcc80' // Naranja más claro
  }
};

export { PurpleTheme };
