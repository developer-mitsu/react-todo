import React, {useState} from 'react'
import './main.css'

const Form = ({addTodos,isEditing, setIsEditing,editDone,editTodo}) => {

    const [value, setValue] = useState(``)

    const [editValue, setEditValue] = useState('')

    //リストを追加
    const hundleSubmit = (e) => {
        e.preventDefault()
        addTodos(value)
        setValue('')
    }

    //リストを編集
    const hundleEditSubmit = (e) => {
        e.preventDefault()
        editDone(editValue)
        setIsEditing(!isEditing)
        setEditValue('')
    }

    return (
    <form 
        className='form' 
        onSubmit={
            isEditing ?
            hundleEditSubmit:
            hundleSubmit
        }
    >
        <input  
            className='input' 
            type="text" 
            onChange = {
                isEditing ?
                (e) => {setEditValue(e.target.value)}:
                (e) => {setValue(e.target.value)}
            }
            value = {
                isEditing ?
                editValue:
                value
            }
        />
        <button className='addInput' type="submit">
        {
        isEditing ?
        'edit':
        'add'
        } 
        </button>
    </form>
    )
}

export default Form