import axios from "axios";
import React ,{useState,useEffect}from "react";
import { useNavigate } from "react-router-dom";
import Error from "../Error";
import Success from "../Success";

function Signup(){

    const [name,setname]=useState("");
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
    const [confirmpassword,setconfirmpassword]=useState("");
    const [error ,seterror]=useState("")
    const [suc,setsuc]=useState(false)

  const navigate=useNavigate();

useEffect(()=>{
     
},[])

   const submit=async(e)=>{
       e.preventDefault(); 
     

    try {
        
        //if(password!==confirmpassword){
          //    seterror("Password is not matching")
          ///}
        
         const res= await axios.post('http://localhost:5000/signup',{
            name,
            email,
            password
         })
         console.log(res)
         setsuc(true)   

         setTimeout(() => {
             navigate('/Login')
            
         }, 2000);
       
    } catch (error) {
        console.log(error)
        seterror(error)
    }  
}



    return(
        <div className="container form ">
         <div className="row mt-5  justify-content-center   bg-rounded "  >
               
           <div  className="col-4 shadow-lg ">  
                 <h4>Create your account</h4>
                     {error && (<Error error={error}></Error>)}
                     {suc && (<Success success="Signup successful"></Success>)}

                 <form  className="p-2 Form " onSubmit={submit}>
                  <label className="form-lable">Name</label>
                 <input type="text" className="form-control m-1" placeholder="Name" onChange={(e)=>setname(e.target.value)}     required></input>
                 
                 <label className="form-lable"> Email</label>
                 <input type="email" className="form-control m-1" placeholder="Email" onChange={(e)=>setemail(e.target.value)}   required></input>

                 <label className="form-lable" >Password</label>
                 <input type="password" className="form-control m-1" placeholder="Password" onChange={(e)=>setpassword(e.target.value)} required></input>
                 

                 <label className="form-lable ">Confirm Password</label>

                 <input type="password" className="form-control m-1" placeholder="Confirm Password"
                  onChange={(e)=>setconfirmpassword(e.target.value)}
                   require></input>
                
                 <button  type="submit" className="btn btn-primary" >Signup</button>
                 </form>
                  { password !== confirmpassword ? (<Error error="password not maching"></Error>) :(<></>) }
                   
           </div>
           <a href="/Login">alredy have an account? Click here to Login</a>
         </div>

        </div>
    )
}
export default  Signup;