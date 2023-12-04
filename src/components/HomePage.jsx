import React from 'react'
import Navbar from './Navbar'
import Form from './Form'
import DisplayTable from './DisplayTable'
import axios from 'axios'
import useAuth from '../context/authContext'
import { useEffect, useState } from 'react'

const HomePage = () => {
  
  const [requestArray, setRequestArray] = useState([]);
  const {token} = useAuth();

  const getData = () => {
    axios.get(`${import.meta.env.VITE_BASE_URL}/request`, {
      headers: { Authorization: `Bearer ${token}` }
    }).then((response) => {
      if(response.data)
          setRequestArray(response.data);
    })
  }

  useEffect(() => {
      getData();
  }, [])

  return (
    <>
        <Navbar />
        <Form getData = {getData} />
        <DisplayTable getData = {getData} requestArray = {requestArray}/>
    </>
  )
}

export default HomePage