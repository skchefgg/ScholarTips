import React from 'react'
import { FiMapPin, FiSearch } from "react-icons/fi"
import RedirectButton from '../components/RedirectButton'
import girl from './../../public/images/girl.avif'
const Contact = () => {
    return (
        // <div className="   shadow container flex-grow mx-auto max-w-[1200px] border-b py-5 lg:grid lg:grid-cols-2 lg:py-10">
        //     {/* image gallery */}

        //     {/* description  */}

        //     <div className="shadow mx-auto px-5 py-10 lg:px-5justify-start md:flex-row md:gap-0 gap-4">
        //         <div className='flex md:rounded-s-md rounded shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:indigo-600 md:w-1/2 w-full'>
        //             <input type="text" name='title' placeholder='what are u looking for' id='title' className='block flex-1 rounded border-0  py-1.5 pl-8 text-black-900 placeholder:text-black-400 focus:right-0 sm:text-sm sm:leading-6' />
        //             <FiSearch className='absolute mt-2.5 ml-2 text-gray-400' />
        //         </div>

        //         <div className='flex md:rounded-s-none rounded shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:indigo-600 md:w-1/3 w-full'>
        //             <input type="text" name='title' placeholder='location' id='title' className='block flex-1 border-0 rounded py-1.5 pl-8 text-gray-900 placeholder:text-grey-400 focus:right-0 sm:text-sm sm:leading-6' />
        //             <FiMapPin className='absolute mt-2.5 ml-2 text-gray-400' />
        //         </div>

        //         <RedirectButton url="https://www.education-future.org/" buttonText="Apply" />
        //         {/* <button className='my-5 bg-blue py-3 px-8 text-white md:rounded rounded w-full'>Search</button> */}
        //     </div >

        //     <div className="">
        //         <img src={girl} alt="" />



        //     </div>
        // </div >
        <>
            <div className='bg-blue mt-5 text-3xl container rounded text-white text-center container flex-grow mx-auto max-w-[1200px] border-b py-2'>CONTACT US</div>
            <div className=' rounded bg-[#ADD8E6] container flex-grow mx-auto max-w-[1200px] border-b  lg:grid lg:grid-cols-2 '>
                <div className='  w-80 mx-auto px-5 py-5 lg:px-5 justify-start md:flex-row md:gap-0 gap-4'>
                    <label className='block mb-2 mt-2 text-blue  text-lg font-semibold'>Your email</label>
                    <input type="email" placeholder='name@gmail.com' className='rounded create-job-input' />

                    <label className='block mb-2 mt-2 text-blue  text-lg font-semibold'>Your name</label>
                    <input type="text" className='rounded create-job-input ' />

                    <label className='block mb-2 mt-2 text-blue  text-lg font-semibold'>Any Feedback</label>
                    <input type="text" className=' rounded create-job-input' />

                    <label className='block mb-2 mt-2 text-blue  text-lg font-semibold'>Your issue</label>
                    <input type="text" className='rounded create-job-input' />
                    <button className='my-5 bg-blue py-3 px-8 text-white md:rounded rounded w-full'>Contact Us</button>
                </div>
                <div className='my-10 mx-10'>
                    <div class='my-5'>
                        <h1 className='text-3xl text-blue mb-2 font-semibold'>Address</h1>
                        <p>Room-7 ,Rajsi Hostel,Near Shubham K mart</p>
                        <p>Kota, RAIPUR </p>
                    </div>
                    <div class='my-5'>
                        <h1 className='text-3xl text-blue  font-semibold mb-2'>Phone</h1>
                        <h2>+919334421413</h2>
                        <h2>+919334421233</h2>
                    </div>
                    <div class='my-5'>
                        <h1 className='text-3xl text-blue font-semibold mb-2'>Email</h1>
                        <h2>shubham@gmail.com</h2>
                        <h2>shubham123@gmail.com</h2>
                    </div>

                </div>

            </div >
        </>



    )
}
export default Contact