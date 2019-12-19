import React from 'react';
import TodoItem from './TodoItem'
import './todoItem.css'
import todosData from './todosData'

const App = () => {
  console.log(todosData)
  const todoItems = todosData
  .map(
    item => <TodoItem key={item.id} item={item}/> 
  )
  return (
    <div className="todolist">  
      {todoItems}
    </div>
  );
}

export default App;
