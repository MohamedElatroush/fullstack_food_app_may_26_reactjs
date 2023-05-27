import React, { useState } from 'react'

const LoginInput = ({placeholder, icon, inputState, inputStateFunc, type, isSignUp}) => {
    const [isFocus, setIsFocus] = useState(false);
  return (
    <div className={`flex items-center justify-center gap-4 bg-lighttextGray backdrop-blur-md rounder-md w-full px-4 py-2 ${isFocus ? "shadow-md shadow-red-400" : "shadow-none"}`}>
        {icon}
        <input type={type} placeholder={placeholder} className='w-full h-full bg-transparent text-emailLogoColor text-lg font-semibold border-none outline-none' value={inputState} onChange={(e) => {inputStateFunc(e.target.value)}} onFocus={() => {setIsFocus(true)}} onBlur={() => {setIsFocus(false)}}></input>
    </div>
  )
}

export default LoginInput