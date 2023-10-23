import ShippingEntity from "../../../entities/ShippingEntity.js"


const ScheduleShipping = async(date,date1,date2,id,repository) =>{
    
    const dateObject1 = { date: date, clicked: false };
    const dateObject2 = { date: date1, clicked: false };
    const dateObject3 = { date: date2, clicked: false };


    const dates= []
    dates.push(dateObject1)
    dates.push(dateObject2)
    dates.push(dateObject3)






 
   const shipping=   await repository.create(dates,id)
  console.log(shipping,"fddf");

    const message = await repository.status(id)

     return{scheduled:true,shipping,message:"Schedule added"}
 

}
export default ScheduleShipping