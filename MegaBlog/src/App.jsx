import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice'; // Import login and logout actions
import { Header, Footer } from './components';

import { Outlet } from 'react-router-dom'; // Import Outlet component

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []); 

  return !loading ? (
    
      <div
       className='min-h-screen flex flex-wrap content-between bg-gray-400'>Content goes here 
      <div className='w-full block'> 
        <Header/>
        <main>
          <Outlet/>
        </main>
        <Footer/>
        </div>
        </div>
  ) : (
    <div>Loading...</div> // Optional loading state
  );
}

export default App;

