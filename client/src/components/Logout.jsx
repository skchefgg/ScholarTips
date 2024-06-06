import React from 'react'
import { useAuth0 } from "@auth0/auth0-react"
import MyJobs from '../Pages/MyJobs';
const Logout = () => {
    const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
    return (
        <div>
            <MyJobs />
            <div className='justify-center flex'>
                <button className='bg-blue px-5 py-2' onClick={(e) => logout()}>Logut</button>
            </div>

        </div>
    )
}

export default Logout