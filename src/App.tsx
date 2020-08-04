import React from 'react';
import './App.css';
import { TodoListItem } from './TodoListItem';

const todos: Array<Todo> =[
  { text: "Laundry", complete: true},
  {text: "Cleaning kitchen", complete: false}

]

const App: React.FC = () =>{
  return <TodoListItem
  todo= {todos[0]}
  />
}

export default App;
