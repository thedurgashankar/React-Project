import { useContext, useEffect, useState } from "react";
import { Logincontext } from "./Logincontext";

function Cart() {
    const[product,setProduct]=useState([])
        const{cart,setCart}=useContext(Logincontext)
    useEffect(()=>{
        fetch('/api/cartproducts',{
           method:"POST",
           headers:{"Content-Type":"application/json"},
           body:JSON.stringify({ids:Object.keys(cart.items)}) 
        }).then((res)=>{return res.json()}).then((data)=>{
            //console.log(data)
            setProduct(data)
        })
    },[cart])
    function handlequantity(id){
       return cart.items[id]
    }
    function handleprice(id,price){
       return handlequantity(id)*price
    }
    function handleincrement(e,id){
        let currentquanity=handlequantity(id)
        let _cart ={...cart}
        _cart.items[id] =currentquanity+1
        _cart.totalitems +=1
        setCart(_cart)

    }
    function handledecremenet(e,id){
    let currentquanity=handlequantity(id)
    if(currentquanity===1){
        return 
    }
    let _cart ={...cart}
    _cart.items[id] =currentquanity-1
    _cart.totalitems -=1
    setCart(_cart)
    }
    function hanldedelete(e,id){
        let currentqnty=handlequantity(id)
        let _cart ={...cart}
       delete _cart.items[id]
       _cart.totalitems -=currentqnty
        setCart(_cart)
    
    }
    return (
        <div className="container">
                    <div className="row">
                    <div className="col-md-12">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>S.no</th>
                                    <th>Product Name</th>
                                    <th>Product Description</th>
                                    <th>Product Quantity</th>
                                    <th>Product Price</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {product.map((result,key)=>(
                                    <tr key={result._id}>
                                    <td>{key+1}</td>
                                    <td>{result.name}</td>
                                    <td>{result.desc}</td>
                                    <td><button onClick={(e)=>{handleincrement(e,result._id)}}>+</button>{handlequantity(result._id)}<button onClick={(e)=>{handledecremenet(e,result._id)}}>-</button></td>
                                    <td>{handleprice(result._id,result.price)}</td>
                                    <td><button onClick={(e)=>{hanldedelete(e,result._id)}}>Delete</button></td>
                                </tr>
                                ))}
                                
                            </tbody>
                        </table>
                    </div>

                    </div>


        </div>

      );
}

export default Cart;