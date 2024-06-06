import React from 'react'
import { useAuth0 } from "@auth0/auth0-react"
import MyJobs from '../Pages/MyJobs';
import Logout from './Logout';
import Log from './Log';
const Login = () => {
    const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
    return (
        <div>
            {
                isAuthenticated ? <Logout /> : <Log />
            }
        </div>

    );
}

export default Login
// import React from 'react'
// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// import app from '../firebase/firebase.config';
// import { getAuth } from "firebase/auth";


// const Login = () => {
//     const auth = getAuth();
//     const googleProvider = new GoogleAuthProvider();
//     const handleLogin = () => {
//         signInWithPopup(auth, googleProvider).then((result) => {

//             // The signed-in user info.
//             const user = result.user;
//             // IdP data available using getAdditionalUserInfo(result)
//             // ...
//         }).catch((error) => {

//             const errorMessage = error.message;
//             // The email of the user's account used.
//             const email = error.customData.email;
//             // The AuthCredential type that was used.
//             const credential = GoogleAuthProvider.credentialFromError(error);
//             // ...
//         });
//     }
//     return (
//         <div className='h-screen w-full flex items-center justify-center'>

//             <div className='shadow-2xl border w-1/2 h-1/2 bg-[#FAFAFA] flex flex-col items-center justify-center'>
//                 <h2 className='underline text-blue text-2xl text-center'>Login With Google</h2>
//                 <button className='bg-blue mx-12 my-10 px-10 py-2 text-white' onClick={handleLogin}>
//                     Login
//                 </button>
//             </div>

//         </div>
//     )
// }

// export default Login

