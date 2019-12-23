import React, { Component } from 'react';
import TodoItem from './TodoItem'
import './todoItem.css'
import todosData from './todosData'

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
    this.clickHandler = this.clickHandler.bind(this)
  }
  clickHandler(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(
        todo => {
          if(todo.id === id){
            todo.completed = !todo.completed
          }
          return todo
        })
        return {
          todos: updatedTodos
        }
    })
  }
  render() {
    const todoItems = this.state.todos
    .map(
      item => <TodoItem key={item.id} item={item} clickHandler={this.clickHandler}/> 
    )
    return (
      <div className="todolist">  
        {todoItems}
      </div>
    );
        
  }
}

export default App;
