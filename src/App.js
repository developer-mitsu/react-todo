import React, {useState} from 'react'
import Title from './Title'
import Form from './Form'
import List from './List'
import './main.css'

const App = () => {

    const [todos, setTodos] = useState([
        '宿題をする',
        '洗濯をする',
        'ああああああ',
        'いいいいいい',
        'ううううううう'
    ])

    const [text, setText] = useState('')

    const [isEditing, setIsEditing] =React.useState(false)

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
    const editTodos = (content) => {
        setText({text: content}) 
        }
        
    // const editValue = (content) => {
    //     // setText({text: content})
    //     console.log(content)
    // }

    return (
        <div className='app'>
            <Title />
            <Form  addTodos={addTodos} isEditing={isEditing} setIsEditing={setIsEditing} editTodos={editTodos} text={text}  />
            <List todos={todos} removeTodos={removeTodos} isEditing={isEditing} setIsEditing={setIsEditing} editTodos={editTodos}/>
        </div>
    )
} 

export default App