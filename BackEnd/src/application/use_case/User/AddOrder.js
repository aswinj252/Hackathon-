
import OrderEntity from "../../../entities/OrderEntity.js";

const addOrder = async(productName,quantity,date,vender,document,DBRrepository,S3Repositry) =>{

    const s3_Add = await S3Repositry.AddData(document) 



  const orderDetails =  OrderEntity(productName,quantity,date,vender,document.originalname)
  const newOrder = await DBRrepository.CreateOrder(orderDetails)
  console.log(newOrder);

  return {message:"Order Added" ,status:true}

}
export default addOrder