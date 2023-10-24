import config from "../../config/config.js"
import { S3Client, PutObjectCommand,GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const S3ServiceImp = () =>
{
const AddData = async(document) =>{
    
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


}


const GetUrl =async(name) =>{
    const S3 = new S3Client({
        credentials: {
          accessKeyId: config.accessKey,
          secretAccessKey: config.secret,
        },
        region: config.region,
      });
     

    const getObjectParams = {
      Bucket: config.Bucketname,
      Key: name,
    };
    const command = new GetObjectCommand(getObjectParams);
    const url = await getSignedUrl(S3, command, { expiresIn: 3600 });
    return{url}


}
return {AddData,GetUrl}
}
export default S3ServiceImp
