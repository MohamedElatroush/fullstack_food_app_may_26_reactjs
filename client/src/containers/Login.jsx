import React, { useState } from 'react';
import { LoginBg, Logo} from '../assets';
import { LoginInput } from '../components';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { motion } from 'framer-motion';


const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");

  return (
    <div className='w-screen h-screen relative overflow-hidden flex'>
        {/* {background image} */}
        <img src={LoginBg} className='w-full h-full object-cover absolute left-0' alt='' />

        {/* {content box} */}
        <div className='flex flex-col items-center bg-lightOverlay w-[80%] md:w-508 h-full z-10 backdrop-blur-md p-4 px-4 py-12 gap-6'>
            {/* Top logo section */}
            <div className='flex items-center justify-start gap-4 w-full'>
                <img src={Logo} className='w-8' alt='' />
                <p className='text-headingColor font-semibold text-2xl' >City</p>
            </div>
            {/* {Welcome text} */}
            <p className='text-3xl font-semibold text-headingColor z-20'>Welcome Back</p>
            <p className='text-xl text-textColor -mt-6'>Sign in with following</p>

            {/* input section */}
            <div className='w-full flex flex-col items-center justify-center gap-6 px-4 md:px-12 py-4'>
              <LoginInput placeholder={"Email Here"} icon={<FaEnvelope className='text-xl text-emailLogoColor' />} inputState={userEmail} inputStateFunc={setUserEmail} type="email" isSignUp={isSignUp}/>
              <LoginInput placeholder={"Password Here"} icon={<FaLock className='text-xl text-emailLogoColor' />} inputState={password} inputStateFunc={setPassword} type="password" isSignUp={isSignUp}/>
              {isSignUp && (
                <LoginInput placeholder={"Confirm Password Here"} icon={<FaLock className='text-xl text-emailLogoColor' />} inputState={confirm_password} inputStateFunc={setConfirm_password} type="password" isSignUp={isSignUp}/>
              )}
              {!isSignUp ? <p className='text-headingColor'>Doesn't have an account: <motion.button whileTap={{scale : 0.95}}>Create one</motion.button></p> : <p></p>}
            </div>

        </div>
    </div>
  )
}

export default Login