import React from 'react'
import UserImage from '@assets/images/signin.png';
const SignIn = () => {
  return (
    <div className="mt-15 flex justify-between items-center md:mr-12">
        <img src={UserImage} alt="Sign In" className="hidden md:block w-3/8 h-1/2 object-cover" />

        <div className="md:w-95 m-auto w-1/2 flex flex-col justify-between h-90">
            <div className="flex flex-col justify-between h-[78px]">
                <h1 className="text-4xl font-semibold">Log in to Breez</h1>
                <h3>Enter your detail below</h3>
            </div>

            <form className="h-50 flex flex-col justify-between items-start">
                <input type="email" placeholder="Enter Your Email" className="w-full h-8 border-b-1 focus:outline-none"/>
                <input type="password" placeholder='Password' className="w-full h-8 border-b-1 focus: focus:outline-none"/>
                <p>you don't have an account? <a href="/signup" className="text-blue-500">Sign Up</a></p>

                <div className="flex w-full justify-between items-center">
                <button className="flex items-center justify-center flex-col w-35 h-14 bg-[#db4444] text-white rounded-sm">Log In</button>
                <a href="/recovery" className="text-[#db4444] md:w-fit w-[70px]">Forget Password?</a>
                </div>
                

              

            </form>
        </div>
    </div>
  )
}

export default SignIn