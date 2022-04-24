import React from 'react'

export default function DeleteTask(props) {
  return (
    <span >
    <button id="done" onClick={() => props.deleteTask(props.index)} >Done</button>
    </span>
  )
}
