import React from 'react'

const Addtask = () => {
  return (
    <div>
        <div className='input-container'>
            <input type="text" className='input' placeholder='Add a new task....'/>
            <button className='btn btn-secondary mb-2'>ADD</button>
        </div>
    </div>
  )
}

export default Addtask