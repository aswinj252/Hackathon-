const GetOrderByid = async (id,repository,S3Repository) =>{
    const data = await repository.getById(id)

const S3Url = await S3Repository.GetUrl(data.pdf_document)
console.log(S3Url,"url");

   
    data.url = S3Url.url
    console.log(data);
    return {data}
    
    }
    export default GetOrderByid