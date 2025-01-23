import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store.js";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { injectStore } from "./app/storeInjector.js";



injectStore(store);
const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider  clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>

      </BrowserRouter>
    </GoogleOAuthProvider>
  </StrictMode>,
)
