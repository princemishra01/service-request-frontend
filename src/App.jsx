import React from 'react';
import './App.css'
import LoginPage from './components/LoginPage'
import HomePage from './components/HomePage'
import { useEffect } from 'react';
import { AuthProvider } from './context/authContext';

function App() {
  const [token, setToken] = React.useState(undefined);

  useEffect(() => {
    const tokenn = localStorage.getItem('token');
    if(tokenn){
      setToken(tokenn);
    }
  }, [token,setToken])

  return (
    <AuthProvider value={{token , setToken}}>
      {!token ? <LoginPage /> : <HomePage />}
    </AuthProvider>
  )
}

export default App
