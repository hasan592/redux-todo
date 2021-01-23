import React from 'react';
import {connect} from 'react-redux';
import {deleteTodo} from "../../action";
import {editTodo} from "../../action";

export const List = (props) => {
    const todos =(t,i) => {
        const newTodo = prompt("Enter todo",t.message)
        console.log(todos);
    }
    return (
    <ul>
        {props.todos.map((todo, index) => (
            <li key= {index}>
                {todo.message} <button onClick={() => props.dispatch(deleteTodo(todo.id))}>
                    DELETE
                    </button></li>
        ))}

{props.todos.map((todo, index) => (
            <li key= {index}>
                {todo.message} <button onClick={()=> todos (todo,index)} >
                    EDIT
                    </button></li>
        ))}
    </ul> 
    );
    // onClick={() => props.dispatch(editTodo(todo.id,todo.message))}   
};

const mapStateToProps = (state) => ({
    todos: state.todos.data,
})


export default connect(mapStateToProps) (List);