
import Vender from "../Models/Vender.js" 
import Order from "../Models/Order.js"
const venderRepositoryImp = ( ) =>{
const VenderExist = (email) => Vender.findOne({email:email})
const AdVender = (details) =>{
    const create = new Vender ({
        email:details.getEmail(),
        password:details.getPassword(),
        activated:false
    })
    return create.save();


}

const getDetails = (email) => Vender.findOne({email:email})
const Activate = (email) => Vender.updateOne({email:email},{$set:{activated:true}})
const getData = (id) => Vender.findOne({_id:id})
const passwordchange = (email,password) => Vender.updateOne({email:email},{$set:{password:password}})
const getVenders = () => Vender.find().select("email")
const Getorders = () => Order.find()
const getById = (id) => Order.findByIdAndUpdate({_id:id},{$set:{viewed:true}})
return {VenderExist,AdVender,getDetails,Activate,getData,passwordchange,getVenders,getById,Getorders}
    
}
export default venderRepositoryImp