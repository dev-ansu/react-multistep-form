import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {DataContextProvider} from "./contexts/DataContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ToastContainer autoClose={3000}  position='top-right' />
      <DataContextProvider>
        <App />
      </DataContextProvider>
  </React.StrictMode>,
)
