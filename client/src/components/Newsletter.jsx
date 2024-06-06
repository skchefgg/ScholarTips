import React from 'react'
import { FaEnvelopeOpenText, FaRocket } from "react-icons/fa6"
import { Link } from 'react-router-dom'
const Newsletter = () => {
    return (
        <div>
            <h1 className='text-lg bg-blue text-white text-center font-bold mb-2'>get in touch</h1>
            <div className='mt-10'>
                <h3 className='text-lg font-bold mb-2 flex-items-center gap-2'><FaEnvelopeOpenText /> Email me</h3>
                <p className='text-primary/75 text-base mb-4'>Get updates and notification about lates Job and scholarship directly on your Email</p>
                <div className='w-full space-y-4'>
                    <input type="email" name="email" id="email" placeholder='name@mail.com' className='w-full block py-2 pl-3 border focus:outline-none' />
                    <input type="submit" value={"Subscribe"} className='w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold' />
                </div>
            </div>
            <div className='mt-20'>
                <h3 className='text-lg font-bold mb-2 flex-items-center gap-2'><FaRocket />Get noticed faster</h3>
                <p className='text-primary/75 text-base mb-4'>Reach Out to us for any query or feedback</p>
                <div className='w-full space-y-4'>
                    {/* <input type="submit" value={"Contact Us"} className='w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold' /> */}

                    <Link to="/Contact">
                        <button className='w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold'>Contact Us</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Newsletter