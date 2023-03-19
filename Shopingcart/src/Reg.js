import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Reg() {
    const navigate=useNavigate()
    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')
    const[message,setMessage]=useState('')


    function handleform(e){
        e.preventDefault()
        const formdata={username,password}
        fetch('/api/register',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(formdata)
        }).then((res)=>{ return res.json()}).then((data)=>{
            console.log(data)
            if(data._id){
                setMessage('')
                navigate('/')

            }else{
                setMessage(data.message)

            }
        })
        
    }
    return ( 
        <section id="login">
        <div className="container">
        <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
            <h2>Registration Here</h2>
            {message}
            <form onSubmit={(e)=>{handleform(e)}}>
                <label>Username</label>
                <input type="text"
                 className="form-control"
                 value={username}
                 onChange={(e)=>{setUsername(e.target.value)}}
                 />
                <label>Password</label>
                <input type="text"
                 className="form-control"
                 value={password}
                 onChange={(e)=>{setPassword(e.target.value)}}
                 />
                <button type="submit" className="btn btn-danger form-control mt-2">Registration</button>
            </form>
            <Link to="/"><p>You have already account?ckecl here</p></Link>
        </div>
        <div className="col-md-4"></div>

        </div>
        </div>
    </section>
     );
}

export default Reg;