const Filter=({filter,setFilterLetter})=>{
    return(
        <label>
        Filter by first letter:
        <br/>
        <input
        type="text"
        name="filterLetter"
        value={filter}
        onChange={(e)=>setFilterLetter(e.currentTarget.value)}
        />
        </label>
    )
}
export default Filter