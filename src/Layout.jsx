import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Components/Nav.jsx';
import Footer from './Components/Footer.jsx';

const Layout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Nav />
      <main className='flex-grow'>
        <Outlet />
      </main>
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Layout;
