const S3ServiceInt = (Repository) =>{
const  AddData = (document) => Repository.AddData(document)
const GetUrl = (name) => Repository.GetUrl(name)
return{AddData,GetUrl}
}
export default S3ServiceInt