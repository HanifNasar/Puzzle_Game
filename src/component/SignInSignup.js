import React, { useEffect, useRef, useState } from "react";
import PuzzleGame from "./PuzzleGame";
import './SignInSignup.css';
function SignInSignupWithLocalStorage(){
   const name=useRef()
   const email=useRef()
   const password=useRef()
   const dateofbirth=useRef()
   const address=useRef()
   const phonenumber=useRef()
   const [showHome,setShowHome]=useState(false)
   const [show,setShow]=useState(false)
    const localSignUp=localStorage.getItem("signUp")
    const localEmail=localStorage.getItem("email")
    const localPassword=localStorage.getItem("password")
    const localName=localStorage.getItem("name")
   useEffect(()=>{
    if(localSignUp){
        setShowHome(true)
    }
    if(localEmail){
        setShow(true)
    }
   })
   const handleClick=()=>{
       if(name.current.value&&email.current.value&&password.current.value)
      {
        localStorage.setItem("name",name.current.value)
        localStorage.setItem("email",email.current.value)
        localStorage.setItem("password",password.current.value)
        localStorage.setItem("dateofbirth",dateofbirth.current.value)
        localStorage.setItem("address",address.current.value)
        localStorage.setItem("phonenumber",phonenumber.current.value)
        localStorage.setItem("signUp",email.current.value)
        alert("Account created successfully!!")
        window.location.reload()
      }
   }

   const handleSignIn=()=>{
    if(email.current.value==localEmail&&password.current.value==localPassword){
        localStorage.setItem("signUp",email.current.value)
        window.location.reload()
    }else{
        alert("Please Enter valid details")
    }
   }
    return(
        <div>
            {showHome?<PuzzleGame/>:
            (show?
                <div className="container">
                        <h1>Hello {localName}</h1>
                        <div className="input_space">
                            <input placeholder="Email" type='text' ref={email} />
                        </div>
                        <div className="input_space">
                            <input placeholder="Password" type='password' ref={password} />
                        </div>
                        <button onClick={handleSignIn}>Sign In</button>
                </div>
                :
                <div className="container">
                    <h1>SignUp</h1>
                        <div className="input_space">
                            <input placeholder="Name" type='text' ref={name} />
                        </div>
                        <div className="input_space">
                            <input placeholder="Email" type='text' ref={email} />
                        </div>
                        <div className="input_space">
                            <input placeholder="Password" type='password' ref={password} />
                        </div>
                        <div className="input_space">
                            <input placeholder="dateofbirth" type='dateofbirth' ref={dateofbirth} />
                        </div>
                        <div className="input_space">
                            <input placeholder="address" type='address' ref={address} />
                        </div>
                        <div className="input_space">
                            <input placeholder="phonenumber" type='phonenumber' ref={phonenumber} />
                        </div>
                        <button onClick={handleClick}>Sign Up</button>
                </div>)
            }
        </div>
    );
}
export default SignInSignupWithLocalStorage;


