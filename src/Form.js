import React, {useState} from 'react'
import './main.css'

const Form = ({addTodos,isEditing, setIsEditing,text}) => {

    const [value, setValue] = useState(``)

    const hundleSubmit = (e) => {
        e.preventDefault()
        addTodos(value)
        setValue('')
    }

    // const hundleEditSubmit = (e) => {
    //     e.preventDefault()
    // }

    console.log(text)



    return (
    <form 
        className='form' 
        onSubmit={hundleSubmit}
    >
        <input  
            className='input' 
            type="text" 
            onChange = {(e) => {setValue(e.target.value)}}
            value = {
                isEditing ?
                value:
                text
            }
        />
        <button className='addInput' type="submit" onClick={() =>{
                setIsEditing(!isEditing)
            }} >{
            isEditing ?
            'edit':
            'add'
            }
            </button>
    </form>
    )
}

export default Form