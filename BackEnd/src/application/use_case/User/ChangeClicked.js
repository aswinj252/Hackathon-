const ChangeClicked = async(selectedid,id,repository) =>{
    const update = await repository.change(id)
    console.log(update);
    const clicked = await  repository.handleClick(selectedid,id)
    console.log(clicked);
return{clicked:true}
}
export default ChangeClicked