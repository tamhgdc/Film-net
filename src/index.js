import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './pages/Layout';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import CategoryContextProvider from './contexts/CategoryContext';
import AuthContextProvider from './contexts/AuthContext';
import ModalContextProvider from './contexts/ModalContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ModalContextProvider>
        <AuthContextProvider>
          <CategoryContextProvider>
            <Layout />
          </CategoryContextProvider>
        </AuthContextProvider>
      </ModalContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
