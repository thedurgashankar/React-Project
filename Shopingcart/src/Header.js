import { useContext } from "react";
import { useNavigate,Link} from "react-router-dom";
import { Logincontext } from "./Logincontext";

function Header() {
    const navigate=useNavigate()
    const{loginname,setLoginname,cart}=useContext(Logincontext)
    function handlelogout(e){
        localStorage.setItem('loginname','')
        setLoginname(localStorage.getItem('loginname'))
            navigate('/')
    }
   
   
    return (
        <section id="header">
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <h2>Welcome {loginname}</h2>
                </div>
                
                <div className="col-md-4">
                <Link to="/products"><button>Products</button></Link>
                  <Link to="/cart"><button>CART-{cart.totalitems}</button></Link>
                    <button className="btn btn-danger" onClick={(e)=>{handlelogout(e)}}>Logout</button></div>
            </div>
        </div>
        </section>
      );
} 

export default Header;