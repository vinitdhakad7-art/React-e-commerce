import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CartProvider from "./Context/CartContext.jsx";
import App from './App.jsx'
import { HashRouter } from "react-router-dom";



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
    <CartProvider>
    <App />
    </CartProvider>
    </HashRouter>
  </StrictMode>
  
)
