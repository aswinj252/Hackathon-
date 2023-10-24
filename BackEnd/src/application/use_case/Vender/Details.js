const Getdetails = async (id,repository) =>{

const data = await repository.getData(id)
console.log(data);

    
    return(data.email)



}
export default Getdetails