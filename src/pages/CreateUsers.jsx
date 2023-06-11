import generateUniqueId from 'generate-unique-id';
import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom';
import Form from '../components/Form.js';

const CreateUsers = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        firstName: "",
        lastName:"",
        phoneNo:"",
        email:"",
        state:"",
        gender:"",
        dob:"",
        city:"",
    })

    // handleChange function to reflect what changes are made in the form
    // setUser() sets the new data that has been entered in the form
    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }
    
    // in users, all the exisiting user data from local storage is fetched  
    const users = JSON.parse(localStorage.getItem('users')) || []
    
    // handleSubmit function to submit the form
    const handleSubmit = (e) => {
        // console.log(user)
        e.preventDefault();
        
        // generateUniqueId() is used to create unique id for each user
        const id = generateUniqueId();
        
        // {...user} spread operator is used to get the previous data 
        const newUser = { ...user, id };

        // push the new created user in users array
        users.push(newUser)

        // set the new created user in localStorage
        localStorage.setItem('users', JSON.stringify(users))
        navigate('/')
    }


  return (
    <div>
        <h2 className='flex justify-center text-3xl font-bold my-4 text-blue-700'>Add User Details</h2>
        {/* Rendering Form component */}
        <Form {...user} handleSubmit={handleSubmit} handleChange={handleChange}/>
    </div>
  )
}

export default CreateUsers
