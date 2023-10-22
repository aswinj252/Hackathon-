const venderRepositoryInt = ( repository) =>{
const VenderExist = (email) => repository.VenderExist(email)
const AdVender = (details) => repository.AdVender(details)
const getDetails = (email) => repository.getDetails(email)
const Activate = (email) => repository.Activate(email)
const getData = (id) => repository.getData(id)
const passwordchange = (email,password) => repository.passwordchange(email,password)
const Getorders = () =>repository.Getorders()
const getById = (id) => repository.getById(id)

return {VenderExist,AdVender,getDetails,Activate,getData,passwordchange,Getorders,getById}
}

export default venderRepositoryInt