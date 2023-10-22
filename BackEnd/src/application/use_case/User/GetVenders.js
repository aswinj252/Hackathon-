const   GetVenders = async(repository) =>{
    const venderes = await repository.getVenders()
    console.log(venderes,"datea");
    return {venderes}
}
export default GetVenders