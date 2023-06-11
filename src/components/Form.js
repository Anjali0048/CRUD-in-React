import React from 'react'

const Form = ({firstName,lastName,phoneNo,email,state,city,dob,gender,handleSubmit,handleChange}) => {

  return (
    <>
     <div className='flex items-center justify-center m-4'>
      <form onSubmit={handleSubmit} className="w-full max-w-3xl">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
              First Name
            </label>
            <input 
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
              id="grid-first-name" 
              type="text" 
              placeholder="Jane"
              value={firstName}
              onChange={handleChange}
              name="firstName"
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
              Last Name
            </label>
            <input 
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
              id="grid-last-name" 
              type="text" 
              placeholder="Doe"
              value={lastName}
              onChange={handleChange}
              name="lastName"
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
              Phone No.
            </label>
            <input 
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
              id="grid-first-name" 
              type="number" 
              placeholder="9258476310"
              value={phoneNo}
              onChange={handleChange}
              name="phoneNo"
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
              Email Id
            </label>
            <input 
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
              id="grid-last-name" 
              type="text" 
              placeholder="Joe@gmail.com"
              value={email}
              onChange={handleChange}
              name="email"
              required
            />
          </div>
        </div>
  
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
              Date of Birth
            </label>
            <input 
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
              id="grid-city" 
              type="date" 
              placeholder="10-04-2003"
              value={dob}
              onChange={handleChange}
              name="dob"
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label htmlFor="gender" id='gender' className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Gender
            </label>
            <div className="relative">
              <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                id="gender"
                value={gender}
                onChange={handleChange}
                name='gender'
                required
                >
                <option value="">
                  Select gender
                </option>
                <option value="Male">
                  Male
                </option>
                <option value="Female">
                  Female
                </option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
              City
            </label>
            <input 
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
              id="grid-city" 
              type="text" 
              placeholder="Bangalore"
              value={city}
              onChange={handleChange}
              name="city"
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
              State
            </label>
            <input 
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
              id="grid-city" 
              type="text" 
              placeholder="Karnataka"
              value={state}
              onChange={handleChange}
              name="state"
              required
            />
          </div>
        </div>
    
        <button 
            className='bg-[#75cce7] p-2 rounded-md hover:brightness-90 mt-4'
            type='submit'
        >
            Submit
        </button>
      
      </form>
    </div> 
    </>
  )
}

export default Form
