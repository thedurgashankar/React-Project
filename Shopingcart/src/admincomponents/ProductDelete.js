const { useParams, useNavigate } = require("react-router-dom");

function ProductDelete() {
    const navigate=useNavigate()
 const{id}=useParams()
 fetch(`/api/productdelete/${id}`,{
    method:"DELETE"
 }).then((res)=>{return res.json()}).then((data)=>{
    //console.log(data)
    if(data.message){
     navigate('/adminproducts')
    }
 })
    return ( 

        <h2>hhh</h2>
     );
}

export default ProductDelete;