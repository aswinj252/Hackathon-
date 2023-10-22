const GetOrders = async (DBRrepository) =>{
    const Orders = await  DBRrepository.Getorders()
    console.log(Orders);
    return{Orders}

}
export default GetOrders