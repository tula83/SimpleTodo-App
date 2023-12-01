import React, { useState } from 'react'
const Task=({task,onChange,onDelete})=>{

    const [isediting,setIsediting]=useState(false);
    let taskContent;

    const [isDialog,setIsDialog]=useState(false)
    
    const [taskItem,setTaskItem]=useState({id:"",text:"",dialog:false})
    const handleDialog=()=>{
          
          setTaskItem({...taskItem,dialog:false});

          onChange(taskItem)

    }

    return(

        <div>
         {task.text}
          <button  onClick={()=>setTaskItem( {...taskItem,dialog:true,id:task.id,text:task.text})}>Edit</button>

          <button onClick={()=>{onDelete(task.id)}}>Delete</button>

          {taskItem.dialog&&
            <div className='edit'>
              <h2>Edit task</h2>

               <input type="text" value={taskItem.text} onChange={(e)=>setTaskItem({...taskItem,text:e.target.value})}  />

              <button onClick={handleDialog}>Save</button>
            
           </div>
        
        }
        </div>
    )

}


const TaskList = ({tasks,onDelete,onChange}) => {
  return (
    <div>
    <h2>TaskList</h2>
      <ul>
        {tasks.map((item)=>
              (
                <li key={item.id}>
                   <Task task={item} onChange={onChange} onDelete={onDelete}/>
                </li>
              )
             
       ) }
      </ul>
    
    
    </div>
  )
}

export default TaskList