const express =require("express")//function
const app = express()//module
app.use(express.json())//allways write before router api if we are working in json
const apiRouter=require("./routers/api")
const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/reactproject21')


app.use('/api',apiRouter)//with prefix and routername
app.listen(5000,()=>{console.log("server is running on port 5000");})