import React, { useState } from 'react';
import './App.css';
import { TodoList } from './TodoList';
import {AddTodoForm}  from './AddTodoListForm/AddTodoListForm';



const initialTodos: Array<Todo> = [
  { text: 'Laundry', complete: true },
  { text: 'Cleaning kitchen', complete: false },
];


const App: React.FC = () => {
  const [todos, setTodos]= useState(initialTodos);
  
  const toggleTodo : ToggleTodo = selectedTodo =>{
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo){
        return {
          ...todo,
          complete: !todo.complete
        };
      }
      return todo;
    })
    setTodos(newTodos); 
  }

  const addTodo:AddTodo = newTodo =>{
    setTodos([...todos, {text:newTodo, complete:false}])
  }


  return (
    <React.Fragment>
      <TodoList todos={todos} toggleTodo = {toggleTodo} />
      <AddTodoForm addTodo={addTodo}/>

    </React.Fragment>
  );
};

export default App;
