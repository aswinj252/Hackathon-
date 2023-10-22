const Getdetails = async (repository) =>{

const data = await repository.getData()
console.log(data);

    
    return(data.email)



}
export default Getdetails