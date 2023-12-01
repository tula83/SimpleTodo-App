import './App.css'
import AddTask from './AddTask'
import { useReducer } from 'react';
import TaskList from './TaskList';

const initialTasks = [
  {id: 0, text: 'Visit Kafka Museum', done: true},
  {id: 1, text: 'Watch a puppet show', done: false},
  {id: 2, text: 'Lennon Wall pic', done: false},
];

let id=3;

const ReducerFunction=(state,action)=>{

  switch(action.type){
     case 'ADD':
         return [...state,{id:action.id,text:action.text,done:false}]

      
     case 'DEL':
      return state.filter((item)=>item.id!==action.id)


    case 'CHANGE':
         return state.map((item)=>{

          if(item.id===action.id){
            return {...item,text:action.text}
          }
          else{
            return item;
          }
          
         })
        
          
     

     default:
      return state;
      
  }

}


function App() {


  const[state,dispatch]=useReducer(ReducerFunction,initialTasks)

  
  
  const handleAdd=(task)=>{
     dispatch({type:"ADD",id:id++,text:task})

    
    
  }
  
  const handleDelete=(del_id)=>{
       dispatch({type:'DEL',id:del_id})
  }

  const handleChange=(task_name)=>{
   
    dispatch({type:"CHANGE",id:task_name.id,text:task_name.text})
  }

  return (
    <>
      <h2>Task list</h2>
       <AddTask onAdd={handleAdd}/>
       <TaskList tasks={state} onDelete={handleDelete} onChange={handleChange}/>
        
        
     
    </>
  )
}

export default App
