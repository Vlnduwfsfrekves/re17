import {Div,Button} from './App.styled'
const Form=({name,getName,number,getNumber,add})=>{
    return(
        <Div>
        <h3>Name</h3>
        <label>
        <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash, and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={getName}
        />
        </label>
        <h3>Number</h3>
        <label>
        <input
        type="tel"
        name="number"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash, and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={number}
        onChange={getNumber}
        />
        </label>
        <br/>
        <label>
        <Button><button onClick={add}>Add contact</button></Button>
        </label>
        </Div>
    )
}
export default Form