

const Dates = async ( id,repository) =>{
    const dates = await repository.GetDates(id)
    console.log(dates);

}
export default Dates