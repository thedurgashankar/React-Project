import {BrowserRouter as Router ,Route,Routes} from 'react-router-dom';
import Login from './Login';
import Reg from './Reg';
import Products from './Products';
import Dashboard from './admincomponents/Dashboard';
import Header from './Header';
import Footer from './Footer';
import Adminproducts from './admincomponents/Adminproducts';
import Adminproductadd from './admincomponents/Adminproductadd';
import Adminproductupdate from './admincomponents/Adminproductupdate';
import ProductDelete from './admincomponents/ProductDelete';
import { useEffect,useState } from 'react';
import { Logincontext } from './Logincontext';
import Cart from './Cart';

function App() {
  const[cart,setCart]=useState('')
  useEffect(()=>{
    localStorage.setItem('cart',JSON.stringify(cart))
  },[cart])
  const[loginname,setLoginname]=useState(localStorage.getItem('loginname'))
  
  return (
    <Logincontext.Provider value={{loginname,setLoginname,cart,setCart}}>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/reg' element={<Reg/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>} ></Route>
        <Route path='/adminproducts' element={<Adminproducts/>}></Route>
        <Route path="/adminproductadd" element={<Adminproductadd/>}></Route>
        <Route path="/adminproductupdate/:id" element={<Adminproductupdate/>}></Route>
        <Route path="/productdelete/:id" element={<ProductDelete/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>



      </Routes>
      <Footer/>
    </Router>
    </Logincontext.Provider>
    );
}

export default App;