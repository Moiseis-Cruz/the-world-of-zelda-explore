import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style/GlobalStyles.jsx'
import { GlobalStyle } from './style/GlobalStyles.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
)
