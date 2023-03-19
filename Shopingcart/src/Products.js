import {useEffect, useState} from 'react'
import Productstrc from './Productstrc'

function Products() {
  const[products,setProducts]=useState([])

  useEffect(()=>{
    fetch('/api/allinproducts').then((res)=>{return res.json()}).then((data)=>{
      //console.log(data)
      setProducts(data)
    })
  },[])
    return (
      <section id='products'>
        
      {products.map((result)=>(
          <Productstrc product={result}/>
      ))}
  
      </section>
      );
}

export default Products;