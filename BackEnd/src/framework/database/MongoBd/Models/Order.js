import mongoose from "mongoose";


const orderSchema = new mongoose.Schema({

  product_name: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
     required: true 
    },

  date_of_shipping: {
     type: String, 
     required: true 
    },

    vender:{
        type:String,
        required:true
    },

  pdf_document: { 
    type: String, required: true
 },
 viewed:{
    type:String,
    required:true
 },
 scheduled:{
    type:String,
    required:true
 },
 url:{
    type:String,
    required:true
 },
});

const Order = mongoose.model("Order", orderSchema);

export default Order;
