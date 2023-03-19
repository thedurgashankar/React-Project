const router=require('express').Router()
const productc=require('../controllers/productcontroller')
const regc=require('../controllers/regcontroller')

router.post('/register',regc.register)

router.post('/login',regc.login)

router.post('/productadd',productc.adminproductadd)
router.get('/adminallproducts',productc.adminallproducts)
router.get('/singleproduct/:id',productc.adminsingleproduct)
router.put('/productupdate/:id',productc.adminproductupdate)
router.delete('/productdelete/:id',productc.productdelete)
router.get('/allinproducts',productc.productinall)
router.post('/cartproducts',productc.cartproducts)

module.exports=router