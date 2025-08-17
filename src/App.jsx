// src/App.jsx
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, CssBaseline } from '@mui/material';
import { HelmetProvider } from 'react-helmet-async';
import theme from './theme';
import MainPage from './pages/MainPage';
import { SnackbarProvider } from 'notistack';
import { ErrorBoundary } from 'react-error-boundary';

// Simple Error Fallback Component
function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="p-8 text-center">
      <h2 className="text-2xl font-bold text-red-600 mb-4">Oops! Something went wrong.</h2>
      <p className="text-gray-600 mb-6">{error.message}</p>
      <button
        onClick={resetErrorBoundary}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Refresh Page
      </button>
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <SnackbarProvider
              maxSnack={3}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              autoHideDuration={3000}
            >
              <CssBaseline />
              <div className="App min-h-screen bg-gray-50">
                <MainPage />
              </div>
            </SnackbarProvider>
          </ErrorBoundary>
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;