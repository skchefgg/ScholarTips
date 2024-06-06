import React from 'react'
import { useAuth0 } from "@auth0/auth0-react"
import { FiAward } from "react-icons/fi";
import PageHeader from './PageHeader';

const Log = () => {
    const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
    return (
        <div className='w-full flex-col flex items-center justify-center'>
            <div className='py-24 mt-3 bg-[#FAFAFA] rounded flex items-center justify-center'>
                <div>
                    <h2 className='px-60 text-3xl text-blue font-medium mb-1 text-center'>Are you Admin? Login below!!</h2>

                    {/* <p className='text-sm text-center'><a href="/">Home</a>/{path} 
                </p>*/}
                </div>
            </div>
            <button className='my-20 bg-blue px-10 py-5 rounded' onClick={(e) => loginWithRedirect()}>Login</ button>
        </div>


    )
}

export default Log