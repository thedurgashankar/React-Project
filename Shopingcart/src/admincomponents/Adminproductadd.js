import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Left from "./Left";

function Adminproductadd() {
    const navigate=useNavigate()
    const[name,setName]=useState('')
    const[desc,setDesc]=useState('')
    const[price,setPrice]=useState('')
    const[message,setMessage]=useState('')
    function handleform(e){
        e.preventDefault()
        //console.log(name,desc,price)
        const formdata={name,desc,price}
        fetch('/api/productadd',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(formdata)
        }).then((res)=>{return res.json()}).then((data)=>{
            //console.log(data)
            if(data._id){
                navigate('/adminproducts')

            }else{
                setMessage('Error Occured')

            }
        })
    }
    return (
        <section id="mid">
          <div className="container">
            <div className="row">
              <Left/>
              
              <div className="col-md-9">
                <h2>Product Add Here</h2>
                <form onSubmit={(e)=>{handleform(e)}}>
                    <label>Product Name</label>
                    <input type="text" className="form-control"
                    value={name}
                    onChange={(e)=>{setName(e.target.value)}}
                    />

                    <label>Product Description</label>
                    <input type="text" className="form-control"
                     value={desc}
                     onChange={(e)=>{setDesc(e.target.value)}}
                    />

                    <label>Product Price</label>
                    <input type="text" className="form-control"
                     value={price}
                     onChange={(e)=>{setPrice(e.target.value)}}
                    />

                    <button className="btn btn-success form-control mt-2 mb-2">Add Product</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      );
}

export default Adminproductadd;