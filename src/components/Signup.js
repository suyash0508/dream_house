import React, { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup=()=>{

    const history=useNavigate();
    const [Username,setUsername]=useState('')
    const [Password,setPassword]=useState('')
    const [Email,setEmail]=useState('')
    const [Phone,setPhone]=useState('')

    async function submit(e){
        e.preventDefault();

        try{
            await axios.post("http://localhost:5000/Signup",{
                Username,Password
            })
            .then(res=>{
                if(res.data=="exist"){
                    alert("user exists Login to proceed")
                    history("/Login",{state:{id:Username}}) 
                }
                else if(res.data=="notexist"){
                    // alert("user have not sign up")
                    history("/Login",{state:{id:Username}})
                    alert("Account created sign in Now")
                }
            })

            .catch(e=>{
                alert("wrong details")
                console.log(e);
    
            })
        }
       
    
    catch(e){
        console.log(e);
    }
    }

  return (
    <>
      <div>
       

<div className ="flex flex-col justify-center items-center">

          <h1 >SignUp Here<br></br><br></br> </h1>
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"  action="/Signup" method="post">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" name="Username" placeholder="Username" onChange={(e)=>{setUsername(e.target.value)}} />
    </div>

    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" name="Password" placeholder="***********" onChange={(e)=>{setPassword(e.target.value)}} />
    </div>

    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="email">
        Email
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" name="Email" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}} />
    </div>

    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="phone">
        Phone
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="tel" name="Phone" placeholder="Phone" onChange={(e)=>{setPhone(e.target.value)}} />
    </div>

 
    {/* <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"  type="checkbox" /> */}

    <div className="flex items-center justify-between">

           <Link to="/">  <button className="bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm w-full transition"
                type="submit" onClick={submit}>
                Submit
              </button>  </Link>
            {/* <Link to="/Signup">  <button className="m-6 border border-violet-700 text-violet-700 hover:border-purple-600 hover:text-purple-600 rounded p-4 text-sm w-full transition">
                 Sign Up
              </button> </Link> */}
      
    </div>
  </form>

</div>
      </div>
    </>
    
  )
};

export default Signup;