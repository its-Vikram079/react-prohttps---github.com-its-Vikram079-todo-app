import React, { useState, useEffect } from 'react';
import axios from 'axios';
import todoStyle from "./userlist.module.css"

const TodoList = ({ user }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (!user) return;

    axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${user.id}`)
      .then(response => {
        setTodos(response.data);
      })
      .catch(error => {
        console.error('Error fetching todos:', error);
      });
  }, [user]);

  return (
    <div id={todoStyle.listWrapper}>
      <h2 style={{color:'green',fontSize:'30px'} }>Todo List</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>⚡
            {todo.title} - Completed: {todo.completed ? 'Yes' : 'No'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
