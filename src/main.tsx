import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ChosenThemeProvider, ThemeProvider } from './providers'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChosenThemeProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ChosenThemeProvider>
  </React.StrictMode>,
)
