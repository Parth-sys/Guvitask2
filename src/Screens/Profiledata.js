import axios from "axios";
import React,{useEffect,useState} from "react";


function Profiledata(){


const [data2,setdata2]=useState([]);


const data = localStorage.getItem('currentuser')
  const data1 = JSON.parse(data)
  const email = data1.email

useEffect(()=>{

    getdata()

},[])

const getdata= async()=>{
    const resp=await axios.get(`http://localhost:5000/data/${email}`)
       console.log(resp)
     setdata2(resp.data);

}











    return(
        < div className="container">
            <div className="row">
               <div className="col-md-6">

               <table className="table table-responsive ">

<thead>
  <tr>
    <th scope="col">name</th>
    <th scope="col">email</th>
    <th scope="col">Date of Birth</th>
    <th scope="col">Age</th>
    < th scope="col">gender</th>
    <th scope="col"> mobile</th>

  </tr>
</thead>

<tbody>
    
    {data2.map((r,index)=>
    
  <tr >
    <td>{r.name}</td>
     <td>{r.email}</td>  
    <td>{r.dob}</td>
    <td>{r.age}</td>
    <td>{r.gender}</td>
    <td>{r.mobile}</td>

  </tr>
    
    )}
        
</tbody>
</table>

               </div>


            </div>
        
        </div>
    )
}

export default Profiledata