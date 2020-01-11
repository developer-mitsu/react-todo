import React from 'react'
import Item from './Item'
import styled from 'styled-components'

const List = ({todos,removeTodos,isEditing, setIsEditing,editTodos}) => {



    return (  
        <ItemWrap>
            {
                todos.map((todo,i) => {
                    return(
                        <Item 
                        content={todo}
                        id={i}
                        key={i}
                        removeTodos={removeTodos}
                        isEditing={isEditing}
                        setIsEditing={setIsEditing}
                        editTodos={editTodos}
                        />
                    )

                })
            }
        </ItemWrap>
    )
}

const ItemWrap = styled.ul`
    list-style: none;
    width:80%;
    padding: 0px;
    margin: 0 auto;
`


export default List