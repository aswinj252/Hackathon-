import config from "../../../config/config.js"
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import OrderEntity from "../../../entities/OrderEntity.js";

const addOrder = async(productName,quantity,date,vender,document,DBRrepository) =>{


 const S3 = new S3Client({
    credentials: {
      accessKeyId: config.accessKey,
      secretAccessKey: config.secret,
    },
    region: config.region,
  });
  const params = {
    Bucket: config.Bucketname,
    Key: document.originalname,
    Body: document.buffer,
    contentType: document.mimetype,
  };

  const command = new PutObjectCommand(params);
  await S3.send(command);



  const orderDetails =  OrderEntity(productName,quantity,date,vender,document.originalname)
  const newOrder = await DBRrepository.CreateOrder(orderDetails)
  console.log(newOrder);

  return {message:"Order Added" ,status:true}

}
export default addOrder