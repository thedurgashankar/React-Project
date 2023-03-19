import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Left from "./Left";

function Adminproducts() {
     const[products,setProducts]=useState([])
     const[isloading,setIsloading]=useState(true)
    useEffect(()=>{
        fetch('/api/adminallproducts').then((res)=>{return res.json()}).then((data)=>{
            //console.log(data)
            setProducts(data)
            setIsloading(false)
        })
    },[])


    return (
        <section id="mid">
          <div className="container">
            <div className="row">
              <div className="col-md-3"><Left/>
              </div>
              
              <div className="col-md-9">
                <h2>Product Managements</h2>
                <Link to="/adminproductadd"><button className="btn btn-success form-control">Add Product Here</button></Link>
                {isloading && <h2>Data is loading.....</h2>}
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Product Description</th>
                            <th>Product Price</th>
                            <th>Product status</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((result)=>(
                           <tr key={result._id}>
                           <td>{result.name}</td>
                           <td>{result.desc}</td>
                           <td>{result.price}</td>
                           <td>{result.status }</td>
                           <td><Link to={`/adminproductupdate/${result._id}`}><button>Update</button></Link></td>
                           <td><Link to={`/productdelete/${result._id}`}><button>Delete</button></Link></td>
                       </tr>  
                        ))}
                    </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      );
}

export default Adminproducts;