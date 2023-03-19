import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Left from "./Left";

function Adminproductupdate() {
     const {id}=useParams()
     const navigate=useNavigate()
     const[name,setName]=useState('')
     const[desc,setDesc]=useState('')
     const[price,setPrice]=useState('')
     const[status,setStatus]=useState('')
     const[message,setMessage]=useState('')
     function handleForm(e){
      e.preventDefault()
      const formdata={name,price,desc,status}
      // console.log(name,price,desc,status)
      fetch(`/api/productupdate/${id}`,{
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(formdata)
      }).then((res)=>{return res.json()}).then((data)=>{
        //console.log(data)
        if(data.message){ 
                navigate('/adminproducts')
        }else{
              setMessage("error Occured")  
        }
      })
     }

     useEffect(()=>{
      fetch(`/api/singleproduct/${id}`).then((res)=>{return res.json()}).then((data)=>{
        //console.log(data)
        setName(data.name)
        setDesc(data.desc)
        setPrice(data.price)
        setStatus(data.status)
       })

     },[])
    
     
    return ( 
        <section id="mid">
          <div className="container">
            <div className="row">
              <Left/>
              
              <div className="col-md-9">
                {id}
                <h2>Product Update Here</h2>
                 {message}
                <form onSubmit={(e)=>{handleForm(e)}}>
                    <label>Product Name</label>
                    <input type="text" 
                      value={name}
                      onChange={(e)=>{setName(e.target.value)}}
                    className="form-control" />
                    <label>Product Price</label>
                    <input type="text"
                    value={price}
                    onChange={(e)=>{setPrice(e.target.value)}}
                    className="form-control"/>
                    <label>Product Description</label>
                    <textarea className="form-control"
                    value={desc}
                    onChange={(e)=>{setDesc(e.target.value)}}>                      
                    </textarea>
                    <label>Product Status</label>
                    <select className="form-select" value={status}
                    onChange={(e)=>{setStatus(e.target.value)}}>
                        <option value="IN-STOCK">IN Stock</option>
                        <option valule="OUT-STOCK">Out Stock</option>
                    </select>
                    <button type="submit" className="btn btn-danger form-control mt-2 mb-2">Update</button>
                </form>
              </div>
            </div>
          </div>
        </section>
     );
}

export default Adminproductupdate;