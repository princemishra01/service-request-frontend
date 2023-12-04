import React from 'react'
import { googleLogout } from '@react-oauth/google';
import useAuth from '../context/authContext';

const Navbar = () => {
  const {setToken} = useAuth();
  const handleLogout = () => {
    googleLogout();
    localStorage.removeItem('token');
    setToken(undefined);
  }

  return (
    <div className='flex justify-between p-5'>
        <div className='text-5xl'>Logo</div>
        <button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          onClick={handleLogout}
        >
          Logout
        </button>
    </div>
  )
}

export default Navbar