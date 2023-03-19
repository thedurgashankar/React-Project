const products = require("../models/products")
const Products=require("../models/products")





exports.adminproductadd=async(req,res)=>{
   // console.log(req.body)
   const{name,desc,price}=req.body
    const record=new products({name:name,desc:desc,price:price})
   await record.save()
   res.json(record)
}

exports.adminallproducts=async(req,res)=>{
  const record=  await products.find()
  res.json(record)
}

exports.adminsingleproduct=async(req,res)=>{
  const id=req.params.id 
  const record=await products.findById(id)
  res.json(record)
}

exports.adminproductupdate=async(req,res)=>{
  //console.log(req.params.id)
  //console.log(req.body)
  const id=req.params.id
  const{name,price,desc,status}=req.body
  await products.findByIdAndUpdate(id,{name:name,desc:desc,price,status:status})
  res.json({message:"Successfully Updated"})

}
exports.productdelete=async(req,res)=>{
  const id=req.params.id
  await products.findByIdAndDelete(id)
  res.json({message:"Successfully Deleted"})
}

exports.productinall=async(req,res)=>{
const record=await products.find({status:'IN-STOCK'})
res.json(record)
}

exports.cartproducts=async(req,res)=>{
  const{ids}=req.body
 const record= await products.find({_id:{$in:ids}})
 res.json(record)
}