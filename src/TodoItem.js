import React from 'react'

function TodoItem (props) {
  const completedStyle = {
    fontStyle : "Italic",
    color: "gray",
    textDecoration: "line-through"
  }
  console.log(props)
  return (
    <div className="todoitem">
      <input type="checkbox" 
      checked={props.item.completed} 
      onChange={() => props.clickHandler(props.item.id)} />
      <p style={props.item.completed ? completedStyle : null}>{props.item.text}</p>
    </div>
  )
}

export default TodoItem
