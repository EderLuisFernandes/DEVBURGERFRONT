import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import GlobalStyles from './styles/globalStyles';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { ToastContainer } from 'react-toastify';
import AppProvider from './hooks/index.jsx'
import {Elements} from '@stripe/react-stripe-js'
import stripePromise from './config/stripeConfig.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
    <GlobalStyles/>
    <Elements stripe={stripePromise} >
    < RouterProvider router={router}/>
    </Elements>
    <ToastContainer autoClose={2000}/>
    </AppProvider>
  </StrictMode>,
);
