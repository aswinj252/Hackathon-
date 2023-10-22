const UserRepositoryInt = (repository) =>{
const UserExist = (email) => repository.userExist(email)
const Create = (details) => repository.Create(details)
const CreateOrder = (details) => repository.CreateOrder(details)
const Getorders = () =>repository.Getorders()
const getById = (id) => repository.getById(id)
const getData = () => repository.getData()

return{UserExist,Create,CreateOrder,Getorders,getById,getData}
}
export default UserRepositoryInt