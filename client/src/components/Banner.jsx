import React, { useState } from 'react'
import { FiMapPin, FiSearch } from "react-icons/fi"
import { LuMousePointerClick } from "react-icons/lu";
const Banner = ({ query, handleInputChange }) => {
    return (
        <div className='bg-[rgb(255,255,1)] max-w-screen-2xl container-flow mx-auto xl:px-24 px-4 md:py-20 py-14 '>
            <h1 className='text-5xl font-bold text-primary mb-3 text-center'>find your <span className='text-blue'>Scholarship</span> </h1>
            <p className='text-xl text-black/70 my-8 text-center font-semibold'>Your desired scholarship is just a click <LuMousePointerClick className='inline text-blue' /> away. Search from 700+ scholarships across all state for all category</p>
            <form >
                <div className='flex justify-center md:flex-row flex-col md:gap-0 gap-4'>
                    <div className='flex md:rounded-s-md rounded shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:indigo-600 md:w-1/2 w-full'>
                        <input type="text" name='title' placeholder='what are u looking for?' id='title' className='block flex-1 rounded border-0  py-1.5 pl-8 text-black-900 placeholder:text-black-400 focus:right-0 sm:text-sm sm:leading-6' onChange={handleInputChange} value={query} />
                        <FiSearch className='absolute mt-2.5 ml-2 text-gray-400' />
                    </div>
                    <button type='submit' className='bg-blue py-2 px-8 text-white md:rounded-s-none rounded'>Search</button>
                </div>
            </form >
        </div >
    )
}

export default Banner