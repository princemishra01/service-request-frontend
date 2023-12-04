import React from 'react'
import axios from 'axios'
import useAuth from '../context/authContext'

const Form = ({getData}) => {

    const selectOptions = ['General Queries', 'Product Features Queries', 'Product Pricing Queries','Product Feature Implementation', 'Other']

    const [title, setTitle] = React.useState('')
    const [description, setDescription] = React.useState('')

    const {token} = useAuth()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/request`, {
                authToken: token,
                title: title,
                description: description
            })
            getData();
        } catch(err) {
            console.log(err)
        }
    }

    return (

        <div className='flex flex-col items-center justify-center'>
            <div className='w-1/2 p-5 flex flex-col gap-3'>
                <label htmlFor='title'>Title:</label>
                <input type='text' id='title' className='border-[1px] p-2' onChange={(e) => setTitle(e.target.value)}/>
                <label htmlFor='dropdown'>Select Category:</label>
                <select id='dropdown' className='border-[1px] p-2'>
                    {
                        selectOptions.map((option, index) => {
                            return <option key={index} value={option}>{option}</option>
                        })
                    }
                </select>
                <label htmlFor='description'>Description:</label>
                <textarea id='description' rows='4' className='border-[1px] p-2'
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <button type="button" onClick={handleSubmit}
                className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-auto w-1/3">
                    Submit
                </button>
            </div>
        </div>
    )
}

export default Form