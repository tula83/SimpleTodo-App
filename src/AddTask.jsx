import React, { useState } from 'react'

const AddTask = ({onAdd}) => {
     const [task,setTask]=useState("");
     const [isDialog,setIsDialog]=useState(false);


  return (
    <div>
     <input type="text" placeholder='add task' onChange={(e)=>setTask(e.target.value)} value={task}/>
     <button onClick={()=>{onAdd(task); setTask("")}} disabled={task===''|| !isNaN(task)}>Add</button>
     
     
   
    </div>
  )
}

export default AddTask