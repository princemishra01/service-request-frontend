import React from 'react'
import axios from 'axios';
import { GoogleLogin } from '@react-oauth/google';
import useAuth from '../context/authContext';

const LoginPage = () => {

  const {setToken} = useAuth();

  return (
    <div className='flex flex-col item-center justify-center text-xl h-screen'>
        <div className='w-full flex justify-center'>
            <GoogleLogin
              onSuccess={credentialResponse => {
                localStorage.setItem('token', credentialResponse.credential);
                setToken(credentialResponse.credential);
                axios.post('http://localhost:3000/user', {
                  authToken: credentialResponse.credential
                }).then((response) => {
                  // console.log(response);
                }).catch((err) => {
                  console.log(err);
                })
              }}
              onError={() => {
                console.log('Login Failed');
              }}
            />
        </div> 
    </div>
  )
}

export default LoginPage