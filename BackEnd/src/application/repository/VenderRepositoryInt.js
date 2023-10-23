const venderRepositoryInt = ( repository) =>{
const VenderExist = (email) => repository.VenderExist(email)
const AdVender = (details) => repository.AdVender(details)
const getDetails = (email) => repository.getDetails(email)
const Activate = (email) => repository.Activate(email)
const getData = (id) => repository.getData(id)
const passwordchange = (email,password) => repository.passwordchange(email,password)
const Getorders = () =>repository.Getorders()
const getById = (id) => repository.getById(id)
const getVenders = ( ) => repository.getVenders()
const create = ( details,id) => repository.create(details,id)
const status = (id) => repository.status(id)
const GetDates = (id) => repository.GetDates(id)

return {VenderExist,AdVender,getDetails,Activate,getData,passwordchange,Getorders,getById,getVenders,create,status,GetDates}
}

export default venderRepositoryInt