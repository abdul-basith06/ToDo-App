import React, { useState } from 'react'


const Listtask = ({task, removeTask, index,isEdit,update}) => {
    const [value,setValue] = useState(task.title)
  return (
    <>
        <div className='list-tasks col-12 d-flex'>
            <div className='col-10'>
                {!task.isEdit ? task.title :  <input type="text" onChange={(e)=>setValue(e.target.value)} value={value} />}
           
            </div>
            <div className='col-2'>
            {!task.isEdit ? <button onClick={()=>isEdit(task)}>✏️</button> : <button onClick={()=>update( task.id,value)} >✅</button>}
            <button onClick={()=>{removeTask(index)}} className='btn btn-secondary' style={{ float: 'right' }}>DELETE</button>
            </div>
        </div>
    </>
  )
}

export default Listtask