import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import Index from '../Index';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
)
