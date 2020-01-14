import React, {useState} from 'react'
import Title from './Title'
import Form from './Form'
import List from './List'
import './main.css'

const App = () => {

    const [todos, setTodos] = useState([])

    const [editTodo, setEditTodo] = useState({})

    const [isEditing, setIsEditing] =React.useState(false)


   //追加機能
    const addTodos = (value) => {
        setTodos([
            ...todos,
            value
        ])    
    }

    //削除機能
    const removeTodos = (id) => {
        setTodos(
            todos.filter( function( value,index ) {
                if ( index !== id)
                return value 
        })
        )
    }

    //編集機能
    const createEditTodo = (content,id) => {
        setEditTodo({
            content: content,
            id: id
        })
        }  
    
    const editDone = (editValue) => {
        editTodo.content = editValue
        setTodos(
            todos.map((value,index) => {
                if ( index === editTodo.id) {
                    return value = editTodo.content
                } else {
                    return value
                }
        })
        )
    }

    return (
        <div className='app'>
            <Title />
            <Form 
                addTodos={addTodos} editTodo={editTodo} setEditTodo={setEditTodo} isEditing={isEditing} setIsEditing={setIsEditing} editDone={editDone} editTodo={editTodo}  
            />
            <List 
                todos={todos} removeTodos={removeTodos}  createEditTodo={createEditTodo} isEditing={isEditing} setIsEditing={setIsEditing} editDone={editDone}
            />
        </div>
    )
} 

export default App