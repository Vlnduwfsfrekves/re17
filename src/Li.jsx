const Li=({item,index,deleteContact})=>{
    return(
        <li key={index}>
        {`${item.name} ${item.number}`}
        <button onClick={()=>deleteContact(index)}>Delete</button>
        </li>
    )
}
export default Li