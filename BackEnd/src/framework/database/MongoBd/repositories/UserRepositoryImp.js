import Order from "../Models/Order.js"
import User from "../Models/User.js"

 const UserRepositoryImp = () =>{

    const userExist = (email) => User.findOne({email:email})
    const Create = async  (details) =>{
        const create = new User ({
            email:details.getEmail(),
            password:details.getPassword()
        })
        return create.save();

    }

    const CreateOrder = (details) =>{
        const create = new Order({
            product_name:details.getProductName(),
            quantity:details.getQuantity(),
            date_of_shipping:details.getDateOfShipping(),
            quantity:details.getQuantity(),
            vender:details.getVender(),
            pdf_document:details.getPdfDocument(),
            viewed:false,
            url:"null",
            scheduled:"false"



        })
        return create.save();
    }

    const Getorders = () => Order.find()
    const getById = (id) => Order.findOne({_id:id})

    return {userExist,Create,CreateOrder,Getorders,getById}

 }
 export default UserRepositoryImp