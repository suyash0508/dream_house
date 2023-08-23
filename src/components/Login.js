import React, { useState,useEffect } from "react";
import { Link, useNavigate,useLocation } from "react-router-dom";
import axios from "axios";
import Home from "../pages/Home";
import App from "../App";

const Login=()=>{
   
    const history=useNavigate();

    const [Username,setUsername]=useState('')
    const [Password,setPassword]=useState('')

    //await and async are used to fetch data
  async function submit(e) {
    e.preventDefault();   // so that on refreshing page,data will not vanish. It stays on the page after refresh also
    try{
        await axios.post("http://localhost:5000/",{
            Username,Password
        })

        .then(res=>{
            if(res.data=="exist"){
                alert("Welcome")
               history("/",{state:{id:Username}})
            }

            else if(res.data=="notexist"){
                alert("This User dont exists")
                const x=0;
                 history("/Login",{state:{id:x}})
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

          <h1 >Login/ SignUp Here<br></br><br></br> </h1>
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"  action="/" method="post">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" onChange={(e)=>{setUsername(e.target.value)}} name="Username" placeholder="Username" />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" onChange={(e)=>{setPassword(e.target.value)}} name="Password" placeholder="******" />

    </div>
    <div className="flex items-center justify-between">

           <Link to="/">  <button className="bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm w-full transition"
                type="submit" onClick={submit} >
                Submit
              </button> </Link>

            <Link to="/Signup">  <button className="m-6 border border-violet-700 text-violet-700 hover:border-purple-600 hover:text-purple-600 rounded p-4 text-sm w-full transition" >
                 Sign Up
              </button> </Link>
      
    </div>
  </form>

</div> 
      </div>
    </>
    
  )
};

export default Login;