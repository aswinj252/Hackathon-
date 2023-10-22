import mongoose from "mongoose";

const shippingScheduleSchema = new mongoose.Schema({
  schedule_number: {type:Number,
    required:true
},
  proposed_date: {
    type:Date,
  required:true
}
});



const Shipping = mongoose.model("Shipping", shippingScheduleSchema);

export default Shipping;
