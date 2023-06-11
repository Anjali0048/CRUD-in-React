import React, { useEffect } from 'react'
import { FaTrash } from "react-icons/fa"
import { FaEdit } from "react-icons/fa"
import { useNavigate } from 'react-router-dom'

const UserDetails = ({id,firstName,lastName,phoneNo,email,state,city,dob,gender}) => {

  const navigate = useNavigate();

  // handleEditUser is an onClick function on a particular user when edit icon is clicked
  // it navigates to edit page where user can edit their details
  const handleEditUser = () => {
    navigate(`/edit/${id}`);
  }

  // handleDelete is an onClick function on a particular user when delete icon is clicked
  const handleDelete = (e) => {
    e.preventDefault();
  
    // Get existing items from Local Storage
    const users = JSON.parse(localStorage.getItem('users')) || [];
  
    // Filter out the item to be deleted
    const updatedUsers = users.filter(user => user.id !== id);
  
    // Store the updated array in Local Storage
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    window.location.reload(false);
    alert("User Deleted successfully")
  };

  return (
    <>
      <tbody className="bg-white divide-y divide-gray-200 dark:bg-[#EBF0FA] dark:divide-[#75cce7]">
            <tr className="hover:bg-[#a2cdda] dark:hover:[#75cce7]">
              
              <td
                className="py-4 px-6 text-sm font-medium text-black whitespace-nowrap dark:text-black"
              >
                {firstName}
              </td>
              <td
                className="py-4 px-6 text-sm font-medium text-black whitespace-nowrap dark:text-black"
              >
                {lastName}
              </td>
              <td
                className="py-4 px-6 text-sm font-medium text-black whitespace-nowrap dark:text-black"
              >
                {email}
              </td>
              <td
                className="py-4 px-6 text-sm font-medium text-black whitespace-nowrap dark:text-black"
              >
                {phoneNo}
              </td>
              <td
                className="py-4 px-6 text-sm font-medium text-black whitespace-nowrap dark:text-black"
              >
                {gender}
              </td>
              <td
                className="py-4 px-6 text-sm font-medium text-black whitespace-nowrap dark:text-black"
              >
                {dob}
              </td>
              <td
                className="py-4 px-6 text-sm font-medium text-black whitespace-nowrap dark:text-black"
              >
                {city}
              </td>
              <td
                className="py-4 px-6 text-sm font-medium text-black whitespace-nowrap dark:text-black"
              >
                {state}
              </td>

              <td>
                <div className='flex justify-center items-center'>
                    <div className="text-center text-sm md:text-left flex justify-center py-4 px-4"> 
                        <FaEdit onClick={handleEditUser}/>
                    </div>
                    <div className="text-center text-sm md:text-left flex justify-end py-4 px-4"> 
                        <FaTrash onClick={handleDelete}/>
                    </div> 
                </div> 
              </td>
            </tr> 
          </tbody>
    </>
  )
}

export default UserDetails
