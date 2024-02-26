import React, { useState } from 'react'

const Addtask = ({addTask}) => {
    const [value, setValue] = useState("");
    const addValue=(e)=>{
            e.preventDefault()
            addTask(value)
            setValue("")
    }

   
  return (
    <div>
        <div className='input-container'>
            <form onSubmit={(e)=>addValue(e)}>

            <input type="text" className='input' placeholder='Add a new task....' value={value}
            onChange={(e)=>{setValue(e.target.value)}}/>
            <button type='submit' className='btn btn-secondary mb-2'>ADD</button>
            </form>
        </div>
    </div>
  )
}

export default Addtask