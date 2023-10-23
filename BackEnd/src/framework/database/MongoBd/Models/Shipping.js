import mongoose from "mongoose";

const shippingScheduleSchema = new mongoose.Schema({
  
  date: {
    type:String,
  required:true
},
clicked: {
    type:String,
  required:true
},
orderId: {
    type:String,
  required:true
},



});



const Shipping = mongoose.model("Shipping", shippingScheduleSchema);

export default Shipping;
