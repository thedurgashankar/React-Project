import { useContext } from 'react';
import {  Link } from 'react-router-dom'
import { Logincontext } from './Logincontext';
function Productstrc(props) {
    const{product}=props

    const{cart,setCart}=useContext(Logincontext)

    function handlecart(e,product){
        console.log(product)
        let _cart={...cart}
        if(!_cart.items){
            _cart.items={}
        }
        if(!_cart.items[product._id]){
            _cart.items[product._id]=1
        }else{
            _cart.items[product._id] +=1
        }

        if(!_cart.totalitems){
            _cart.totalitems=1
        }else{
            _cart.totalitems +=1
        }
        setCart(_cart)
        //console.log(cart)

    }
    return ( 
    <div className="card" style={{width:'18rem'}} >
  <img src="logo192.png" style={{width:'100px'}} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{product.name}</h5>
    <p className="card-text">{product.desc}</p>
    <p className="card-text">{product.price}</p>
    <button className='btn btn-success me-2' onClick={(e)=>{handlecart(e,product)}}>Add Cart</button>
    <Link to="/" className="btn btn-primary">More details...</Link>
  </div>
</div>
     );
}

export default Productstrc;