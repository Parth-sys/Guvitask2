import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Profiledata from "./Profiledata";

function Profile() {


  const [dob, setdob] = useState();
  const [age, setage] = useState();
  const [mobile, setmobile] = useState();
  const [gender, setgender] = useState();

  
  
  const navigate=useNavigate();

 // const [profiledata, setprofiledata] = useState([]);

  const data = localStorage.getItem('currentuser')
  const data1 = JSON.parse(data)
  const email = data1.email



  useEffect(() => {
    
  },[])
  
  
  
    const save = async (e) => {
      e.preventDefault()
  
      const result = await axios.post(`http://localhost:5000/edit/${email}`, {
        dob,
        age,
        mobile,
        gender
      })
       console.log(result)
      alert("user edited successfully")
  
    
    }






   const LogoutUser=()=>{
    localStorage.removeItem("currentUser");
          navigate('/Login')
     
}






  return (


    <div className="container">

                
             
      <div className="row justify-content-center  m-1 ">

            
        <h3> Profile Information</h3>
       
       <div className="d-flex ">

          
           <div className="float-right">
          <button className="btn btn-danger"  onClick={LogoutUser}>Logout</button>
           </div>
      
       
       </div>
        
      
      
        <div className="col-md-6">

         

         <Profiledata></Profiledata>
       

        
        </div> 

             <h4>Edit Profile</h4>
        
        <div className="form1 p-1 col-md-6 mt-1">
                                  

               <form onSubmit={save}>

          <label className="form-lable">Date Of Birth</label>
          <input className="form-control" type="date"
            min="1990-01-01" max="2022-12-31"
          onChange={(e) => setdob(e.target.value)} required></input>

          <label className="form-lable">Age</label>
          <input className="form-control" type="number" onChange={(e) => setage(e.target.value)} required></input>

          <label className="form-lable">Mobile</label>

          <input className="form-control" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            onChange={(e) => setmobile(e.target.value)}
         required ></input>

          <label className="form-lable">gender</label>

          <select className="form-control" onChange={(e) => setgender(e.target.value)} required>
            <option value="">--Please choose an option--</option>
            <option value={gender}>Male</option>
            <option value={gender}>Female</option>
          </select>

          <button className="btn btn-primary m-1"  type="submit">Edit</button>
            </form>


        </div>








      </div>

    </div>
  )
}

export default Profile