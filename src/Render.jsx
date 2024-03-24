import Li from './Li'
const Render=({contacts,filter,deleteContact})=>{
    const filterA=contacts.filter(contact=>contact.name.toLowerCase().startsWith(filter.toLowerCase()))
    return(
        <ul>
        {filterA.map((item,index)=>(
            <Li item={item} index={index} deleteContact={deleteContact}/>
        ))}
        </ul>    
    )
}
export default Render