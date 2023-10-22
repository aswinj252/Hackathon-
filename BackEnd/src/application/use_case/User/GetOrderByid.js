const GetOrderByid = async (id,repository) =>{
const data = await repository.getById(id)
console.log(data);
return {data}

}
export default GetOrderByid