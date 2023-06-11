import React, { useEffect, useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom';
import Form from "../components/Form.js"

const EditUser = () => {
  
  const navigate = useNavigate();
  
  const { id } = useParams()

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
    // setUses() sets the new data that has been entered in the form
    const handleChange = (e) => {
      e.preventDefault();
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }
 
    // retrieving the users data from local storage in the form of array
    const users = JSON.parse(localStorage.getItem('users')) || []

    // finding the index of seleted user so that we can fetch data using index from the array
    const index = users.findIndex( user => user.id === id );

    // handleEdit function allows users to edit their information
    const handleEdit = () => {
      
      // if the required index is present then only proceed
      if (index !== -1) {
        const data = users[index];
        // setting the previously filled data of user in the edit form
        setUser(
          {
            firstName: data.firstName,
            lastName: data.lastName,
            phoneNo:data.phoneNo,
            email:data.email,
            state:data.state,
            gender:data.gender,
            dob:data.dob,
            city:data.city,
          }
        )
        // console.log(data)
      }
    }
    
    // submit function to submit the newly updated data
    const handleSubmit = () => {
      // updating that particular index data
      users[index] = { ...user, id: id };
      localStorage.setItem('users', JSON.stringify(users));
      navigate('/')
    }

   useEffect(() => {
    handleEdit();
   },[])


  return (
    <div>
        <h2 className='flex justify-center text-3xl font-bold my-4 text-blue-700'>Edit User Details</h2>
        <Form {...user} handleChange={handleChange} handleSubmit={handleSubmit}/>
    </div>
  )
}

export default EditUser
