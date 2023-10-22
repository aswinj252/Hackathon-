const UserRepositoryInt = (repository) =>{
const UserExist = (email) => repository.userExist(email)
const Create = (details) => repository.Create(details)
const CreateOrder = (details) => repository.CreateOrder(details)
const Getorders = () =>repository.Getorders()

return{UserExist,Create,CreateOrder,Getorders}
}
export default UserRepositoryInt