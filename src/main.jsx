import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Dev-only: bust favicon cache to ensure visibility during `npm run dev`
if (import.meta.env.DEV) {
  const updateIcon = (selector) => {
    const el = document.querySelector(selector);
    if (!el) return;
    const url = new URL(el.getAttribute('href'), window.location.origin);
    url.searchParams.set('v', Date.now().toString());
    el.setAttribute('href', url.pathname + '?' + url.searchParams.toString());
  };
  updateIcon('link#favicon-ico');
  updateIcon('link#favicon-png');
  updateIcon('link#favicon-shortcut');
  updateIcon('link#favicon-apple');
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
