import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
    const navigate=useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const[message,setMessage]=useState('')


    function handelform(e) {
        e.preventDefault()
        // console.log(username,password)
        const formdata = { username, password }
        fetch('api/login',{
            method: 'POST',
            headers: { "Content-Type": "application/json" },//problem video
            body: JSON.stringify(formdata)
        }).then((res)=>{return res.json()}).then((data)=>{
            console.log(data)
           if(data._id){
                setMessage('')
                if(data.username==='admin'){
                    navigate('/dashboard')
                }else{
                    navigate('/products')
                }

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
                        <h2>Login Here</h2>
                        {message}
                        
                        <form onSubmit={(e) => { handelform(e) }}>
                            <label>Username</label>
                            <input type="text" className="form-control"
                                value={username}
                                onChange={(e) => { setUsername(e.target.value) }}
                            />
                            <label>Password</label>
                            <input type="text" className="form-control"
                                value={password}
                                onChange={(e) => { setPassword(e.target.value) }}
                            />
                            <button type="submit" className="btn btn-danger form-control mt-2">Login</button>
                        </form>

                        <Link to="/reg">already account click here</Link>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        </section>

    );
}

export default Login;