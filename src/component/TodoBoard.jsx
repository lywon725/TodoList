import React from 'react';
import '../App.css';
import TodoItem from './TodoItem';

const TodoBoard = (props) => {

    //console.log("todoBoard", props.todoList)
    return (
        <div>
            <h1> Todo List</h1>
            {props.todoList.map((item)=><TodoItem item={item}/>)}
            <TodoItem/>
        </div>
    );
};

export default TodoBoard;