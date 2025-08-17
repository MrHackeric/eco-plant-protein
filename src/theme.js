// src/theme.js
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const baseTheme = createTheme({
  typography: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: 'rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px',
          transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
          '&:hover': {
            boxShadow: 'rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.2) 0px 16px 32px -4px',
          }
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 600,
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#6366f1', // Indigo-500
    },
    secondary: {
      main: '#10b981', // Emerald-500
    },
    error: {
      main: '#ef4444', // Red-500
    },
  },
});

export default responsiveFontSizes(baseTheme);