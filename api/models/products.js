const mongoose= require('mongoose')


const productSchema=mongoose.Schema({
    name:String,
    desc:String,
    price:Number,
    status:{type:String,default:'OUT-STOCK'}
})






module.exports=mongoose.model('product',productSchema)