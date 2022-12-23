import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Error from "../Error";
import axios  from  'axios'
import Success from "../Success";
import Loading from "../Loding";


function Login(){

   const [email,setemail]=useState("");
   const [password,setpassword]=useState ("");
   const [error,seterror]=useState()
   const [suc,setsuc]=useState();
   const [loading,setloading]=useState();
     const [token,settoken]=useState();

const navigate=useNavigate()


   useEffect(()=>{
           
   },[])

 
   const login=async(e)=>{
    e.preventDefault()

    const user={
      email,
      password
    }

    try {
        var res =  await axios.post('http://localhost:5000/Login',
          user
        )
        console.log(res);
   
        if(res){
            //localStorage.setItem("token",res.data)
            localStorage.setItem("token",res.data)
            localStorage.setItem('currentuser', JSON.stringify(res.data.user))
            settoken(token)
             setsuc(true)
             setloading(true)
                        
   
             setTimeout(() => {
          
                   navigate('/profile')     
             }, 10000);
             
         }
        else{
          seterror()
        }  
        
   
        
    } catch (error) {
        console.log(error)
        seterror(error)
        
    }



  }



    return(
        <div className="container form ">
         <div className="row mt-5  justify-content-center   bg-rounded "  >
          
           <div  className="col-4 shadow-lg ">  
                 <h4> Login</h4>
                 <form  className="p-2 "  onSubmit={login}>
                   {error && (<Error error={error}></Error>)}
                   {suc && (<Success success="login success"></Success>)}
                 <label className="form-lable"> Email</label>
                 <input type="email" className="form-control m-1" placeholder="Email" onChange={(e)=>setemail(e.target.value)} require></input>

                 <label className="form-lable" >Password</label>
                 <input type="password" className="form-control m-1" placeholder="Password" onChange={(e)=>setpassword(e.target.value)} require></input>
                 
                
                                                                  
                    <button type="submit"   className="btn btn-primary mt-1"   >Login</button>
                               {loading && (<Loading></Loading>) }
                 </form>
                  
                 <a href="/" style={{color:"black"}}> Click here to Signup</a>
           </div>
         </div>

        </div>
    )
}
export default Login;