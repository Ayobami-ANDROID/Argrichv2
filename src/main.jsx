import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store  from "./app/store.js";
import { injectStore } from "./app/storeInjector.js";


injectStore(store);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
      
    </BrowserRouter>
  </StrictMode>,
)
