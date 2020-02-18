const express = require('express');
const products = require("./products");
const manufacture=require("./manufacture");
const category=require("./category");
const properties=require("./properties");
const router =express.Router();
router.get('/',(req, res) => {
    products.findall({
        include: [{model:manufacture}]
    }) .then(res1 =>{
        res.json(res1);
    });
});
router.post('/',(req, res) => {
if(req.body !=null){
    console.log(req.body);
    let newpdt = {
        name:req.body.name,
        price:req.body.price
    };
   let newmanu=req.body.manufacture;
    products.create(newPdt).then(pdt => {
        manufacture.findone({where:{id:newmanu}}).then(resmanu =>{
            pdt.setmanufactures(resmanu);
                console.log("saved");
        });
      
        
    });
}
  res.json({status:"executed"});
});
router.post("/manufacture",(req,res)=> {
    if(req.body != null){
        console.log(req.body);
    }
})