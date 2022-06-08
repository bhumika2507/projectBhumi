
const mongoose = require("mongoose");


   mongoose.connect("mongodb://localhost:27017/e-comm");
  const productsch = new mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    category:String
  });
  const saveInDB = async () => {
  const productsModel = mongoose.model("products", productsch);
  let data = new productsModel
  ({ name: "m8",
     price:10000,
     brand:"xyz",
     category:"mobile" 
   });
    let result = await data.save();
    console.log(result);
}

const updateInDB=async ()=>{
    const productsModel = mongoose.model("products", productsch);
    let data= await productsModel.updateOne(
        {name:"m8"},{$set:{price:202000}}

    )
    console.log(data);
}

const deleteInDB=async()=>{
    const productsModel = mongoose.model("products", productsch);
    let data=await productsModel.deleteOne({name:"m8"});
    console.log(data);
}

const findInDB=async()=>{
    const productsModel = mongoose.model("products", productsch);
    let data=await productsModel.find({name: 'note 11'});
    console.log(data);
}
findInDB();


