import React, { useState } from 'react';
import './App.css';
import { TodoList } from './TodoList';
import { AddTodoForm } from './src/AddTodoListForm/AddTodoListForm';



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
  return (
    <React.Fragment>
      <TodoList todos={todos} toggleTodo = {toggleTodo} />
      <AddTodoForm />

    </React.Fragment>
  );
};

export default App;
