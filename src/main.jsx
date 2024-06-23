import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MenuProvider from './MenuContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
<MenuProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
</MenuProvider>
)
