import React from 'react'
import './Todo.css'
import Addtask from './Addtask'
import Listtask from './Listtask'

const Todo = () => {
  return (
    <>
    <div className='todo-container'>
        <div className='header'>Get Things Done !!!</div>
        <div className='add-task'> <Addtask /> </div>
        <div className='tasks'> <Listtask /> </div>
    </div>
    </>
  )
}

export default Todo