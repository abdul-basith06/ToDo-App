import React, {useEffect, useState} from 'react'
import './Todo.css'

import Addtask from './Addtask'
import Listtask from './Listtask'

const Todo = () => {
    const [tasks,setTask] = useState([]);

    const addTask=(title)=>{
    if (!tasks.some(task => task.title === title)) {
        const newTask = [...tasks, {id: Date.now() , title,isEdit: false }];
        setTask(newTask);
    } else {
        alert('Oops..!!! Task already exists!');
    }
    }

    const editHandler = (item) => {
        setTask((prevTodos) =>
            prevTodos.map((list) => {
                if (list.id === item.id) {
                    return { ...list, isEdit: true };
                }
                return list;
            })
        );
    };

    const updateHandler =(id,newText)=>{
        console.log(id,newText);
        setTask((prevTodos) =>
        prevTodos.map((list) => {
            if (list.id === id) {
                return { ...list, title: newText, isEdit: false, };
            }
            return list;
        })
        );
    }

    const removeTask= (index)=>{
        const newTask = [...tasks];
        newTask.splice(index,1);
        setTask(newTask)
    }

    useEffect(()=>{
        document.title = `You have ${tasks.length} pending task.`
    })
  return (
    <>
    <div className='todo-container'>
        <div className='header'>Get Things Done !!!</div>
        <div className='add-task'> <Addtask addTask={addTask}/> </div>
        <div className='tasks'>
            {tasks.map((task,index)=>(
              <Listtask task={task} removeTask={removeTask} index={index} key={index} isEdit={editHandler} update={updateHandler}/>
            ))}
           
              </div>
    </div>
    </>
  )
}

export default Todo