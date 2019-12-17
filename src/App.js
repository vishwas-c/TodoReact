import React from 'react';
import TodoItem from './TodoItem'
import './todoItem.css'

const App = () => {
  return (
    <div className="todolist">
      <TodoItem /> 
      <TodoItem /> 
      <TodoItem /> 
    </div>
  );
}

export default App;
