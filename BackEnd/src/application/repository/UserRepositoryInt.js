const UserRepositoryInt = (repository) =>{
const UserExist = (email) => repository.userExist(email)
const Create = (details) => repository.Create(details)
const CreateOrder = (details) => repository.CreateOrder(details)
const Getorders = () =>repository.Getorders()
const getById = (id) => repository.getById(id)
const getData = () => repository.getData()
const dates = (id) => repository.dates(id)
const handleClick = (selectedid,id) => repository.handleClick(selectedid,id)
const change = (id) => repository.change(id)


return{UserExist,Create,CreateOrder,Getorders,getById,getData,dates,handleClick,change}
}
export default UserRepositoryInt