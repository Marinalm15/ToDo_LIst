
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/main.scss";
import './custom.css'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
