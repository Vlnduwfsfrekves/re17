import { useState } from "react"
import Render from './Render';
import {DivMain} from './App.styled'
import {nanoid} from 'nanoid'
import Form from "./Form";
import Filter from './Filter'
const App=()=>{
    const [name,changeName]=useState('')
    const [number,changeNumber]=useState('')
    const [contacts,changeContacts]=useState([])
    const [filter,changeFilter]=useState('')
    const getName=(e)=>{
        changeName(e.currentTarget.value)
    }
    const getNumber=(e)=>{
        changeNumber(e.currentTarget.value)
    }
    const add=()=>{
        if(name.trim()!=='' && number.trim()!=='' && !contacts.some(contact=>contact.name===name.trim()) && !contacts.some(contact=>contact.number===number.trim())){
            changeContacts([...contacts,{name:name,number:number,id:nanoid()}])
        }else{
            alert('you need to change this contact because you already have this contact')
        }
    }
    const deleteContact=(indOfEl)=>{
        const updatedContacts=[...contacts]
        updatedContacts.splice(indOfEl,1)
        changeContacts(updatedContacts)
    }
    const setFilterLetter=(filt)=>{
        changeFilter(filt)
    }
    return(
        <DivMain>
        <h1>Phonebook</h1>
        <Form name={name} getName={getName} getNumber={getNumber} number={number} add={add}/>
        <Filter filter={filter} setFilterLetter={setFilterLetter}/>
        <h2>Contacts</h2>
        <Render contacts={contacts} filter={filter} deleteContact={deleteContact} />
        </DivMain>
    )
}
export default App