import React from 'react'

function TodoItem (props) {
  console.log(props)
  return (
    <div className="todoitem">
      <input type="checkbox" onClick={()=> console.log("Clicked")} checked={props.item.completed}/>
      <p>{props.item.text}</p>
    </div>
  )
}

export default TodoItem
