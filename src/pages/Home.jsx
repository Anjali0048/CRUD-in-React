import React, { useEffect, useState } from 'react'
import UserDetails from '../components/UserDetails'
import { Link } from 'react-router-dom';

const Home = () => {

  const [users, setUsers] = useState([]);

  // for each render useEffect will be called
  useEffect(() => {
    // getting existing data stored in local storage labelled as 'users'
    const users = JSON.parse(localStorage.getItem('users'));
    // updating users
    setUsers(users)
  },[])

  // in 'users' all the users data is stored in array so that we can apply map function 
  // console.log(users)
  
  return (
    <div>
      <div className="text-center md:text-left flex justify-end mr-14 mt-10 mb-4"> 
          <Link to="/create">
            <button className='bg-[#75cce7] p-2 rounded-md hover:brightness-90'>
              + Add User
            </button>
          </Link>
      </div>

        <div className="w-11/12 justify-center mx-auto flex flex-col">
            <div className="overflow-x-auto shadow-md sm:rounded-lg">
              <div className="inline-block min-w-full align-middle dark:bg-[#EBF0FA]">
                <div className="overflow-hidden">
                  <table className="min-w-full table-fixed dark:bg-[#EBF0FA] divide-y divide-gray-400 ">
                    <thead className="bg-bg-[#EBF0FA] dark:bg-[#EBF0FA]">
                      <tr>
                        {/* <th scope="col" className="p-4">
                        </th> */}
                        <th
                          scope="col"
                          className="py-3 px-6 text-xs font-bold tracking-wider text-left text-black uppercase dark:bg-[#EBF0FA]"
                        >
                          FIRST NAME
                        </th>
                        <th
                          scope="col"
                          className="py-3 px-6 text-xs font-bold tracking-wider text-left text-black uppercase dark:bg-[#EBF0FA]"
                        >
                          LAST NAME
                        </th>
                        <th
                          scope="col"
                          className="py-3 px-6 text-xs font-bold tracking-wider text-left text-black uppercase dark:bg-[#EBF0FA]"
                        >
                          EMAIL ID
                        </th>
                        <th
                          scope="col"
                          className="py-3 px-6 text-xs font-bold tracking-wider text-left text-black uppercase dark:bg-[#EBF0FA]"
                        >
                          PHONE NUMBER
                        </th>
                        <th
                          scope="col"
                          className="py-3 px-6 text-xs font-bold tracking-wider text-left text-black uppercase dark:bg-[#EBF0FA]"
                        >
                          GENDER
                        </th>
                        <th
                          scope="col"
                          className="py-3 px-6 text-xs font-bold tracking-wider text-left text-black uppercase dark:bg-[#EBF0FA]"
                        >
                          DATE OF BIRTH
                        </th>
                        <th
                          scope="col"
                          className="py-3 px-6 text-xs font-bold tracking-wider text-left text-black uppercase dark:bg-[#EBF0FA]"
                        >
                          CITY
                        </th>
                        <th
                          scope="col"
                          className="py-3 px-6 text-xs font-bold tracking-wider text-left text-black uppercase dark:bg-[#EBF0FA]"
                        >
                          STATE
                        </th>
                        <th
                          scope="col"
                          className="py-3 px-6 text-xs font-bold tracking-wider text-left text-black uppercase dark:bg-[#EBF0FA]"
                        >
                          ACTIONS
                        </th>

                       

                      </tr>
                    </thead>
                    {
                      // applying map function on users array
                      users && users.length > 0 ?
                        users.map((item,index) => {
                          return <UserDetails key={index} {...item}/>
                        })
                        : "No data found, please add user"
                    }
                  </table>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Home

