const Reg=require('../models/reg')


exports.register=async(req,res)=>{
  const{username,password}=req.body
  const usercheak=await Reg.findOne({username:username})
  if(usercheak==null){
  const record=new Reg({username:username,password:password,})
  await record.save()
  res.json(record)
  }else{
    res.json({message:'Username already exist'})
  }
}

exports.login=async(req,res)=>{
  const{username,password}=req.body
  const record = await Reg.findOne({username:username})
  if(record!==null){
    if(record.password==password){
      res.json(record)
    }else{
      res.json({message:'Wrong credetails'})
    }
  }else{
    res.json({message:'Wrong credetails'})
  }

}